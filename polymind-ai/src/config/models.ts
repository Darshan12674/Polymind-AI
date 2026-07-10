export type ProviderType = "google" | "openrouter"

export interface ModelConfig {
  name: string;
  provider: ProviderType;
  model: string;
  enabled: boolean;

  judge?: boolean;
  priority?: number;
  fallback?: string[];
}

export const MODELS: ModelConfig[] = [
    {
        name: "Gemini",
        provider:"google",
        model: "gemini-2.5-flash-lite",
        enabled: true
    },

    {
    name: "DeepSeek",
    provider: "openrouter",
    //model: "deepseek/deepseek-chat-v3-0324",
    model: "deepseek/deepseek-r1-0528:free",
    enabled: true,
  },

  {
    name: "Llama",
    provider: "openrouter",
    //model: "meta-llama/llama-3.3-70b-instruct",
    model: "meta-llama/llama-3.3-70b-instruct:free",
    enabled: true,
  },

  {
    name: "Qwen",
    provider: "openrouter",
    // model: "qwen/qwen3-235b-a22b",
    model: "qwen/qwen3-235b-a22b:free",
    enabled: true,
  },

]