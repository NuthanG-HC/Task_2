
function color(){
    if(document.getElementById('rectangle').style.backgroundColor =="blue"){
    document.getElementById('rectangle').style.backgroundColor ="black"
    }
    else document.getElementById('rectangle').style.backgroundColor ="blue"
}

function add(){
    document.getElementById('rectangle').innerHTML = `<div id="square"  ></div>`;
}
function remove(){
    document.getElementById('rectangle').innerHTML ="";
}