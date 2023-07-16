print("""document.querySelector("#kyle").onclick = () => {
  var audio = new Audio("sounds/Harpoon.wav");
  audio.play();
};""")
import os

from itertools import permutations

filenames = os.listdir("./public/sounds")
print(filenames)
