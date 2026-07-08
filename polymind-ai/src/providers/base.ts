import { AIProvider } from "../ types/provider"

export abstract class BaseProvider implements AIProvider {
    abstract readonly name: string

    abstract generateResponse(prompt: string): Promise<any>
}