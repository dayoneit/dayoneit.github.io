const tl = anime.timeline({
  autoplay: false,
  duration: 1050,

});

tl
.add({
  targets: '.application',
  translateY: function () {
    let easter_egg = document.querySelector('.easter_egg').style.display;
    if ($(window).width() < 960) {
      return 1900;
    }
    else {
      return 850;
    }
  },
})
.add({
  targets: '.easter_egg',
  begin: function () {
    document.querySelector('.easter_egg').style.display = "block";
  },
  opacity: 1
})
.add({
  targets: '.sign',
  begin: function () {
    let sign = document.querySelector('.sign').innerHTML;

    console.log(sign);

    if (sign == "+"){
      document.querySelector('.sign').innerHTML = "-";
      document.querySelector('.easter_egg_btn').onclick = tl.reverse;
    } else {
      document.querySelector('.sign').innerHTML = "+";
      document.querySelector('.easter_egg_btn').onclick = tl.play;
    }

  },
});



document.querySelector('.easter_egg_btn').onclick = tl;
