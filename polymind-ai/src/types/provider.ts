// src/types/provider.ts

import { AIRequest } from "./request";

export interface ProviderUsage {
  promptTokens?: number;
  completionTokens?: number;
  totalTokens?: number;
}

export interface ProviderResult {
  text: string;

  usage?: ProviderUsage;

  metadata?: Record<string, unknown>;
}

export interface AIProvider {
  readonly name: string;

  generate(request: AIRequest): Promise<ProviderResult>;
}