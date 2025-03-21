class KnightsTravails {
  maxBound = [7, 7];
  minBound = [0, 0];
  movements = [
    [1, 2],
    [2, 1],
    [-1, -2],
    [-2, -1],
    [-1, 2],
    [1, -2],
    [-2, 1],
    [2, -1],
  ];
  visited;

  createNullArray(size) {
    return Array.from({ length: size }, () => null);
  }

  positionToString(position) {
    return `[${position[0]},${position[1]}]`;
  }

  // Get possible moves from current position
  possibleVertices(current) {
    const [x, y] = current;
    const vertices = [];
    this.movements.forEach((e) => {
      const newVertex = [x + e[0], y + e[1]];

      if (newVertex[0] > this.maxBound[0] || newVertex[1] > this.maxBound[1])
        return;
      if (newVertex[0] < this.minBound[0] || newVertex[1] < this.minBound[1])
        return;
      //Skip this move if already visited
      if (this.visited[newVertex[0]][newVertex[1]]) {
        return;
      }
      vertices.push(newVertex);
    });
    return vertices;
  }

  isOutOfBounds(vertax) {
    if (
      vertax[0] > this.maxBound[0] ||
      vertax[1] > this.maxBound[1] ||
      vertax[0] < this.minBound[0] ||
      vertax[1] < this.minBound[1]
    ) {
      return true;
    }
  }

  knightMoves(source, target) {
    if (source[0] === target[0] && source[1] === target[1]) {
      console.log(`Starting Point and Ending Point is the same!!`);
      return;
    }

    if (this.isOutOfBounds(source) || this.isOutOfBounds(target)) {
      console.log(`Starting / Ending Point is outside of board`);
      return;
    }

    const [targX, targY] = target;
    const q = [source];
    //Initialize visited array based on the max and min size declared
    this.visited = Array.from({ length: this.maxBound[1] + 1 }, () =>
      this.createNullArray(this.maxBound[0] + 1)
    );
    //For path backtracing. starting position with null as it's previous vertex;
    const path = {
      [this.positionToString(source)]: null,
    };

    //Loop to visit vertices in queue
    while (q.length > 0) {
      const currentVertex = q.shift();
      const [currX, currY] = currentVertex;

      //Mark current Vertex as visited
      this.visited[currY][currX] = true;

      //check if current vertex is the target
      if (currX === targX && currY == targY) {
        //get previous vertex of target / current vertex from path object
        let parent = path[this.positionToString(target)];
        //reversed path Backtracing array
        const targetPath = [target];
        let pathString = "";
        let moves = 0;

        //Backtrace from target to previous nodes until null / starting point reached
        while (parent) {
          targetPath.push(parent);
          parent = path[this.positionToString(parent)];
        }

        //Create path string by looping back from target to starting vertex in the targetPath array
        for (let i = targetPath.length - 1; i >= 0; i--) {
          if (targetPath[i] !== target) {
            pathString += `[${targetPath[i]}] => `;
            moves++;
          } else {
            pathString += `[${targetPath[i]}]`;
          }
        }

        console.log(`You made it in ${moves} moves! Here's your path:`);
        console.log(pathString);
        return;
      }

      //Get the adjacent vertices of the current vertices
      const adjVertices = this.possibleVertices(currentVertex);
      //Enqueue adjacent vertices and add each adjacent vertices to path object with value / previous vertex set to current vertex
      adjVertices.forEach((e) => {
        q.push(e);
        path[this.positionToString(e)] = currentVertex;
      });
    }

    console.log("Target Not Found!!");
  }
}

const knights = new KnightsTravails();
knights.knightMoves([7, 7], [3, 0]);
