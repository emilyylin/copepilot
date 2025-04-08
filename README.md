### Copepilot — A CBT-style Reflection Assistant for Professionals

**Video Demo:**  https://youtu.be/a_SglgeEVGc

Copepilot is a tool to help professionals log stressful thoughts, identify cognitive distortions, and reflect with the support of an LLM-powered chatbot.  
It's built on a Next.js frontend, with Foundry powering LLM extraction, embeddings, semantic search, and insights.

Key features:
- Thought record form following CBT structure (situation, thought, emotion, behavior)
- Foundry pipeline extracts distortions & core beliefs using `use_llm`
- Embeddings + KNN used for retrieval-augmented generation in chat
- Insight graphs for emotional and cognitive trends over time

**Note:** Due to Foundry Dev Tier limitations, this demo uses a mocked backend. All pipelines and ontology actions are wired and functional in Foundry.
