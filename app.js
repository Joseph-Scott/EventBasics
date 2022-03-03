const btn = document.querySelector('#v2');

btn.onclick = function () {
  console.log("YOU CLICKED ME!");
  console.log("I HOPE IT WORKED!");
};

function scream() {
  console.log("AAAAAAAHHHHHH!!");
  console.log("STOP TOUCHING ME!");
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
  alert('You clicked the h1!');
};