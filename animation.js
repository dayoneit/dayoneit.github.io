const tl = anime.timeline({
  autoplay: false,
  duration: 1050,

});

tl
.add({
  targets: '.footer',
  translateY: function () {
    if ($(window).width() < 960) {
      return 1900;
    }
    else {
      return 1050;
    }
  },
})
.add({
  targets: '.easter_egg',
  begin: function () {
    document.querySelector('.easter_egg').style.display = "block";
  },
  opacity: 1
});



document.querySelector('.easter_egg_btn').onclick = tl.play;
