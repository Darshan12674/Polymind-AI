import { BaseProvider } from "./base";
import { ProviderResult } from "@/types/provider";
import { openrouter } from "@/services/openrouter";
import { AIRequest } from "@/types/request";

export class OpenRouterProvider extends BaseProvider {
  constructor(
    readonly name: string,
    private readonly model: string
  ) {
    super();
  }

  async generate(request: AIRequest): Promise<ProviderResult> {
    const completion = await openrouter.chat.completions.create({
      model: this.model,
      messages: [
        {
          role: "user",
          content: request.prompt,
        },
      ],
    });

    return {
      text: completion.choices[0]?.message?.content ?? "",

      usage: completion.usage
        ? {
            promptTokens: completion.usage.prompt_tokens,
            completionTokens: completion.usage.completion_tokens,
            totalTokens: completion.usage.total_tokens,
          }
        : undefined,

      metadata: {
        id: completion.id,
        model: completion.model,
      },
    };
  }
}