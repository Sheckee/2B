import http from 'node:http';

const port = Number.parseInt(process.env.PORT ?? '3000', 10);
const startedAt = new Date().toISOString();

const server = http.createServer((request, response) => {
  if (request.url === '/health') {
    response.writeHead(200, { 'content-type': 'application/json; charset=utf-8' });
    response.end(JSON.stringify({
      status: 'ok',
      service: 'obsidian-offline-agent-placeholder',
      startedAt,
      note: 'This is only a Railway health target. Obsidian Mobile plugin inference remains local/offline.'
    }));
    return;
  }

  response.writeHead(404, { 'content-type': 'application/json; charset=utf-8' });
  response.end(JSON.stringify({ error: 'not_found' }));
});

server.listen(port, '0.0.0.0', () => {
  console.log(`health server listening on ${port}`);
});

process.on('SIGTERM', () => {
  server.close(() => process.exit(0));
});
