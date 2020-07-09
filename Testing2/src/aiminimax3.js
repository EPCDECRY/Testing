let depthLimit=Infinity;

document.getElementById("d1").addEventListener("click", function(){
	document.getElementById("d1").style.backgroundColor="#FF0000";
	document.getElementById("d2").style.backgroundColor="aquamarine";
	document.getElementById("d3").style.backgroundColor="aquamarine";
	document.getElementById("d4").style.backgroundColor="aquamarine";
	document.getElementById("unlimited").style.backgroundColor="aquamarine";
	console.log("Depth 1");
	depthLimit=1;
  });
document.getElementById("d2").addEventListener("click", function(){
	document.getElementById("d1").style.backgroundColor="aquamarine";
	document.getElementById("d2").style.backgroundColor="#FF0000";
	document.getElementById("d3").style.backgroundColor="aquamarine";
	document.getElementById("d4").style.backgroundColor="aquamarine";
	document.getElementById("unlimited").style.backgroundColor="aquamarine";
	console.log("Depth 2");
	depthLimit=2;
  });
document.getElementById("d3").addEventListener("click", function(){
	document.getElementById("d1").style.backgroundColor="aquamarine";
	document.getElementById("d2").style.backgroundColor="aquamarine";
	document.getElementById("d3").style.backgroundColor="#FF0000";
	document.getElementById("d4").style.backgroundColor="aquamarine";
	document.getElementById("unlimited").style.backgroundColor="aquamarine";
	console.log("Depth 3");
	depthLimit=3;
  });
document.getElementById("d4").addEventListener("click", function(){
	document.getElementById("d1").style.backgroundColor="aquamarine";
	document.getElementById("d2").style.backgroundColor="aquamarine";
	document.getElementById("d3").style.backgroundColor="aquamarine";
	document.getElementById("d4").style.backgroundColor="#FF0000";
	document.getElementById("unlimited").style.backgroundColor="aquamarine";
	console.log("Depth 4");
	depthLimit=4;
  });
document.getElementById("unlimited").addEventListener("click", function(){
	document.getElementById("d1").style.backgroundColor="aquamarine";
	document.getElementById("d2").style.backgroundColor="aquamarine";
	document.getElementById("d3").style.backgroundColor="aquamarine";
	document.getElementById("d4").style.backgroundColor="aquamarine";
	document.getElementById("unlimited").style.backgroundColor="#FF0000";
	console.log("Depth unlimited");
	depthLimit=Infinity;
  });

function heuristicfunc(board,depth){
	if((board[3]!=''&&board[3]==board[4]&&board[4]==board[5])||(board[6]!=''&&board[6]==board[7]&&board[7]==board[8])||(board[0]!=''&&board[0]==board[1]&&board[1]==board[2]))
	{
		if((board[0]=='O')||(board[3]=='O')||(board[6]=='O'))
		{
			return {score: 10-depth};
		}
		else{
			return {score: -10+depth};
		}
	}
	else if((board[1]!=''&&board[1]==board[4]&&board[4]==board[7])||(board[2]!=''&&board[2]==board[5]&&board[5]==board[8])||(board[0]!=''&&board[0]==board[3]&&board[3]==board[6]))
	{
		if((board[0]=='O')||(board[1]=='O')||(board[2]=='O'))
		{
			return {score: 10-depth};
		}
		else{
			return {score: -10+depth};
		}
	}
	else if((board[0]!=''&&board[0]==board[4]&&board[4]==board[8])||(board[2]!=''&&board[2]==board[4]&&board[4]==board[6]))
	{
		if((board[0]=='O')||(board[2]=='O'))
		{
			return {score: 10-depth};
		}
		else{
			return {score: -10+depth};
		}
	}
  
  return {score: 0};
}


// To find Bestspot for 3x3
function bestSPOT3(playing){
	if(playing == "O"){
		humanMin = human;
		aiMin = ai;
	}
	else{
		humanMin = ai;
		aiMin = human;
	}
	return MiniMax3(origBoard, 0, aiMin,-Infinity,+Infinity).index;
}


// MiniMax algorithm for 3x3
function MiniMax3(board, depth, playerMin, alpha, beta) {
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
	else if(depth>=depthLimit){
		return heuristicfunc(board,depth);
	}
	for (let i = 0; i < availSpots.length; i++) {
		let move = {};
		move.index = board[availSpots[i]];
		board[availSpots[i]] = playerMin;
		if (playerMin == aiMin) {
			let result = MiniMax3(board, depth+1, humanMin,alpha,beta);
			move.score = result.score;
		}
		else {
			let result = MiniMax3(board, depth+1, aiMin,alpha,beta);
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
