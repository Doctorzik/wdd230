
const button = document.querySelector("button")
const input = document.querySelector("input")
const list = document.querySelector("ul")

button.addEventListener("click", function(){
    const myInput = input.value;
     const listItem = document.createElement("li");
     const del = document.createElement("button");
     listItem.textContent = input;
     
     listItem.append(del)

     list.append(del);


     del.addEventListener("click", document.removeChild(listItem))

     input.focus();

  
  
})