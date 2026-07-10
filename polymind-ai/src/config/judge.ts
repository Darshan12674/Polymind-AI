import { GeminiProvider } from "@/providers/gemini";
import { AIProvider } from "@/types/provider";

export const judgeProvider: AIProvider =
     new GeminiProvider()