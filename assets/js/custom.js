// menu mobile
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// carousel cabeçalho
$('.owl-carousel').owlCarousel({
    loop:true,
    pagination: false,
    dots: false,
    nav:false,
    loop:true,
    responsive:{
        0:{
            items:1,
        },
        720:{
            items:2,
        }
    }
})

// carrinho cabeçalho
function OpenMyCart() {
    document.getElementById("MyCartDropdown").classList.toggle("exibir-area-do-carrinho");
  }
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("area-do-carrinho-content");
    }
  }
  