export interface AIResponse {
    model: string
    response: string
    latency: number
    success: boolean
    error?: string
}