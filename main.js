import "./style.css";
import path from "path";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
document.querySelector("#kyle").onclick = () => {
  var audio = new Audio("public/sounds/Kyle.wav");
  audio.play();
};
document.querySelector("#God").onclick = () => {
  var audio1 = new Audio("public/sounds/God.wav");
  audio1.play();
};
if (localStorage.getItem("secret1") == "solved") {
  document.querySelector("#secret1").onclick = () => {
    var audio2 = new Audio("public/sounds/never_gonna_give_you_up.wav");
    audio2.play();
  };
  document.querySelector("#secret1").disabled = false;
}
document.querySelector("#Jaiden").onclick = () => {
  var audio3 = new Audio("public/sounds/Jaiden.wav");
  audio3.play();
};
document.querySelector("#Have").onclick = () => {
  var audio4 = new Audio("public/sounds/Have.wav");
  audio4.play();
};
/*document.querySelector("#Communism_is_good").onclick = () => {
  var audio5 = new Audio("public/sounds/Communism_is_good.wav");
  audio5.play();
};*/
document.querySelector("#Excellent_2").onclick = () => {
  var audio6 = new Audio("public/sounds/Excellent_2.wav");
  audio6.play();
};
document.querySelector("#Chris").onclick = () => {
  var audio7 = new Audio("public/sounds/Chris.wav");
  audio7.play();
};
document.querySelector("#Bit").onclick = () => {
  var audio8 = new Audio("public/sounds/Bit.wav");
  audio8.play();
};
document.querySelector("#Did").onclick = () => {
  var audio9 = new Audio("public/sounds/Did.wav");
  audio9.play();
};
document.querySelector("#Woah").onclick = () => {
  var audio10 = new Audio("public/sounds/Woah.wav");
  audio10.play();
};
document.querySelector("#In").onclick = () => {
  var audio11 = new Audio("public/sounds/In.wav");
  audio11.play();
};
document.querySelector("#And").onclick = () => {
  var audio12 = new Audio("public/sounds/And.wav");
  audio12.play();
};
document.querySelector("#Excellent_1").onclick = () => {
  var audio13 = new Audio("public/sounds/Excellent_1.wav");
  audio13.play();
};
document.querySelector("#That").onclick = () => {
  var audio14 = new Audio("public/sounds/That.wav");
  audio14.play();
};
document.querySelector("#Furnace").onclick = () => {
  var audio15 = new Audio("public/sounds/Furnace.wav");
  audio15.play();
};
document.querySelector("#Hey").onclick = () => {
  var audio16 = new Audio("public/sounds/Hey.wav");
  audio16.play();
};
document.querySelector("#Yes").onclick = () => {
  var audio17 = new Audio("public/sounds/Yes.wav");
  audio17.play();
};
document.querySelector("#From").onclick = () => {
  var audio18 = new Audio("public/sounds/From.wav");
  audio18.play();
};
document.querySelector("#Marqez").onclick = () => {
  var audio19 = new Audio("public/sounds/Marqez.wav");
  audio19.play();
};
document.querySelector("#Need").onclick = () => {
  var audio20 = new Audio("public/sounds/Need.wav");
  audio20.play();
};
document.querySelector("#Milk").onclick = () => {
  var audio21 = new Audio("public/sounds/Milk.wav");
  audio21.play();
};
document.querySelector("#Gun").onclick = () => {
  var audio22 = new Audio("public/sounds/Gun.wav");
  audio22.play();
};
document.querySelector("#Woah_exclamation").onclick = () => {
  var audio23 = new Audio("public/sounds/Woah_exclamation.wav");
  audio23.play();
};
document.querySelector("#I").onclick = () => {
  var audio24 = new Audio("public/sounds/I.wav");
  audio24.play();
};
document.querySelector("#Treasure").onclick = () => {
  var audio25 = new Audio("public/sounds/Treasure.wav");
  audio25.play();
};
document.querySelector("#You").onclick = () => {
  var audio26 = new Audio("public/sounds/You.wav");
  audio26.play();
};
document.querySelector("#Today").onclick = () => {
  var audio27 = new Audio("public/sounds/Today.wav");
  audio27.play();
};
document.querySelector("#For").onclick = () => {
  var audio28 = new Audio("public/sounds/For.wav");
  audio28.play();
};
document.querySelector("#Me").onclick = () => {
  var audio29 = new Audio("public/sounds/Me.wav");
  audio29.play();
};
document.querySelector("#Kyle_Kyle_Kyle").onclick = () => {
  var audio30 = new Audio("public/sounds/Kyle_Kyle_Kyle.wav");
  audio30.play();
};
document.querySelector("#Has").onclick = () => {
  var audio31 = new Audio("public/sounds/Has.wav");
  audio31.play();
};
document.querySelector("#Jesus").onclick = () => {
  var audio32 = new Audio("public/sounds/Jesus.wav");
  audio32.play();
};
document.querySelector("#Horrible").onclick = () => {
  var audio33 = new Audio("public/sounds/Horrible.wav");
  audio33.play();
};
document.querySelector("#Julianna").onclick = () => {
  var audio34 = new Audio("public/sounds/Julianna.wav");
  audio34.play();
};
document.querySelector("#No").onclick = () => {
  var audio35 = new Audio("public/sounds/No.wav");
  audio35.play();
};
document.querySelector("#Bucket").onclick = () => {
  var audio36 = new Audio("public/sounds/Bucket.wav");
  audio36.play();
};
/*document.querySelector("#The_Pair_of_Girrafes").onclick = () => {
  var audio37 = new Audio("public/sounds/The_Pair_of_Girrafes.mp3");
  audio37.play();
};*/
document.querySelector("#Am").onclick = () => {
  var audio38 = new Audio("public/sounds/Am.wav");
  audio38.play();
};
document.querySelector("#Blender").onclick = () => {
  var audio39 = new Audio("public/sounds/Blender.wav");
  audio39.play();
};
document.querySelector("#My").onclick = () => {
  var audio40 = new Audio("public/sounds/My.wav");
  audio40.play();
};
document.querySelector("#Uh").onclick = () => {
  var audio41 = new Audio("public/sounds/Uh.wav");
  audio41.play();
};
document.querySelector("#Birds").onclick = () => {
  var audio42 = new Audio("public/sounds/Birds.wav");
  audio42.play();
};
document.querySelector("#Job").onclick = () => {
  var audio43 = new Audio("public/sounds/Job.wav");
  audio43.play();
};
document.querySelector("#A").onclick = () => {
  var audio44 = new Audio("public/sounds/A.wav");
  audio44.play();
};
document.querySelector("#An").onclick = () => {
  var audio45 = new Audio("public/sounds/An.wav");
  audio45.play();
};
document.querySelector("#To").onclick = () => {
  var audio46 = new Audio("public/sounds/To.wav");
  audio46.play();
};
document.querySelector("#Made").onclick = () => {
  var audio47 = new Audio("public/sounds/Made.wav");
  audio47.play();
};
document.querySelector("#Bye").onclick = () => {
  var audio48 = new Audio("public/sounds/Bye.wav");
  audio48.play();
};
document.querySelector("#Anyways").onclick = () => {
  var audio49 = new Audio("public/sounds/Anyways.wav");
  audio49.play();
};
document.querySelector("#The").onclick = () => {
  var audio50 = new Audio("public/sounds/The.wav");
  audio50.play();
};
document.querySelector("#Scene").onclick = () => {
  var audio51 = new Audio("public/sounds/Scene.wav");
  audio51.play();
};
document.querySelector("#Harpoon").onclick = () => {
  var audio52 = new Audio("public/sounds/Harpoon.wav");
  audio52.play();
};
document.querySelector("#Hide").onclick = () => {
  var audio53 = new Audio("public/sounds/Hide.wav");
  audio53.play();
};
document.querySelector("#We").onclick = () => {
  var audio54 = new Audio("public/sounds/We.wav");
  audio54.play();
};
/*document.querySelector("#AAAAAAAAA").onclick = () => {
  var audio55 = new Audio("public/sounds/AAAAAAAAA.wav");
  audio55.play();
};*/
document.querySelector("#Jake").onclick = () => {
  var audio56 = new Audio("public/sounds/Jake.wav");
  audio56.play();
};
document.querySelector("#Boy").onclick = () => {
  var audio57 = new Audio("public/sounds/Boy.wav");
  audio57.play();
};
document.querySelector("#Funny").onclick = () => {
  var audio58 = new Audio("public/sounds/Funny.wav");
  audio58.play();
};
document.querySelector("#Office").onclick = () => {
  var audio59 = new Audio("public/sounds/Office.wav");
  audio59.play();
};
document.querySelector("#Is").onclick = () => {
  var audio60 = new Audio("public/sounds/Is.wav");
  audio60.play();
};
document.querySelector("#Go").onclick = () => {
  var audio61 = new Audio("public/sounds/Go.wav");
  audio61.play();
};
document.querySelector("#Man").onclick = () => {
  var audio62 = new Audio("public/sounds/Man.wav");
  audio62.play();
};
document.querySelector("#Run").onclick = () => {
  var audio63 = new Audio("public/sounds/Run.wav");
  audio63.play();
};
document.querySelector("#Eat").onclick = () => {
  var audio64 = new Audio("public/sounds/Eat.wav");
  audio64.play();
};
document.querySelector("#Soren").onclick = () => {
  var audio65 = new Audio("public/sounds/Soren.wav");
  audio65.play();
};
document.querySelector("#Hello").onclick = () => {
  var audio66 = new Audio("public/sounds/Hello.wav");
  audio66.play();
};
document.querySelector("#See").onclick = () => {
  var audio67 = new Audio("public/sounds/See.wav");
  audio67.play();
};
document.querySelector("#Hey_There").onclick = () => {
  var audio68 = new Audio("public/sounds/Hey_There.wav");
  audio68.play();
};
document.querySelector("#IfYouAreJakewhyareyouhere").onclick = () => {
  localStorage.setItem("secret1", "solved");
  console.log(localStorage.getItem("secret1"));
};
