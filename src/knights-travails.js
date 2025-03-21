class KnightsTravails {
    maxBound = [3,3];
    minBound = [0,0];
    movements = [[1,2],[2,1],[-1,-2],[-2,-1],[-1,2],[1,-2],[-2,1],[2,-1]];

    createNullArray(size) {
        return Array.from({length: size}, () => null);
    }

    possibleVertices(current) {
        const [x, y] = current;
        const vertices = [];
        this.movements.forEach(e => {
            const newVertex = [x + e[0], y + e[1]];
            
            if(newVertex[0] > this.maxBound[0] || newVertex[1] > this.maxBound[1]) return;
            if(newVertex[0] < this.minBound[0] || newVertex[1] < this.minBound[1]) return;
            vertices.push(newVertex);
        });
        return vertices;
    }

    knightMoves(source, target) {
        const q = [source];
        const visited = Array.from({length: this.maxBound[1]+1}, () => this.createNullArray(this.maxBound[0]+1));
        const adjList = new Map();

        while(q.length > 0) {
            const currentVertex = q.shift();
            
            if(visited[currentVertex[0]][currentVertex[1]]) {
                continue;
            } else {
                visited[currentVertex[0]][currentVertex[1]] = true;
            }

            const adjVertices = this.possibleVertices(currentVertex);
            
            adjList.set(currentVertex, adjVertices);

            // console.log(`Vertex [${currentVertex}]: List [${adjVertices}]`)

            adjVertices.forEach(e => {
                q.push(e);
            })
        }
        console.log(adjList);
    }
}

const knights = new KnightsTravails();
console.log(knights.knightMoves([0,0], [1,2]));