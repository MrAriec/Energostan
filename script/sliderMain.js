let sliderGoods = document.querySelector('.sliderGoods_line'),
    sliderWidth = document.getElementById('sliderGoods'),
    btnNextGoods = document.querySelector('.buttonsGoods_next'),
    offsetGoods = 0;
    
    if(sliderWidth.clientWidth == 1170){       
        btnNextGoods.addEventListener('click', function () {
            offsetGoods += 390;
            if (offsetGoods > 780) {
                offsetGoods = 0;
            }
            sliderGoods.style.left = -offsetGoods + "px";
        })
        
        document.querySelector('.buttonsGoods_prev').addEventListener('click', function () {
            offsetGoods -= 390;
            if (offsetGoods < 0) {
                offsetGoods = 780;
            }
            sliderGoods.style.left = -offsetGoods + "px";
        })
    }

    else if (sliderWidth.clientWidth < 1170 && sliderWidth.clientWidth > 782){
        btnNextGoods.addEventListener('click', function () {
            offsetGoods += 50;
            if (offsetGoods > 150) {
                offsetGoods = 0;
            }
            sliderGoods.style.left = -offsetGoods + "vw";
        })
        
        document.querySelector('.buttonsGoods_prev').addEventListener('click', function () {
            offsetGoods -= 50;
            if (offsetGoods < 0) {
                offsetGoods = 150;
            }
            sliderGoods.style.left = -offsetGoods + "vw";
        })
    }

    else if (sliderWidth.clientWidth < 782 && sliderWidth.clientWidth > 370){
        btnNextGoods.addEventListener('click', function () {
            offsetGoods += 100;
            if (offsetGoods > 400) {
                offsetGoods = 0;
            }
            sliderGoods.style.left = -offsetGoods + "vw";
        })
        
        document.querySelector('.buttonsGoods_prev').addEventListener('click', function () {
            offsetGoods -= 100;
            if (offsetGoods < 0) {
                offsetGoods = 400;
            }
            sliderGoods.style.left = -offsetGoods + "vw";
        })
    }





let imgCatolog = document.querySelectorAll('.imgMain'),
index;

for (index = 0; index < imgCatolog.length; index++){
    function catalogItemOn(x) {
        imgCatolog[x].style.transform = 'scale(1.05)';
    }
    function catalogItemLeave(x){
        imgCatolog[x].style.transform = 'scale(1)';
    }
        
}