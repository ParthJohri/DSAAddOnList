var input=document.getElementById("input");
var button=document.getElementById("button");
var ul=document.querySelector("ul");

function inputlength() {
    
    if(input.value.length==0){
        alert("Please Write The Topic Name");
    }
    return input.value.length;
}

function createLi()
{
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
}

function buttonListener(){
    if(inputlength()>0){
        createLi();
    }
}

function inputListener(event){
    if(event.which===13){
        if(inputlength()>0){
            createLi();
        }
}}

button.addEventListener("click",buttonListener);

input.addEventListener("keypress",inputListener);
