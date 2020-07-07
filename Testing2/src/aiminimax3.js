
function bestSPOT3(playing){
	if(playing == "O"){
		humanMin = human;
		aiMin = ai;
	}
	else{
		humanMin = ai;
		aiMin = human;
	}
	return MiniMax3(origBoard, aiMin,-Infinity,+Infinity).index;
}

function MiniMax3(board,playerMin,alpha,beta) {
	let availSpots = emptySquares();
	let moves = [];
	if (checkEndgame(board, humanMin)) {
		return {score: -10};
	} 
	else if (checkEndgame(board, aiMin)) {
		return {score: 10};
	} 
	else if (availSpots.length === 0) {
		return {score: 0};
	}
	for (let i = 0; i < availSpots.length; i++) {
		let move = {};
		move.index = board[availSpots[i]];
		board[availSpots[i]] = playerMin;
		if (playerMin == aiMin) {
			let result = MiniMax3(board, humanMin,alpha,beta);
			move.score = result.score;
		}
		else {
			let result = MiniMax3(board,aiMin,alpha,beta);
			move.score = result.score;
		}
		board[availSpots[i]] = move.index;
		moves.push(move);
	}

	let bestMove;
	if(playerMin === aiMin) {
		let bestScore = -Infinity;
		for(let i = 0; i < moves.length; i++) {
			if (moves[i].score > bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
				alpha=bestScore;
			}
			if(alpha>=beta){
				break;
			}
		}
	} 
	else {
		let bestScore = Infinity;
		for(let i = 0; i < moves.length; i++) {
			if (moves[i].score < bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
				beta = bestScore;
			}
			if(alpha>=beta){
				break;
			}
		}
	}
	return moves[bestMove];
}
