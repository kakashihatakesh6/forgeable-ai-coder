<div align="center">
  <img src="assets/banner.png" alt="Forgeable AI Coder Banner" width="100%">
  
  <br />
  
  # 🚀 Forgeable AI Coder
  
  **Your autonomous AI software engineering team powered by LangGraph & Groq.**

  [![Python](https://img.shields.io/badge/Python-3.11+-blue.svg?style=flat&logo=python&logoColor=white)](https://www.python.org/)
  [![LangChain](https://img.shields.io/badge/LangChain-Integration-green.svg?style=flat)](https://python.langchain.com/)
  [![LangGraph](https://img.shields.io/badge/LangGraph-Graphs-orange.svg?style=flat)](https://python.langchain.com/docs/langgraph)
  [![Groq](https://img.shields.io/badge/Groq-LPU-red.svg?style=flat)](https://groq.com/)
  
</div>

---

## 📖 Overview

**Forgeable AI Coder** is an advanced AI engineering project planner and agent. By utilizing a multi-agent state graph architecture, it translates simple natural language prompts into fully functional codebases automatically!

## 🏗️ Architecture

- **Planner Agent** – Analyzes your request and generates a detailed project plan.
- **Architect Agent** – Breaks down the plan into specific engineering tasks with explicit context for each file.
- **Coder Agent** – Implements each task, writes directly into files, and uses available tools like a real developer.

**Coder Agent Architecture**

<div align="center">
  <img src="assets/architecture_diagram.png" alt="Coder Agent Architecture" style="width: 100%; height: 100px; object-fit: cover; border-radius: 8px;">
</div>

---

## ✨ Features

- **Multi-Agent Orchestration**: Specialized agents handle different parts of the software development lifecycle.
- **Iterative Implementation**: Writes code step-by-step, validating and saving along the way.
- **Local File Management**: Directly generates project files in the `generated_project/` directory.
- **High-Performance LLMs**: Powered by [Groq](https://groq.com) and the fastest open-source models for instantaneous code generation.
- **Traceable Graph Architecture**: Built with LangGraph, ensuring every step of the agent's thought process is structured and reliable.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| ---------- | ------- |
| **Python 3.11** | Core Language |
| **LangGraph** | Multi-Agent Orchestration & State Management |
| **LangChain Core** | Abstractions for Tools & LLM interaction |
| **Groq API** | High-speed LLM inference |
| **Pydantic** | Strong typing and structured output parsing |

---

## 📂 Project Structure

```text
forgeable-ai-coder/
├── agent/
│   ├── graph.py       # Core LangGraph state machine & agent definitions
│   ├── prompts.py     # Carefully engineered system prompts for each role
│   ├── states.py      # Pydantic state models & schemas
│   └── tools.py       # Actions provided to the coder agent (read, write, list)
├── generated_project/ # The resulting code output written by Forgeable AI Coder
├── main.py            # Entry point of the CLI application
├── pyproject.toml     # Project metadata and dependencies
└── .env               # Environment configurations (API Keys)
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Python 3.11 or higher
- [Groq API Key](https://console.groq.com/)
- `uv` or `pip` for dependency management

### 2. Installation
Clone the repository, navigate into the directory, and install the dependencies:
```bash
# Using pip
pip install -r requirements.txt # (or directly via uv/pyproject.toml)
```

### 3. Configuration
Create a `.env` file in the root directory and add your Groq API key:
```env
GROQ_API_KEY="gsk_your_api_key_here"
```

### 4. Running the Agent
Run the main script and interact with your new engineering team:
```bash
python main.py
```
*Wait for the prompt, then describe the app you want to build (e.g., "build a classic snake game using HTML5 canvas inside generated_project").*

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](#).

## 📄 License

This project is open-source and available under standard open source provisions.

---
<div align="center">
  <i>Built with ❤️ by AI to help you build faster.</i>
</div>
