'use strict';

// DOM
const playground=document.querySelector(".playground > ul");

// Setting
const GAME_ROWS = 20;
const GAME_COLS = 10;

// variables
let score = 0;
let duration = 500; // 블럭 떨어지는 기간
let downInterval; // null
let tempMovingItem; // moving 실행 전 담아두는 용도

const BLOCKS = {
  tree: [ // 블럭 모양
    [[2,1],[0,1],[1,0],[1,1]],  // 좌표
    [],
    [],
    [],
  ]
}

const movingItem = {
  type: "tree", // block의 형태 가져옴
  direction: 0,
  // top과 left값에 의해서 BLOCKS의 좌표가 바뀌도록
  top: 0,
  left: 3,
};

init()

// functions
function init() {
  tempMovingItem = { ...movingItem};
  for(let i=0; i<GAME_ROWS; i++) {
    prependNewLine()
  }
  renderBlocks()
}

function prependNewLine(){
  const li = document.createElement("li"); /* li에는 li element가 할당된다. */
  const ul = document.createElement("ul"); /* ul에는 ul element가 할당된다. */
  for (let j=0; j<GAME_COLS; j++) {
    const matrix = document.createElement("li");
    ul.prepend(matrix); /* ul에 matrix 넣는다. */
  }
  li.prepend(ul); /* li에 ul 넣는다. */
  playground.prepend(li);
}
function renderBlocks() {
  const {type,direction,top,left} = tempMovingItem; /* 하나하나 변수처럼 접근하기 위해서. destructuring assignment */
  BLOCKS[type][direction].forEach(block=>{ // block이 화살표 함수의 인자. (block)=>{function}
    const x = block[0]+left;
    const y = block[1]+top;
    const target=playground.childNodes[y].childNodes[0].childNodes[x]; // target은 네모 한 칸. li
    target.classList.add(type);
  })
}
function moveBlock(moveType,amount){
  // rendering을 할 때 tempMovingItem을 통해서 렌더링하므로 tempMoving의 값을 바꿔준다.
  tempMovingItem[moveType] += amount;
  renderBlocks();
}

// event handling
document.addEventListener("keydown",e => { // keydown 이벤트가 일어날 때, e 객체를 인자로 넘겨받는다.
  switch(e.keyCode){
    case 39:
      moveBlock("left",1);
      break;
    case 37:
      moveBlock("left",-1)
    default:
      break;
  }
  console.log(e);
})