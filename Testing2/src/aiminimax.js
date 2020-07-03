
function bestSPOT3(){
  return MiniMax3(origBoard, ai).index;
}

function MiniMax3(board,player) {
	let availSpots = emptySquares();
	let moves = [];
	if (checkEndgame(board, human)) {
		return {score: -10};
	} 
	else if (checkEndgame(board, ai)) {
		return {score: 10};
	} 
	else if (availSpots.length === 0) {
		return {score: 0};
	}
	for (let i = 0; i < availSpots.length; i++) {
		let move = {};
		move.index = board[availSpots[i]];
		board[availSpots[i]] = player;
		if (player == ai) {
			let result = MiniMax3(board, human);
			move.score = result.score;
		}
		else {
			let result = MiniMax3(board,ai);
			move.score = result.score;
		}
		board[availSpots[i]] = move.index;
		moves.push(move);
	}

	let bestMove;
	if(player === ai) {
		let bestScore = -Infinity;
		for(let i = 0; i < moves.length; i++) {
			if (moves[i].score > bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	} 
	else {
		let bestScore = Infinity;
		for(let i = 0; i < moves.length; i++) {
			if (moves[i].score < bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	}
	return moves[bestMove];
}
