
let imgCatolog = document.querySelectorAll('.catalog_img'),
index;

for (index = 0; index < imgCatolog.length; index++){
    function catalogItemOn(x) {
        imgCatolog[x].style.transform = 'scale(1.05)';
    }
    function catalogItemLeave(x){
        imgCatolog[x].style.transform = 'scale(1)';
    }
        
}

