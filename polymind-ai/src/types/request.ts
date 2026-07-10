export interface AIRequest {
  prompt: string;

  systemPrompt?: string;

  temperature?: number;

  maxTokens?: number;

  stream?: boolean;
}