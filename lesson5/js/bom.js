
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

        li.textContent= input.value;
     del.textContent = "&#10060";
    var me =  li.append(del)


     list.append(li, del);




     del.addEventListener("click", li.remove())

     input.focus();

     input.value = "";

  
  
})