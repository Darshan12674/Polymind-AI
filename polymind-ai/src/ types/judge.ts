export interface JudgeResult {
    winner: string

    scores: {
        model: string
        score: number
    }[]

    reason: string

    improvedAnswer: string
}