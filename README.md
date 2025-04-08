# CopePilot — A CBT-style Reflection Assistant for Professionals

**Video Demo:**  [https://youtu.be/a_SglgeEVGc]

Copepilot is a tool to help professionals log stressful thoughts, identify cognitive distortions, and reflect with the support of an LLM-powered chatbot.  
It's built on a Next.js frontend, with Foundry powering LLM extraction, embeddings, semantic search, and insights.

## My oversight
I use CBT thought records regularly to work through spirals and stuck thoughts. They help, but on paper, its easy to lose patterns, avoid follow up, and stop short of real progress and reflection.
After demoing, I noticed something that reflects my own habits -- the app stops right before the most important part!!
It identifies thinking patterns, but doesn’t yet guide users through creating a balanced interpretation, re-rating emotion, or planning a next step.
I am building that next to complete the loop (and to make the reflection actually stick).

## Features & Functionality
- Thought record form following CBT structure (situation, thought, emotion, behavior)
- Foundry pipeline extracts cognitive distortions & core beliefs using `use_llm`
- Embeddings + KNN used for retrieval-augmented generation in chat
- Insight graphs for emotional and cognitive trends over time

**Frontend:** Next.js + TypeScript
**Backend:** Foundry & AIP (but typescript for my mock backend)

## Next Steps
- **Add Responsibility Pie feature**  
  Helps users break down perceived responsibility across people, systems, and external factors.  
  Useful for challenging personalization distortions.

- **Extend chatbot to support full CBT reframing**  
  After identifying a distortion, prompt the user by asking:
  - What evidence supports this thought?
  - What evidence challenges it?
  - What’s a more balanced interpretation?
  - What’s one small action you could take?
  - How do you feel now? (emotion re-rating)

- **Store reframes in a dedicated "Reframed Thoughts" section**  
  Log original thought, identified distortion, reframed belief, updated emotion rating, and planned behavior.

- **Generate insights on reframes**  
With these new steps, CopePilot will actually be able to help users break the pattern.

**Note:** Due to Foundry Dev Tier limitations, this demo uses a mocked backend. All pipelines and ontology actions are wired and functional in Foundry.
