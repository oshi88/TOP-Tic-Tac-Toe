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
        if(divTile[e.target.dataset.index].innerText === ""){
            gameControl.playRound(parseInt(e.target.dataset.index));
            updateGameBoard();
        } 
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

    const playRound = (tileIndex) =>{
        gameBoard.setSign(tileIndex,currentPlayerSign());
        if(round===9){
            displayControl.updateMessage("Match draw");
            return
        }
        round++;
    }
    const currentPlayerSign = () =>{
        return round % 2 === 1? playerX.signGet() : playerO.signGet()
    }
    const winnerCheck = () => {
        const winConditions = 
        [[0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]];
        return winConditions.filter()
    }
        return{playRound}
})();

console.clear();