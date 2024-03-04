window.addEventListener("load",function(){
    var e=document.getElementById("preloader");
    e.style.display="none"
});

$(document).ready(function(e){
    e("#top>header>#mobMenu>.close-btn").click(function(){
        e("#top>header>.mobile-menu").css("display","none")
    });
});

$(document).ready(function(e){
    e("#top>header>.container>.mobile-column>.mobile-column-btn").click(function(){
        e("#top>header>.mobile-menu").css("display","block")
    });
});

$(document).ready(function(){
    var e=document.querySelector(".not-droped1");
    o=document.querySelector(".dropdown-btn1");
    o.onclick=function(){
        e.classList.toggle("droped")
    };
});

$(document).ready(function(){
    var e=document.querySelector(".not-droped2");
    o=document.querySelector(".dropdown-btn2");
    o.onclick=function(){
        e.classList.toggle("droped")
    };
});

$(document).ready(function(){
    var e=document.querySelector(".not-droped3");
    o=document.querySelector(".dropdown-btn3");
    o.onclick=function(){
        e.classList.toggle("droped")
    };
});

$(document).ready(function(){
    var e=document.querySelector(".not-droped4");
    o=document.querySelector(".dropdown-btn4");
    o.onclick=function(){
        e.classList.toggle("droped")
    };
});

$(document).ready(function(){
    $('.accordion-btn').click(function(){
        $(this).next().slideToggle(500);
    });
});

document.addEventListener("DOMContentLoaded", function(){
    var buttons = document.querySelectorAll('.accordion-btn');

    buttons.forEach(function(button){
        button.addEventListener('click', function(){
            var icon = this.querySelector('.icon');
            var plus = icon.querySelector('.plus');
            var minus = icon.querySelector('.minus');

            plus.classList.toggle('invisible');
            minus.classList.toggle('invisible');
        });
    });
});