export interface ModelScore {
    model: string

    score: number

    strengths: string[]

    weaknesses: string[]
}

export interface JudgeResult  {
    winner: string

    scores: ModelScore[]

    reason: string

    consensus: string
}