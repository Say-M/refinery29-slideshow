const image = document.querySelectorAll(".main img")
$(".total").html(image.length);
let current = 0;
$(".right-arrow").click(function () {
    if (current < image.length - 1) {
        current++;
        $(".current").html(current + 1);
        $(".main img").each(function (img) {
            if (img === current) {
                $(this).show();
            } else {
                $(this).hide();
            }
        })
    }
})

$(".left-arrow").click(function () {
    if (current > 0) {
        current--;
        $(".current").html(current + 1);
        $(".main img").each(function (img) {
            if (img === current) {
                $(this).show();
            } else {
                $(this).hide();
            }
        })
    } else {
        $(".inti-slideshow").show();
        $(".main-slideshow").hide();
    }
})
$(".slide-start").click(function () {
    $(".inti-slideshow").hide();
    $(".main-slideshow").show();
})

$(".all-slides").click(function () {
    $(".main-slideshow").hide();
    $(".inti-slideshow").hide();
    $(".sec-slides").show();
})
$(".back").click(function () {
    $(".inti-slideshow").hide();
    $(".main-slideshow").show();
    $(".sec-slides").hide();
})