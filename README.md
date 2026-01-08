# VectorShift Workflow Builder

A premium, full-stack pipeline builder built with React, React Flow, and FastAPI. This project was completed as part of the VectorShift Frontend Technical Assessment.

## 🚀 Features

### 1. Robust Node Abstraction
- **BaseNode Architecture**: A modular system that allows for rapid creation of new node types with standardized styling and handle management.
- **9 Specialized Nodes**: Includes Input, Output, LLM, Text, Note, Timer, JS Code, API Call, and Database nodes.

### 2. Premium Design System
- **Modern UI**: Dark-themed workspace using a slate-and-indigo palette.
- **Glassmorphism**: Translucent toolbars and backdrop-blur effects for a high-end feel.
- **Micro-animations**: Smooth hover transitions, scaling effects, and interactive feedback.

### 3. Intelligent Text Node
- **Dynamic Resizing**: Textareas automatically adjust height based on content.
- **Variable Detection**: Typing `{{ variable_name }}` automatically generates a corresponding target handle on the left side of the node.
- **Smart Spacing**: Dynamic handles are automatically indexed and positioned for optimal layout.

### 4. Full-Stack Backend Integration
- **FastAPI Core**: A robust Python backend for pipeline processing.
- **DAG Validation**: Uses Kahn's Algorithm to check for cycles in the workflow, ensuring the pipeline is a Directed Acyclic Graph.
- **Interactive Results**: A custom-styled modal displays node counts, edge counts, and validation results from the backend.

## 🛠️ Tech Stack

- **Frontend**: React, React Flow, Zustand (State Management), Vanilla CSS.
- **Backend**: Python, FastAPI, Uvicorn.
- **Design**: Google Fonts (Inter & Outfit), CSS Variables.

## 🚦 Getting Started

### Prerequisites
- Node.js (v16+)
- Python (3.8+)

### 1. Backend Setup
```bash
cd backend
pip install fastapi uvicorn
python -m uvicorn main:app --reload
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm start
```

## 📝 Customization

To create a new node using the abstraction:
1. Create a new file in `src/nodes/`.
2. Import `BaseNode`.
3. Define your internal content and handle configuration.
4. Register the node in `src/ui.js` and `src/toolbar.js`.

---
*Created by Safiya Shaik for VectorShift.*
