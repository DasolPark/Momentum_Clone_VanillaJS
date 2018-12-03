const title = document.querySelector("#title");

// function handleResize(event){}
function handleResize(){
    // console.log("I hava been resized");
    // console.log(event);
    title.style.color = "blue";
    console.log(window);
}

window.addEventListener("click", handleResize);
//resize 이벤트를 기다리다가 내가 필요한 시점에 handleResize함수를 실행
//handleResize()가 아니라는 것 매우 중요!!
//handleResize()로 선언하면 지금 바로 호출하라는 것