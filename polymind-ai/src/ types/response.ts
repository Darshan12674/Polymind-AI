export interface AIResponse {
  model: string;

  provider: string;

  content: string;

  latency: number;

  success: boolean;

  error?: string;

  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };

  metadata?: Record<string, unknown>;
}