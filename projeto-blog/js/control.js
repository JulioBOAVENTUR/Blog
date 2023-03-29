const openModal = document.querySelector(".login")
const closeModal = document.querySelector("#close")
const modal = document.querySelector(".container-form")
const obc = document.querySelector(".opc")
const header = document.querySelector("header");


 
 
window.addEventListener("scroll" ,() =>{
  header.classList.toggle("shadow", window.scrollY>0)
});
//filtro
 $(document).ready(function  (){

 
  $(".filter-item").click(function
    (){
      const value = $(this).attr("data-filter");
      if (value == "all") 
      {
        $(".post-box").show("1000")
      }else
      {
        $(".post-box")
          .not("." + value)
          .hide(1000);
        $(".post-box")
        .filter(`.${value}`)
        .show("1000")

      }
    });
    $(".filter-item").click(function(){
      $(this).addClass("active").siblings().removeClass("active")
    })
});
const tmodal = () =>{
   [modal ,obc].forEach((e) =>e.classList.toggle("hide"));
  
  };
  

[openModal ,closeModal ,obc].forEach((e) =>{
  e.addEventListener("click" , () =>  tmodal());
   
  });