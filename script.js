'use strict';

const Player = (sign) => {
    this.sign = sign;
    const signGet = () =>{
        return sign;
    }
    return {signGet};
};

const gameBoard = (()=>{
    const gameBoardArr = ["","","","","","","","","",];

    const setSign = (index, sign) =>{
        if(index > gameBoardArr.length) return;
        gameBoardArr[index] = sign;
    }

    const getSign = (index) =>{
        return gameBoardArr[index];
    }
return {setSign,getSign};

})();


const displayControl = (() => {
    const divTile = document.querySelectorAll(".tile");
    
    divTile.forEach((tile) =>
    tile.addEventListener("click", (e) =>{
        if(gameControl.isOver() || divTile[e.target.dataset.index].innerText !== "")return
            gameControl.playRound(parseInt(e.target.dataset.index));
            updateGameBoard();
    }));
    const updateGameBoard = () => {
        for(let i=0;i<divTile.length;i++){
            divTile[i].innerText = gameBoard.getSign(i);
        }
    }

    const updateMessage = (message) =>{
        const container = document.getElementById('message');
        container.innerText = message;
    }
    return {updateMessage}
})();


const gameControl = (() => {

    const playerX = Player("X");
    const playerO = Player("O");
    let round = 1;
    let gameOver = false;
    const playRound = (tileIndex) =>{
        gameBoard.setSign(tileIndex,currentPlayerSign());
        console.table(winnerCheck(tileIndex));
        if(winnerCheck(tileIndex)){
            if(currentPlayerSign() === "O"){
                displayControl.updateMessage("O won");
            }
            if(currentPlayerSign() === "X"){
                displayControl.updateMessage("X won");
            }
            gameOver = true;
            return
        }
        if(round===9){
            displayControl.updateMessage("Match draw");
            gameOver = true;
            return
        }
        round++;
    }
    const currentPlayerSign = () =>{
        return round % 2 === 1? playerX.signGet() : playerO.signGet()
    }
    const winnerCheck = (tileIndex) => {
        const winConditions = 
        [[0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]];
        return winConditions.filter((combination)=>combination.includes(tileIndex)).some((possibleCombination) =>
        possibleCombination.every(
          (index) => gameBoard.getSign(index) === currentPlayerSign()
        ));
    }
    const isOver = () => {
        return gameOver;
    }
        return{playRound,isOver}
})();

console.clear();