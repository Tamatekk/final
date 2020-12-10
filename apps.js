document.getElementById("effect").hidden = true
document.querySelector("label").hidden = true
document.querySelector("button").hidden = true

var img = [1,2,3,4,5]

loopimg()

function loopimg(){
    for (var i = 1; i <= img.length; i++) {
        var image = document.createElement("img")
        image.setAttribute("src", "images/pic" + i + ".jpg");
        image.setAttribute("id", i )
        document.getElementById("thumb-bar").appendChild(image);
   }
}

document.getElementById('1').addEventListener('mouseover', display1)
function display1(){document.getElementById("img").src = "images/pic1.jpg"
document.getElementById("effect").hidden = false
document.querySelector("label").hidden = false
document.querySelector("button").hidden = false
}

document.getElementById('2').addEventListener('mouseover', display2)
function display2(){document.getElementById("img").src = "images/pic2.jpg"
document.getElementById("effect").hidden = false
document.querySelector("label").hidden = false
document.querySelector("button").hidden = false
}

document.getElementById('3').addEventListener('mouseover', display3)
function display3(){document.getElementById("img").src = "images/pic3.jpg"
document.getElementById("effect").hidden = false
document.querySelector("label").hidden = false
document.querySelector("button").hidden = false
}

document.getElementById('4').addEventListener('mouseover', display4)
function display4(){document.getElementById("img").src = "images/pic4.jpg"
document.getElementById("effect").hidden = false
document.querySelector("label").hidden = false
document.querySelector("button").hidden = false
}

document.getElementById('5').addEventListener('mouseover', display5)
function display5(){document.getElementById("img").src = "images/pic5.jpg"
document.getElementById("effect").hidden = false
document.querySelector("label").hidden = false
document.querySelector("button").hidden = false
}


document.querySelector('button').addEventListener('click', clicked)

function clicked(){
var input = document.getElementById("effect").value
var disp = document.getElementById("img")
if (input == "blur"){
    if(disp.getAttribute('src') == "images/pic1.jpg")
    {
        disp.src = "images/pic1B.jpg"
    } 
    else if(disp.getAttribute('src') == "images/pic2.jpg")
    {
        disp.src = "images/pic2B.jpg"
    }
    else if(disp.getAttribute('src') == "images/pic3.jpg")
    {
        disp.src = "images/pic3B.jpg"
    }
    else if(disp.getAttribute('src') == "images/pic4.jpg")
    {
        disp.src = "images/pic4B.jpg"
    }
    else if(disp.getAttribute('src') == "images/pic5.jpg")
    {
        disp.src = "images/pic5B.jpg"
    }
}
else{console.log('test')
    document.querySelector('label').innerHTML = "Error, unsupported effect"
}
document.getElementById("effect").value = ""
}
