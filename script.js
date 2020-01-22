const board = document.querySelector('.container');
const pen = document.getElementById('pen');
let color = pen.value;
buildBoard(16);

function boxColor() {
  console.log(color)
    if(color == "rainbow")
      this.style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);
    else
      this.style.backgroundColor = `${color}`;
}

function buildBoard(size) {

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  while(board.firstChild)
    board.removeChild(board.firstChild);

  for(let i = 0; i < size*size; i++) {
    let box = document.createElement('div');
    box.classList.add('new');
    box.addEventListener("mouseover", boxColor);
    board.appendChild(box);
  }


}

const reset = document.querySelector('#reset');
  reset.addEventListener('click', (e) => {
      const boxes = document.querySelectorAll('.new');
      boxes.forEach((box) => {
        box.setAttribute('style', 'backgroud: lightgrey');
      });
  });

const newBoard = document.querySelector('#resize');
  newBoard.addEventListener('click', (e) => {
    let num = 0;
    while(num < 1 || num > 64 || isNaN(num)) {
      num = window.prompt("Enter Size of New Board: (1-64)");
      buildBoard(num);
    }
});

  pen.addEventListener('change', (e) => {
    color = pen.value;
  });
