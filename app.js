document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div');
    const playerDisplay = document.querySelector('#player');
    const resultDisplay = document.querySelector('#result');
    const startButtn = document.querySelector('#start');
    const resetbtn = document.querySelector('#reset');
    
    let curentPLayer = 'Player X';
    
    resetbtn.addEventListener('click', ()=> {
        
        location.reload();
        
    });
    
    startButtn.addEventListener('click', ()=> {
        checkFOrWin();
    })
    
    
    
    
    for( let i = 0 , len = squares.length ; i < len ; i++)
        
    (function (index){
        squares[i].onclick = function gamePlay(){
            if (curentPLayer === 'Player X'){
                squares[index].classList.add("playerX");
                curentPLayer = 'Player O';
                playerDisplay.innerHTML = curentPLayer;
            } else {
                squares[index].classList.add("playerO");
                curentPLayer = 'Player X';
                playerDisplay.innerHTML = curentPLayer;
            }
        }
    })(i);
    
    function checkFOrWin (){
        
        const WinningCombo = [
            //horizontal
            [0,1,2],
            [3,4,5],
            [6,7,8],
            //vertical
            [0,3,6],
            [1,4,7],
            [2,5,8],
            //align
            [0,4,8],
            [2,4,6]
        ];
        
        for(let y = 0 ; y < WinningCombo.length ; y++){
            
            let square1 = squares[WinningCombo[y][0]];
            let square2 = squares[WinningCombo[y][1]];
            let square3 = squares[WinningCombo[y][2]];
            
         if (square1.classList.contains('playerX')&&
             square2.classList.contains('playerX')&&
             square3.classList.contains('playerX')){
              
             resultDisplay.innerHTML = 'Player X Wins!';
        
         }else if
             (square1.classList.contains('playerO')&&
              square2.classList.contains('playerO')&&
              square3.classList.contains('playerO')){
               
                 resultDisplay.innerHTML = 'Player O Wins!';
             }
        }
    }
    
//    squares.forEach(anything => anything.addEventListener('click', checkFOrWin));
    
    
    
});

