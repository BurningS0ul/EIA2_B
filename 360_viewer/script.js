console.log("log");

var scene2 = document.querySelector(".scene2");
var scene1 = document.querySelector(".scene1");

document.querySelector(".text2").addEventListener('click', function () {
    console.log("text2");
    if(scene1 && scene2){
        scene2.setAttribute("visible", false);
        scene1.setAttribute("visible", true);
    }
});

document.querySelector(".text1").addEventListener('click', function () {
    console.log("text1");
    if(scene1 && scene2){
        scene1.setAttribute("visible", false);
        scene2.setAttribute("visible", true);
    }
});

