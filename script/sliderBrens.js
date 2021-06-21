let sliderBrends = document.querySelector('.slider_line'),
    offsetBrends = 0;

document.querySelector('.btnNext').addEventListener('click', function () {
    offsetBrends += 234;
    if (offsetBrends > 1170) {
        offsetBrends = 0;
    }
    sliderBrends.style.left = -offsetBrends + "px";
})

document.querySelector('.btnPrev').addEventListener('click', function () {
    offsetBrends -= 234;
    if (offsetBrends < 0) {
        offsetBrends = 1170;
    }
    sliderBrends.style.left = -offsetBrends + "px";
})
