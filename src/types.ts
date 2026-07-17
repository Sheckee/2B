export type EngineKind = 'llama-cpp' | 'mlc-llm' | 'llama-rn' | 'pocketpal' | 'ollama' | 'mock';

export interface ModelProfile {
  id: string;
  displayName: string;
  parametersB: number;
  quantization: 'Q2_K' | 'Q3_K_M' | 'Q4_K_M' | 'Q5_K_M' | 'Q8_0' | 'int4' | 'int8';
  contextTokens: number;
  estimatedRamMb: number;
  estimatedStorageMb: number;
  strengths: Array<'reasoning' | 'writing' | 'coding' | 'speed' | 'low-memory' | 'long-context'>;
}

export interface GenerationRequest {
  messages: ChatMessage[];
  systemPrompt: string;
  maxTokens: number;
  temperature: number;
  topP: number;
  stop?: string[];
  tools?: ToolDefinition[];
}

export interface GenerationChunk {
  text: string;
  done: boolean;
  usage?: TokenUsage;
}

export interface LlmEngine {
  readonly kind: EngineKind;
  isAvailable(): Promise<boolean>;
  loadModel(profile: ModelProfile): Promise<void>;
  unloadModel(): Promise<void>;
  stream(request: GenerationRequest, signal: AbortSignal): AsyncIterable<GenerationChunk>;
  embed?(texts: string[]): Promise<number[][]>;
}

export interface ChatMessage {
  id: string;
  role: 'system' | 'user' | 'assistant' | 'tool';
  content: string;
  createdAt: number;
  sourcePath?: string;
  toolCallId?: string;
}

export interface TokenUsage {
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
}

export interface VaultChunk {
  id: string;
  path: string;
  headingPath: string[];
  text: string;
  startLine: number;
  endLine: number;
  tags: string[];
  links: string[];
  backlinks: string[];
  frontmatter: Record<string, unknown>;
  modifiedAt: number;
  embedding?: number[];
}

export interface RetrievalQuery {
  text: string;
  activeFile?: string;
  tags?: string[];
  limit: number;
  includeBacklinks: boolean;
  recencyBoost: boolean;
}

export interface RetrievalResult {
  chunk: VaultChunk;
  score: number;
  reasons: string[];
}

export interface MemoryRecord {
  id: string;
  kind: 'conversation-summary' | 'user-preference' | 'project-fact' | 'task-state' | 'reflection';
  text: string;
  confidence: number;
  createdAt: number;
  updatedAt: number;
  relatedPaths: string[];
  embedding?: number[];
}

export interface ToolDefinition {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  risk: 'read-only' | 'write-note' | 'delete-or-move' | 'external';
}

export interface ToolCall {
  id: string;
  name: string;
  arguments: Record<string, unknown>;
}

export interface ToolResult {
  callId: string;
  ok: boolean;
  content: string;
  changedPaths: string[];
}

export interface AgentPlanStep {
  id: string;
  title: string;
  status: 'pending' | 'running' | 'done' | 'failed' | 'skipped';
  tool?: ToolCall;
}

export interface AgentRun {
  id: string;
  userGoal: string;
  plan: AgentPlanStep[];
  messages: ChatMessage[];
  retrievedContext: RetrievalResult[];
  createdAt: number;
  updatedAt: number;
}
