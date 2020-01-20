const board = document.querySelector('.container');
buildBoard(16);

function buildBoard(size) {

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  while(board.firstChild)
    board.removeChild(board.firstChild);
    
  for(let i = 0; i < size*size; i++) {
    const box = document.createElement('div');
    box.classList.add('new');
    board.appendChild(box);
  }

  const boxes = document.querySelectorAll('.new');
  boxes.forEach((box) => {
    box.addEventListener('mouseover', (e) => {
      box.setAttribute('style', 'background: black');
    });
  });

}

const reset = document.querySelector('#reset');
  reset.addEventListener('click', (e) => {
    var num = window.prompt("Enter Size of New Board:", "1-64");
    buildBoard(num);
});
