var menu = document.querySelector(".menu")
var ham = document.querySelector(".ham")
var xIcon = document.querySelector(".xIcon")
var menuIcon = document.querySelector(".menuIcon")

ham.addEventListener("click", toggleMenu)

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    xIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

var menuLinks = document.querySelectorAll(".menuLink")

menuLinks.forEach(
  function (menuLink) {
    menuLink.addEventListener("click", toggleMenu)
  }
)



$('.title-extend').click(function (e) {
    // click other list->add class and remove exist class 
       
    // class exist click again->remove class
    if($(this).hasClass('open')){
      $(this).removeClass('open');
      $(this).siblings().slideUp();
    }
    
    else{
        // class doesnt exist click-> add class        
        $(this).closest('.list').siblings().find('.open').removeClass('open');
        $(this).closest('.list').siblings().find('.content').slideUp();
        $(this).addClass('open');
        $(this).siblings().slideDown();
        

        

    }
    
});


