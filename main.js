const app = document.querySelector("#app");


const html = `
  <button type="button" class="create-hello-world">Clique aqui</button>
  <ul class="list-hello-world">

  </ul>
  `

app.innerHTML = html;
const button = document.querySelector(".create-hello-world");
const ul = document.querySelector(".list-hello-world");

button.onclick = function(){
  var element = []
  for (let i = 1; i <= 10; i++) {
    element += `<li class="hello-world color-${i}">Hello World</li>`  
  }

  ul.innerHTML = element;
}