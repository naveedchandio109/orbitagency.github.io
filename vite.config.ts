import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    base: './',
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'orbit-inquiry-and-automation-api',
        configureServer(server) {
          server.middlewares.use('/api/inquiries', (req, res, next) => {
            if (req.method === 'POST') {
              let body = '';
              req.on('data', (chunk) => {
                body += chunk.toString();
              });
              req.on('end', () => {
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 200;
                res.end(
                  JSON.stringify({
                    ok: true,
                    status: 'dispatched',
                    receivedAt: new Date().toISOString(),
                  })
                );
              });
              return;
            }
            next();
          });

          server.middlewares.use('/api/automation/trigger', (req, res, next) => {
            if (req.method === 'POST') {
              let body = '';
              req.on('data', (chunk) => {
                body += chunk.toString();
              });
              req.on('end', () => {
                let parsed: Record<string, unknown> = {};
                try {
                  parsed = JSON.parse(body || '{}');
                } catch {
                  parsed = {};
                }
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 200;
                res.end(
                  JSON.stringify({
                    ok: true,
                    provider: parsed.provider || 'apify-ai-bridge',
                    actorOrWebhookId: parsed.actorId || 'orbit-agency/ai-lead-extractor',
                    runId: `RUN-${Date.now().toString(36).toUpperCase()}`,
                    status: 'SUCCEEDED',
                    executedAt: new Date().toISOString(),
                    datasetItemsCount: 3,
                    sampleOutput: [
                      {
                        entity: 'Orbit Agency Automated Pipeline',
                        leadScore: 98,
                        qualificationStatus: 'VERIFIED_HIGH_INTENT',
                        recommendedAction: '24-Hour Prototype Kickoff',
                      },
                    ],
                  })
                );
              });
              return;
            }
            next();
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
