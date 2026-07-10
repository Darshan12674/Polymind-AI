import { GeminiProvider } from "./gemini";
import { DeepSeekProvider } from "./deepseek";
import { LlamaProvider } from "./llama";
import { QwenProvider } from "./qwen";
import { AIProvider } from "@/ types/provider"

export const providers: AIProvider[] = [
    new GeminiProvider(),
    new DeepSeekProvider(),
    new LlamaProvider(),
    new QwenProvider()
]