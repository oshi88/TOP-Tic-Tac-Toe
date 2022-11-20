const Player = (sign) => {
    this.sign = sign;
    const signGet = () =>{
        return sign;
    }
    return {signGet};
};

const gameBoard = (()=>{
    const gameBoardArr = ["","","","","","","","","",];


})


function inputFunction(e){
    const playerX = Player("X");
    const playerO = Player("O");
    const id = e.target.id;
    console.log(id);

}