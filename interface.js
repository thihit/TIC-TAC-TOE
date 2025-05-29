document.addEventListener("DOMContentLoaded", () => {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    });

    let restartButton = document.getElementById("restart-button");
    restartButton.addEventListener("click", () => {
        console.log("Botão reiniciar clicado!");
        board = ['', '', '', '', '', '', '', '', ''];
        gameOver = false;
        updateSquares();
    });
});

    function handleClick(event){

       let square = event.target
       let position = square.id

       if(handleMove(position)){
        setTimeout(()=>{
            alert("O jogo acabou")
        }, 10)   
       };
       updateSquares()

    }

    function updateSquares(){

        let squares = document.querySelectorAll(".square")
        squares.forEach((square)=>{
            let position = square.id
            let symbol = board[position]

            if (symbol != ''){
                square.innerHTML = `<div class="${symbol}"></div>`
            } else {
                square.innerHTML = ""
            }

        })


    }

