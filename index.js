document.querySelector("button.button_black").addEventListener("click",function(){
    let element_ol=document.createElement("li");
    let text_toDolist=document.querySelector("input.input_bt").value;
    if(text_toDolist!=""){
        element_ol.innerText=text_toDolist;
    document.querySelector("ol").appendChild(element_ol);
    }
    
})
document.querySelector("button.reset").addEventListener("click",function(){
    let list = document.querySelector("ol")
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
      }
})