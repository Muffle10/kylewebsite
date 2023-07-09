print("""document.querySelector("#kyle").onclick = () => {
  var audio = new Audio("sounds/Harpoon.wav");
  audio.play();
};""")
import os

filenames = os.listdir("./sounds")
text = []
c = 0
for i in filenames:
    c+=1
    string = """<button id="{name}">{title}</button>""".format(name=i[0:len(i)-4],title=i[0:len(i)-4].replace("_", " ").capitalize())
    print(string)