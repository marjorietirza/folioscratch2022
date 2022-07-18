function myFunction() {
        var x = document.getElementById("justclick");
        x.classList.toggle("bx-sun");
  module.exports = {
  darkMode: 'class',
}
}

function myFunctionmobile() {
        var x = document.getElementById("justclickmobile");
        x.classList.toggle("bx-sun");
  module.exports = {
  darkMode: 'class',
}
}

function menumobile(){
  var x = document.getElementById("menu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})


var b = $(".navbar2").offset().top;

$(document).scroll(function(){
    if($(this).scrollTop() > b)
    {   
       $('.navbar2').css({"background":"red"});
    } else {
       $('.navbar2').css({"background":"transparent"});
    }
});