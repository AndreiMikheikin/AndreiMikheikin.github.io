/* preloader */
window.addEventListener("load",function(){
    var e=document.getElementById("preloader");
    e.style.display="none"
});

/* hide/show onclick */
/* $(document).ready(function(){
    $('.close-btn').click(function(){
        $('.mobile-menu').css("display","none")
    });
});

$(document).ready(function(){
    $('.mobile-column-btn').click(function(){
        $('.mobile-menu').css("display","block")
    });
}); */

/* accordion on button click */
/* $(document).ready(function(){
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
}); */

/* accordion on item click */
$(document).ready(function(){
    $('.accordion-btn').click(function(){
        $(this).next().slideToggle(500);
    });
});

/* change visibility onclick */
document.addEventListener("DOMContentLoaded", function(){
    var btns = document.querySelectorAll('.dropdown');

    btns.forEach(function(btn){
        btn.addEventListener('click', function(){
            var item = this.querySelector('.not-droped');
            var icon = this.querySelector('.dropdown-btn');

            item.classList.toggle('droped');
            icon.classList.toggle('btn-rotateZ');
        });
    });
});
