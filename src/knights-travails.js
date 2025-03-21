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

  createNullArray(size) {
    return Array.from({ length: size }, () => null);
  }

  possibleVertices(current) {
    const [x, y] = current;
    const vertices = [];
    this.movements.forEach((e) => {
      const newVertex = [x + e[0], y + e[1]];

      if (newVertex[0] > this.maxBound[0] || newVertex[1] > this.maxBound[1])
        return;
      if (newVertex[0] < this.minBound[0] || newVertex[1] < this.minBound[1])
        return;
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
    const q = [{ vertex: source, prevVertices: null }];
    const visited = Array.from({ length: this.maxBound[1] + 1 }, () =>
      this.createNullArray(this.maxBound[0] + 1)
    );

    while (q.length > 0) {
      const previousVertex = q[0].prevVertices;
      const currentVertex = q[0].vertex;
      const [currX, currY] = currentVertex;

      q.shift();

      if (visited[currY][currX]) {
        continue;
      } else {
        visited[currY][currX] = true;
      }

      if (currX === targX && currY == targY) {
        const pathArray = previousVertex;
        const moves = pathArray.length;
        let pathString = "";

        for (let i = 0; i < moves; i++) {
          pathString += `[${pathArray[i]}] => `;
        }

        pathString += `[${currentVertex}]`;
        console.log(`You made it in ${moves} moves! Here's your path:`);
        console.log(pathString);
        return;
      }

      const adjVertices = this.possibleVertices(currentVertex);

      adjVertices.forEach((e) => {
        const vertObj = { vertex: e, prevVertices: [] };
        if (previousVertex) {
          vertObj.prevVertices.push(...previousVertex);
        }
        vertObj.prevVertices.push(currentVertex);
        q.push(vertObj);
      });
    }

    console.log("Target Not Found!!");
  }
}

const knights = new KnightsTravails();
knights.knightMoves([7, 7], [0, 0]);
