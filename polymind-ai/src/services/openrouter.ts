import OpenAI from "openai";
import { env } from "@/utils/env";

export const openrouter = new OpenAI({
  apiKey: env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});