
const button = document.querySelector("button")
const input = document.querySelector("#favchap")
const list = document.querySelector("#list")
console.log(button)
console.log(input)
console.log(list)


button.addEventListener("click", function() {
  var mes =    input.value;

     const li = document.createElement("li");
          console.log(li)
     
     const del = document.createElement("button");

      var mes = li.textContent= input.value;
     del.textContent = "X";
    var me =  li.append(del)


     list.append(mes, del);




     del.addEventListener("click", li.remove)

     input.focus();

     input.value = "";

  
  
})