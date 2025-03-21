## 🏇 Knight's Travails

A JavaScript implementation of the classic *Knight's Travails* problem using **graph traversal (BFS)** to determine the shortest path a knight can take on a standard 8x8 chessboard from a source position to a target position.

---

### 📌 Project Description

The Knight’s Travails challenge involves finding the **minimum number of moves** a knight must make to travel from one square to another on a chessboard. This project:

- Represents the board as an **implicit graph**.
- Calculates valid knight moves from any square.
- Uses **Breadth-First Search (BFS)** to ensure the shortest path is found.
- Tracks visited positions to avoid cycles.
- Backtraces the path using **parent pointers** to reconstruct the full route.

---

### 📁 Features

- Input validation (out-of-bounds and same-point checks)
- Dynamic neighbor generation based on knight movement rules
- Efficient memory usage by avoiding duplicate visits
- Clean path reconstruction from target to source
- Simple console output with path and move count

---

### 🧠 Concepts Applied

- Graph traversal (Breadth-First Search)
- Implicit graph modeling
- Queue-based algorithm design
- Position encoding (for path tracing)
- Defensive programming with input checks

---

### ✅ Usage

To use this logic in a script:

```javascript
const knights = new KnightsTravails();
knights.knightMoves([7, 7], [3, 0]);
```

Example output:

```
You made it in 3 moves! Here's your path:
[7,7] => [6,5] => [5,3] => [3,0]
```