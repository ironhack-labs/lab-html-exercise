
// Changed content 
let text = document.getElementById ('content')

text.onmouseover=function() {
    text.innerHTML="Nifty Penguin Fantastic";
}

text.onmouseout=function() {
    text.innerHTML="Nifty Penguin Magic";
}

let tag=document.getElementById("joinButton");
function mouseOver(){
    tag.style.borderColor="lightgrey" 
    };

function mouseOut(){
    tag.style.borderColor="initial" 
    };



