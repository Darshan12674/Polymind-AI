import { AIResponse } from "./response";
import { JudgeResult } from "./judge";

export interface AIResult {
  responses: AIResponse[];

  evaluation: JudgeResult;
}