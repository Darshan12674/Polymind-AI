// src/providers/gemini.ts

import { BaseProvider } from "./base";
import { ProviderResult } from "@/types/provider";
import { AIRequest } from "@/types/request";
import { gemini } from "@/services/gemini";

export class GeminiProvider extends BaseProvider {
  readonly name = "Gemini";

  async generate(
    request: AIRequest
  ): Promise<ProviderResult> {
    const result = await gemini.models.generateContent({
      model: "gemini-2.5-flash",
      contents: request.prompt,
    });

    return {
      text: result.text ?? "",
      usage: result.usageMetadata
        ? {
            promptTokens: result.usageMetadata.promptTokenCount,
            completionTokens:
              result.usageMetadata.candidatesTokenCount,
            totalTokens:
              result.usageMetadata.totalTokenCount,
          }
        : undefined,
      metadata: {
        finishReason:
          result.candidates?.[0]?.finishReason,
      },
    };
  }
}