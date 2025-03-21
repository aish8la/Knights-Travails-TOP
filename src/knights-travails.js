const { KnownDevices } = require("puppeteer");

class KnightsTravails {
    maxBound = [7,7];
    minBound = [0,0];
    movements = [[1,2],[2,1],[-1,-2],[-2,-1],[-1,2],[1,-2],[-2,1],[2,-1]];

    createNullArray(size) {
        return Array.from({length: size}, () => null);
    }

    knightMoves(source, target) {
        const q = [source];
        const visited = Array.from({length: this.maxBound[1]}, () => this.createNullArray(this.maxBound[0]));
        console.log(visited);
    }
}

const knights = new KnightsTravails();
console.log(knights.knightMoves(7));