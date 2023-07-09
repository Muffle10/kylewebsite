import "./style.css";
import path from "path";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
document.querySelector("#kyle").onclick = () => {
  var audio = new Audio("sounds/Harpoon.wav");
  audio.play();
};
document.querySelector("#God").onclick = () => {
  var audio1 = new Audio("sounds/God.wav");
  audio1.play();
};
if (localStorage.getItem("secret1") == "solved") {
  document.querySelector("#secret1").onclick = () => {
    var audio2 = new Audio("sounds/never_gonna_give_you_up.wav");
    audio2.play();
  };
  document.querySelector("#secret1").disabled = false;
}
document.querySelector("#Jaiden").onclick = () => {
  var audio3 = new Audio("sounds/Jaiden.wav");
  audio3.play();
};
document.querySelector("#Have").onclick = () => {
  var audio4 = new Audio("sounds/Have.wav");
  audio4.play();
};
/*document.querySelector("#Communism_is_good").onclick = () => {
  var audio5 = new Audio("sounds/Communism_is_good.wav");
  audio5.play();
};*/
document.querySelector("#Excellent_2").onclick = () => {
  var audio6 = new Audio("sounds/Excellent_2.wav");
  audio6.play();
};
document.querySelector("#Chris").onclick = () => {
  var audio7 = new Audio("sounds/Chris.wav");
  audio7.play();
};
document.querySelector("#Bit").onclick = () => {
  var audio8 = new Audio("sounds/Bit.wav");
  audio8.play();
};
document.querySelector("#Did").onclick = () => {
  var audio9 = new Audio("sounds/Did.wav");
  audio9.play();
};
document.querySelector("#Woah").onclick = () => {
  var audio10 = new Audio("sounds/Woah.wav");
  audio10.play();
};
document.querySelector("#In").onclick = () => {
  var audio11 = new Audio("sounds/In.wav");
  audio11.play();
};
document.querySelector("#And").onclick = () => {
  var audio12 = new Audio("sounds/And.wav");
  audio12.play();
};
document.querySelector("#Excellent_1").onclick = () => {
  var audio13 = new Audio("sounds/Excellent_1.wav");
  audio13.play();
};
document.querySelector("#That").onclick = () => {
  var audio14 = new Audio("sounds/That.wav");
  audio14.play();
};
document.querySelector("#Furnace").onclick = () => {
  var audio15 = new Audio("sounds/Furnace.wav");
  audio15.play();
};
document.querySelector("#Hey").onclick = () => {
  var audio16 = new Audio("sounds/Hey.wav");
  audio16.play();
};
document.querySelector("#Yes").onclick = () => {
  var audio17 = new Audio("sounds/Yes.wav");
  audio17.play();
};
document.querySelector("#From").onclick = () => {
  var audio18 = new Audio("sounds/From.wav");
  audio18.play();
};
document.querySelector("#Marqez").onclick = () => {
  var audio19 = new Audio("sounds/Marqez.wav");
  audio19.play();
};
document.querySelector("#Need").onclick = () => {
  var audio20 = new Audio("sounds/Need.wav");
  audio20.play();
};
document.querySelector("#Milk").onclick = () => {
  var audio21 = new Audio("sounds/Milk.wav");
  audio21.play();
};
document.querySelector("#Gun").onclick = () => {
  var audio22 = new Audio("sounds/Gun.wav");
  audio22.play();
};
document.querySelector("#Woah_exclamation").onclick = () => {
  var audio23 = new Audio("sounds/Woah_exclamation.wav");
  audio23.play();
};
document.querySelector("#I").onclick = () => {
  var audio24 = new Audio("sounds/I.wav");
  audio24.play();
};
document.querySelector("#Treasure").onclick = () => {
  var audio25 = new Audio("sounds/Treasure.wav");
  audio25.play();
};
document.querySelector("#You").onclick = () => {
  var audio26 = new Audio("sounds/You.wav");
  audio26.play();
};
document.querySelector("#Today").onclick = () => {
  var audio27 = new Audio("sounds/Today.wav");
  audio27.play();
};
document.querySelector("#For").onclick = () => {
  var audio28 = new Audio("sounds/For.wav");
  audio28.play();
};
document.querySelector("#Me").onclick = () => {
  var audio29 = new Audio("sounds/Me.wav");
  audio29.play();
};
document.querySelector("#Kyle_Kyle_Kyle").onclick = () => {
  var audio30 = new Audio("sounds/Kyle_Kyle_Kyle.wav");
  audio30.play();
};
document.querySelector("#Has").onclick = () => {
  var audio31 = new Audio("sounds/Has.wav");
  audio31.play();
};
document.querySelector("#Jesus").onclick = () => {
  var audio32 = new Audio("sounds/Jesus.wav");
  audio32.play();
};
document.querySelector("#Horrible").onclick = () => {
  var audio33 = new Audio("sounds/Horrible.wav");
  audio33.play();
};
document.querySelector("#Julianna").onclick = () => {
  var audio34 = new Audio("sounds/Julianna.wav");
  audio34.play();
};
document.querySelector("#No").onclick = () => {
  var audio35 = new Audio("sounds/No.wav");
  audio35.play();
};
document.querySelector("#Bucket").onclick = () => {
  var audio36 = new Audio("sounds/Bucket.wav");
  audio36.play();
};
/*document.querySelector("#The_Pair_of_Girrafes").onclick = () => {
  var audio37 = new Audio("sounds/The_Pair_of_Girrafes.mp3");
  audio37.play();
};*/
document.querySelector("#Am").onclick = () => {
  var audio38 = new Audio("sounds/Am.wav");
  audio38.play();
};
document.querySelector("#Blender").onclick = () => {
  var audio39 = new Audio("sounds/Blender.wav");
  audio39.play();
};
document.querySelector("#My").onclick = () => {
  var audio40 = new Audio("sounds/My.wav");
  audio40.play();
};
document.querySelector("#Uh").onclick = () => {
  var audio41 = new Audio("sounds/Uh.wav");
  audio41.play();
};
document.querySelector("#Birds").onclick = () => {
  var audio42 = new Audio("sounds/Birds.wav");
  audio42.play();
};
document.querySelector("#Job").onclick = () => {
  var audio43 = new Audio("sounds/Job.wav");
  audio43.play();
};
document.querySelector("#A").onclick = () => {
  var audio44 = new Audio("sounds/A.wav");
  audio44.play();
};
document.querySelector("#An").onclick = () => {
  var audio45 = new Audio("sounds/An.wav");
  audio45.play();
};
document.querySelector("#To").onclick = () => {
  var audio46 = new Audio("sounds/To.wav");
  audio46.play();
};
document.querySelector("#Made").onclick = () => {
  var audio47 = new Audio("sounds/Made.wav");
  audio47.play();
};
document.querySelector("#Bye").onclick = () => {
  var audio48 = new Audio("sounds/Bye.wav");
  audio48.play();
};
document.querySelector("#Anyways").onclick = () => {
  var audio49 = new Audio("sounds/Anyways.wav");
  audio49.play();
};
document.querySelector("#The").onclick = () => {
  var audio50 = new Audio("sounds/The.wav");
  audio50.play();
};
document.querySelector("#Scene").onclick = () => {
  var audio51 = new Audio("sounds/Scene.wav");
  audio51.play();
};
document.querySelector("#Harpoon").onclick = () => {
  var audio52 = new Audio("sounds/Harpoon.wav");
  audio52.play();
};
document.querySelector("#Hide").onclick = () => {
  var audio53 = new Audio("sounds/Hide.wav");
  audio53.play();
};
document.querySelector("#We").onclick = () => {
  var audio54 = new Audio("sounds/We.wav");
  audio54.play();
};
/*document.querySelector("#AAAAAAAAA").onclick = () => {
  var audio55 = new Audio("sounds/AAAAAAAAA.wav");
  audio55.play();
};*/
document.querySelector("#Jake").onclick = () => {
  var audio56 = new Audio("sounds/Jake.wav");
  audio56.play();
};
document.querySelector("#Boy").onclick = () => {
  var audio57 = new Audio("sounds/Boy.wav");
  audio57.play();
};
document.querySelector("#Funny").onclick = () => {
  var audio58 = new Audio("sounds/Funny.wav");
  audio58.play();
};
document.querySelector("#Office").onclick = () => {
  var audio59 = new Audio("sounds/Office.wav");
  audio59.play();
};
document.querySelector("#Is").onclick = () => {
  var audio60 = new Audio("sounds/Is.wav");
  audio60.play();
};
document.querySelector("#Go").onclick = () => {
  var audio61 = new Audio("sounds/Go.wav");
  audio61.play();
};
document.querySelector("#Man").onclick = () => {
  var audio62 = new Audio("sounds/Man.wav");
  audio62.play();
};
document.querySelector("#Run").onclick = () => {
  var audio63 = new Audio("sounds/Run.wav");
  audio63.play();
};
document.querySelector("#Eat").onclick = () => {
  var audio64 = new Audio("sounds/Eat.wav");
  audio64.play();
};
document.querySelector("#Soren").onclick = () => {
  var audio65 = new Audio("sounds/Soren.wav");
  audio65.play();
};
document.querySelector("#Hello").onclick = () => {
  var audio66 = new Audio("sounds/Hello.wav");
  audio66.play();
};
document.querySelector("#See").onclick = () => {
  var audio67 = new Audio("sounds/See.wav");
  audio67.play();
};
document.querySelector("#Hey_There").onclick = () => {
  var audio68 = new Audio("sounds/Hey_There.wav");
  audio68.play();
};
document.querySelector("#IfYouAreJakewhyareyouhere").onclick = () => {
  localStorage.setItem("secret1", "solved");
  console.log(localStorage.getItem("secret1"));
};
