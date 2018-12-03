const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";//"#34495e";
const OTHER_COLOR = "rgba(51, 110, 123, 1)";

function handleClick(){
    const currentColor = title.style.color;
    if(currentColor == BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }else{
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}
init();

function handleOffline(){
    console.log("I'm off");
}
function handleOnline(){
    console.log("Welcome back!");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);