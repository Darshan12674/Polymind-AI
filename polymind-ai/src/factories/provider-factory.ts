import { ModelConfig } from "@/config/models";

import { AIProvider } from "@/types/provider";

import { GeminiProvider } from "@/providers/gemini";
import { OpenRouterProvider } from "@/providers/openrouter";

export class ProviderFactory {
    static create(config: ModelConfig): AIProvider {
        switch (config.provider) {
            case "google": 
                return new GeminiProvider()

            case "openrouter":
                return new OpenRouterProvider(
                    config.name,
                    config.model
                )

                default:
                    throw new Error(`Unsupported provider: ${config.provider}`)
        }
    }
}