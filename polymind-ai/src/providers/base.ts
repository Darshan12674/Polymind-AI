// src/providers/base.ts

import { AIProvider, ProviderResult } from "@/types/provider";
import { AIRequest } from "@/types/request";

export abstract class BaseProvider implements AIProvider {
  abstract readonly name: string;

  abstract generate(
    request: AIRequest
  ): Promise<ProviderResult>;
}