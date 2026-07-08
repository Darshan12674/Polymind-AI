import { AIResponse } from "./response"

export interface AIProvider {
    readonly name: string

    generateResponse(prompt:string):Promise<AIResponse>
}