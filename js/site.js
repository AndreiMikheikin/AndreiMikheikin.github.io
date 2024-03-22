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

/* filter tab class active add/remove */
$(document).ready(function(){
    $('.filter').click(function(e){
        e.preventDefault();

        $('.filter').removeClass('active');
        $('.gallery').removeClass('active');

        $(this).addClass('active');
        $($(this).attr('href')).addClass('active');
    });

    $('.filter:first').click();
});



/* change visibility li>ul onclick */
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

/* change accordion-btn visibility onclick */
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

/* gallery */
document.addEventListener('DOMContentLoaded', function() {
    // Select all gallery elements
    const galleryElements = document.querySelectorAll('.gallery');

    // Initialize each gallery only once
    galleryElements.forEach((galleryElement) => {
        // Check if the gallery has already been initialized
        if (!galleryElement.dataset.galleryInitialized) {
            // Initialize the gallery
            new Gallery(galleryElement);

            // Mark the gallery as initialized
            galleryElement.dataset.galleryInitialized = true;
        }
    });
});
