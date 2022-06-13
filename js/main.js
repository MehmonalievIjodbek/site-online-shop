function clock1() {
  let clock = new Date();
  let hour = clock.getHours(); 
  let minut = clock.getMinutes();
  let second = clock.getSeconds();

  if(second < 10){
      second = "0" + second;
  }
  if(minut < 10){
      minut = "0" + minut;
  }
  if(hour < 10){
      hour = "0" + hour;
  }
  document.getElementById("clock").innerHTML = hour + ":" + minut + ":" + second;
  setTimeout(clock1, 1000);
}


function scrollTepa() {
  window.scrollTo({top:0, behavior: "smooth"})
}
document.getElementById("btn").addEventListener('click', scrollTepa )
window.addEventListener("scroll", function () {
  let button = document.querySelector(".button1");
  button.classList.toggle("menu1", window.scrollY > 600);
}); 

window.addEventListener("scroll", function () {
  let header = document.querySelector(".header");
  let windowYon = Math.round(window.scrollY);
  // let fea = document.querySelector(".fea");
  header.classList.toggle("navm", windowYon > 10);

});

let header1 = document.querySelector(".header__left");
const bars = document.querySelector(".fa-bars");
const header = document.querySelector(".header");
bars.addEventListener("click", function () {
  header1.classList.toggle("active");
  bars.classList.toggle("fa-bars");
  bars.classList.toggle("fa-circle-xmark");
  header.classList.toggle("active");
});

const links = document.querySelectorAll(".header__link");

links.forEach((e) =>
  e.addEventListener("click", () => {
    header1.classList.remove("active");
    bars.classList.add("fa-bars");
    bars.classList.remove("fa-circle-xmark");
    header.classList.remove("active");
  })
);


$(document).ready(function () {
  $(".animal__block",).click(function () {
    let image = $("img", this).attr("src");
    $("#ok-img").attr("src", image);
    $("#modal").css("opacity", "1");
    $("#modal").css("visibility", "inherit");
    $("#modal").css("top", "0");
    $('#modal').css('display', 'flex');
  });
  $("#close").click(function () {
    $("#modal").css("opacity", "0");
    $("#modal").css("visibility", "hiddin");
    $("#modal").css("top", "-100%");
  });
});

$(document).ready(function () {
  $(".insta__block",).click(function () {
    let image = $("img", this).attr("src");
    $("#ok-img").attr("src", image);
    $("#modal").css("opacity", "1");
    $("#modal").css("visibility", "inherit");
    $("#modal").css("top", "0");
    $('#modal').css('display', 'flex');
  });
  $("#close").click(function () {
    $("#modal").css("opacity", "0");
    $("#modal").css("visibility", "hiddin");
    $("#modal").css("top", "-100%");
  });
});
      

