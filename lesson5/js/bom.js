
const button = document.querySelector("button")
const input = document.querySelector("#favchap")
const list = document.querySelector("#list")

button.addEventListener("click", function(){
     const listItem = document.createElement("li");
     const del = document.createElement("button");
     listItem.textContent = input;
     del.textContent = "&#10060";
     const my = listItem.append(del)

     list.append(my);


     del.addEventListener("click", del.remove(listItem))

     input.focus();

     input.value = "";

  
  
})