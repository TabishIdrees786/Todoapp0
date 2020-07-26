function addli(){
    var a = document.getElementById("item");
    if(a.value == ""){
        alert("Enter Value in Todo")
    }
    else{
        var list = document.createElement("li");
    var text_not = document.createTextNode(a.value);
    list.appendChild(text_not);
    var button = document.createElement("i");
    button.setAttribute("class","fa fa-trash")
    button.setAttribute("onclick","del(this)")
    list.appendChild(button)
    var edit_b = document.createElement("i");
    edit_b.setAttribute("class","fa fa-pencil-square")
    edit_b.setAttribute("onclick","edit(this)")
    list.appendChild(edit_b)
    list.setAttribute("class","ulli")
    var ull = document.getElementById("list");
    ull.appendChild(list)
    a.value = "";   
    }
    
}
function del(a){
    a.parentNode.remove();
}
function edit(b){
    var c = prompt("Enter edit value")
    b.parentNode.firstChild.nodeValue = c;
}
function alldel(){
    var a = document.getElementById("list");
    a.innerHTML = "";
}
