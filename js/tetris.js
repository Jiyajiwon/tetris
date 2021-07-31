'use strict';

const playground=document.querySelector(".playground > ul");

console.log(playground);

for(let i=0; i<20; i++) {
  const li = document.createElement("li"); /* li에는 li element가 할당된다. */
  const ul = document.createElement("ul"); /* ul에는 ul element가 할당된다. */
  for (let j=0; j<10; j++) {
    const matrix = document.createElement("li");
    ul.prepend(matrix); /* ul에 matrix 넣는다. */
  }
  li.prepend(ul); /* li에 ul 넣는다. */
  playground.prepend(li);
}