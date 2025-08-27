


function isValid(x, y){
    return x>=0 && x<=7 && y>=0 && y<=7;
        
    
}
function getMoves(x,y){
    let moves = [
     [2, 1], [2, -1], [-2, 1], [-2, -1],
    [1, 2], [1, -2], [-1, 2], [-1, -2]
   ];
    let validMoves = [];
    for(let [dx, dy] of moves)
    {
        let newX = x + dx;
        let newY = y + dy;
        if(isValid(newX, newY)) validMoves.push([newX, newY]);
    }
    return validMoves;
}
function knightMoves(start, end){
    let queue = [[start]];

    let visited = new Set();
    visited.add(start.toString());
    while (queue.length > 0)
    {
        let path = queue.shift();

        let current = path[path.length-1];
        if (current[0] === end[0] && current[1] === end[1])
            return path;
        let moves = getMoves(current[0],current[1]);
        for(let move of moves){
            if(!visited.has(move.toString())){
                visited.add(move.toString());
                queue.push([...path,move]);
            }

        }
        
    }
    
}
console.log(knightMoves([0,0],[7,7]));
