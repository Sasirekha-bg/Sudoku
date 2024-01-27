let numSelected = null;
let tileSelected = null;
let solve = document.getElementById("solve");

let errors = 0;
const board= [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
];



const solutions= [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
];

// const url = 'https://sudoku-board.p.rapidapi.com/new-board?diff=2&stype=list&solu=true';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'cc62889347msh1974d71cf791e28p11f8edjsn7f8ecaa22d91',
// 		'X-RapidAPI-Host': 'sudoku-board.p.rapidapi.com'
// 	}
// };




window.onload = function(){
    setGame();
}

function setGame(){
    //digits 1-9
    for(let i=1 ; i<=9 ; i++){
        let number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        number.addEventListener("click",selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    //board 9*9

    for(let r=0 ; r<9 ; r++){
        for(let c=0 ; c<9 ;c++){

            let tile =document.createElement("div");
            tile.id = r.toString() + "-" + c.toString() ;

            if(board[r][c] != "-"){
                tile.innerText = board[r][c];
                tile.classList.add("tile-start");
            }
            if(r ==2 || r==5){
                tile.classList.add("horizantal-line");
            }
            if(c==2 || c==5){
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click",selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);

        }
    }

    solve.addEventListener("click",solveSudoku);
         


}

function selectNumber(){
    if(numSelected != null){
        numSelected.classList.remove("number-selected");
    }
    numSelected = this ;
    numSelected.classList.add("number-selected");

}

function selectTile(){
    if(numSelected){
        if(this.innerText != ""){
            return ;
        }

        let coords = this.id.split("-");
        let r = parseInt(coords[0]);
        let c= parseInt(coords[1]);

        if(solutions[r][c] == numSelected.id){
            this.innerText = numSelected.id;
        }
        else{
            errors ++;
            document.getElementById("errors").innerText = errors;
        }
    }
}


function reloadGame(){

}



function solveSudoku(){

}