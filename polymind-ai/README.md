# PolyMind AI 🧠

PolyMind AI is a multi-model AI orchestration system that queries multiple Large Language Models (LLMs) simultaneously, compares their responses, and uses an AI Judge to determine the best answer while generating a consensus response.

The goal of this project is to demonstrate AI orchestration, provider abstraction, and self-consistency techniques rather than relying on a single LLM.

---

## Features

- Query multiple AI models in parallel
- Unified provider interface for all models
- AI Judge to evaluate responses
- Consensus answer generation
- Modular architecture for adding new providers
- Error handling for unavailable or rate-limited models
- CLI-based MVP (UI planned)

---

## Project Architecture

```
                User
                  │
                  ▼
                CLI
                  │
                  ▼
            Orchestrator
                  │
     ┌────────────┼────────────┐
     ▼            ▼            ▼
  Gemini       OpenRouter   Future Providers
                   │
      ┌────────────┼──────────────┐
      ▼            ▼              ▼
   Gemma 4      Llama 3.3     Other Models
                  │
                  ▼
              AI Judge
                  │
                  ▼
     Winner + Consensus Answer
```

---

## How the Project Works

1. The user enters a prompt through the CLI.
2. The Orchestrator sends the prompt to all enabled AI providers simultaneously.
3. Each provider returns its response in a standardized format.
4. Failed providers are safely ignored while successful responses continue.
5. The AI Judge receives all successful responses.
6. The Judge evaluates each response based on:
   - Accuracy
   - Completeness
   - Clarity
   - Relevance
7. The Judge selects the best response and generates a consensus answer.
8. The CLI displays:
   - Individual model responses
   - Latency for each model
   - Winner
   - Scores
   - Consensus answer

---

## Current Interface

This project is currently **CLI-based**.

The backend architecture has been completed first to validate the orchestration logic before building a web interface.

A Next.js UI is planned for future development.

---

## Models / Providers Used

### Google AI Studio

- Gemini 2.5 Flash Lite

### OpenRouter

- Google Gemma 4
- Meta Llama 3.3 70B Instruct
- NVIDIA Nemotron (planned)
- Additional OpenRouter models can be added easily

The architecture is configuration-driven, allowing models to be added or replaced without changing the orchestration logic.

---

## Self-Consistency Flow

Unlike a traditional chatbot that depends on a single model, PolyMind AI follows a self-consistency approach.

```
User Question
       │
       ▼
Multiple AI Models
       │
       ▼
Collect Responses
       │
       ▼
AI Judge
       │
       ▼
Best Response
       │
       ▼
Consensus Answer
```

Instead of trusting a single model, multiple independent responses are generated and evaluated. The AI Judge compares the outputs and produces a higher-confidence final answer.

---

## Project Structure

```
src/
├── cli/
├── config/
├── judge/
├── orchestrator/
├── prompts/
├── providers/
├── services/
├── types/
├── utils/
```

---

## Tech Stack

- TypeScript
- Node.js
- OpenRouter API
- Google AI Studio (Gemini)
- TSX
- Next.js (UI planned)

---

## Future Improvements

- Next.js Web UI
- Streaming responses
- Response comparison dashboard
- AI Judge analytics
- Provider health monitoring
- Automatic fallback models
- Export conversations
- Conversation history
- RAG support
- Additional AI providers (OpenAI, Claude, Grok, Mistral)

---

## Learning Outcomes

This project demonstrates:

- AI orchestration
- Multi-provider architecture
- Provider abstraction
- Factory Pattern
- Configuration-driven design
- Parallel API execution
- Error handling
- AI-as-a-Judge evaluation
- Self-consistency techniques