import React, { useState } from 'react';
import { Play, Terminal, CheckCircle2, Cpu, RefreshCw } from 'lucide-react';
import {
  APIFY_ACTOR_PRESETS,
  ApifyActorPreset,
  AutomationExecutionResult,
  triggerAutomationEndpoint,
} from '../utils/apifyConnector';

export const ApifyAutomationConsole: React.FC = () => {
  const [selectedPreset, setSelectedPreset] = useState<ApifyActorPreset>(APIFY_ACTOR_PRESETS[0]);
  const [endpointInput, setEndpointInput] = useState<string>(APIFY_ACTOR_PRESETS[0].defaultEndpoint);
  const [jsonPayloadText, setJsonPayloadText] = useState<string>(
    JSON.stringify(APIFY_ACTOR_PRESETS[0].sampleInput, null, 2)
  );
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [lastResult, setLastResult] = useState<AutomationExecutionResult | null>(null);

  const handleSelectPreset = (preset: ApifyActorPreset) => {
    setSelectedPreset(preset);
    setEndpointInput(preset.defaultEndpoint);
    setJsonPayloadText(JSON.stringify(preset.sampleInput, null, 2));
    setJsonError(null);
  };

  const handleTrigger = async () => {
    setJsonError(null);
    let parsedPayload: Record<string, unknown> = {};
    try {
      parsedPayload = JSON.parse(jsonPayloadText);
    } catch {
      setJsonError('Invalid JSON payload format. Please verify brackets and quotes.');
      return;
    }

    setIsRunning(true);
    try {
      const result = await triggerAutomationEndpoint({
        actorId: selectedPreset.actorId,
        endpointUrl: endpointInput,
        payload: parsedPayload,
      });
      setLastResult(result);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <section
      id="apify-ai-endpoint"
      aria-label="Apify and Live AI Automation Endpoint Integration"
      className="py-10 sm:py-14 px-4 sm:px-8 max-w-7xl mx-auto"
    >
      <div className="rounded-2xl bg-[#090B14]/95 border border-[#8A2BE2]/45 p-6 sm:p-10 shadow-[0_0_40px_rgba(138,43,226,0.14)]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <span className="text-xs font-semibold tracking-wider text-[#00F5FF] block mb-1">
              LIVE APIFY ACTOR &amp; AI WEBHOOK CONNECTOR
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Interactive Apify &amp; AI Automation Endpoint Sandbox
            </h2>
            <p className="mt-1.5 text-sm text-slate-300 max-w-3xl">
              Test or trigger live JSON automation workflows compatible with Apify Actors and custom
              LLM webhooks directly from the browser.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 text-xs font-mono-tabular text-[#10B981] shrink-0">
            <Cpu className="w-4 h-4 text-[#00F5FF]" />
            <span>REST / JSON Webhook Ready</span>
          </div>
        </div>

        {/* Preset Selector Tabs */}
        <div className="mt-6">
          <span className="text-xs font-semibold text-slate-400 block mb-2.5">
            Select Automation Actor or AI Webhook Preset:
          </span>
          <div className="flex flex-wrap items-center gap-2.5">
            {APIFY_ACTOR_PRESETS.map((preset) => {
              const active = selectedPreset.id === preset.id;
              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => handleSelectPreset(preset)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    active
                      ? 'bg-[#8A2BE2] text-white shadow-[0_0_18px_rgba(138,43,226,0.45)]'
                      : 'bg-[#05050A] text-slate-300 border border-white/10 hover:border-[#00F5FF]/50 hover:text-white'
                  }`}
                >
                  {preset.name}
                </button>
              );
            })}
          </div>
          <p className="mt-2.5 text-xs text-slate-400">{selectedPreset.description}</p>
        </div>

        {/* Input & Output Split Grid */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Endpoint & JSON Input */}
          <div className="space-y-4">
            <div>
              <label
                htmlFor="apify-endpoint-url"
                className="block text-xs font-semibold text-slate-300 mb-1.5"
              >
                Target Apify Actor ID or Webhook Endpoint URL
              </label>
              <input
                id="apify-endpoint-url"
                type="text"
                value={endpointInput}
                onChange={(e) => setEndpointInput(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#05050A] border border-white/15 font-mono-tabular text-xs text-[#00F5FF] focus:outline-none focus:border-[#00F5FF]"
              />
            </div>

            <div>
              <label
                htmlFor="apify-json-payload"
                className="block text-xs font-semibold text-slate-300 mb-1.5"
              >
                JSON Input Payload
              </label>
              <textarea
                id="apify-json-payload"
                rows={6}
                value={jsonPayloadText}
                onChange={(e) => setJsonPayloadText(e.target.value)}
                className="w-full p-3.5 rounded-xl bg-[#05050A] border border-white/15 font-mono-tabular text-xs text-slate-200 focus:outline-none focus:border-[#00F5FF]"
              />
              {jsonError && (
                <p className="mt-1.5 text-xs text-rose-400" role="alert">
                  {jsonError}
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={handleTrigger}
              disabled={isRunning}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#00F5FF] hover:bg-[#00F5FF]/90 text-[#05050A] font-bold text-xs sm:text-sm shadow-[0_0_22px_rgba(0,245,255,0.35)] transition-all cursor-pointer whitespace-nowrap"
            >
              {isRunning ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Executing Actor Run...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>Trigger Live Automation Workflow</span>
                </>
              )}
            </button>
          </div>

          {/* Right: Live JSON Execution Response */}
          <div className="flex flex-col justify-between rounded-xl bg-[#05050A] border border-white/10 p-4 sm:p-5">
            <div>
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-white/10 text-xs font-mono-tabular">
                <span className="inline-flex items-center gap-1.5 text-slate-300">
                  <Terminal className="w-4 h-4 text-[#00F5FF]" />
                  <span>Execution Output Stream</span>
                </span>
                {lastResult ? (
                  <span className="inline-flex items-center gap-1 text-[#10B981] font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>
                      {lastResult.status} · {lastResult.latencyMs}ms
                    </span>
                  </span>
                ) : (
                  <span className="text-slate-500">Ready to trigger</span>
                )}
              </div>

              <pre
                data-testid="apify-execution-output"
                className="mt-3 text-xs font-mono-tabular text-slate-200 overflow-x-auto leading-relaxed max-h-60"
              >
                {lastResult
                  ? JSON.stringify(lastResult, null, 2)
                  : JSON.stringify(
                      {
                        status: 'IDLE_READY',
                        actorId: selectedPreset.actorId,
                        message:
                          'Click "Trigger Live Automation Workflow" to execute a live JSON request.',
                      },
                      null,
                      2
                    )}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
