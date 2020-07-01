
function bestSPOT(){
  return MiniMax(origBoard, ai).index;
}



function MiniMax(board, player) {
	var availSpots = emptySquares();

	if (checkEndgame(board, human)) {
		return {score: -10};
	} else if (checkEndgame(board, ai)) {
		return {score: 10};
	} else if (availSpots.length === 0) {
		return {score: 0};
	}
	var moves = [];
	for (var i = 0; i < availSpots.length; i++) {
		var move = {};
		move.index = board[availSpots[i]];
		board[availSpots[i]] = player;

		if (player == ai) {
			var result = MiniMax(board, human);
			move.score = result.score;
		} else {
			var result = MiniMax(board, ai);
			move.score = result.score;
		}

		board[availSpots[i]] = move.index;

		moves.push(move);
	}

	var bestMove;
	if(player === ai) {
		var bestScore = -Infinity;
		for(var i = 0; i < moves.length; i++) {
			if (moves[i].score > bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	} else {
		var bestScore = Infinity;
		for(var i = 0; i < moves.length; i++) {
			if (moves[i].score < bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	}

	return moves[bestMove];
}
