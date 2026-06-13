# VectorShift Frontend Assessment

### Task-1 Reusable Node Abstraction
- Created `frontend/src/nodes/baseNode.js`
- Moved shared node layout into `BaseNode`
- Standardized:
  - node container
  - header
  - body
  - handle rendering
- Existing nodes using the shared base:
  - Input
  - Output
  - LLM
  - Text

---

#### Task-1.1 New Custom Nodes Added
- Email node
- Feedback node
- Image node
- Phone node
- Reviews node

Each node was added to the React Flow node registry and sidebar library.

![Task-1](/frontend/public/task1.png)

---

### Task-2 UI Styling Improvements
- Added top navigation bar
- Added left sidebar node library
- Expanded canvas into a full workspace layout
- Restyled draggable node cards
- Added icons for node palette items
- Improved node card appearance
- Improved headers, inputs, dropdowns, spacing, and shadows
- Styled submit button and moved it into the sidebar
- Improved React Flow background, controls, and minimap presentation

![Task-2](/frontend/public/task2.png)

---

### Task-3 Text Node Logic
- Added dynamic text area sizing
- Added variable detection using `{{variable}}` syntax
- Auto-generated input handles from detected variables
- Prevented duplicate variable handles

Example supported variables:

```text
{{input}}
{{name}}
{{topic}}
```

![Task-3](/frontend/public/task3.png)

---

### Task-4 Backend Integration
- Connected submit flow to `POST /pipelines/parse`
- Sent current `nodes` and `edges` from the frontend
- Displayed backend response in the frontend alert
- Verified output includes:
  - number of nodes
  - number of edges
  - DAG validation result

![Task-4](/frontend/public/task4.png)

---

