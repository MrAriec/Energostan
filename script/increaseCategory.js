let increaseGoods = document.getElementsByClassName('goods_item');

    for(let i = 0; i < increaseGoods.length; i++){
        increaseGoods[i].addEventListener('mouseenter', function(){
            increaseGoods[i].style.transform = ('scale(1.05)')
        })

        increaseGoods[i].addEventListener('mouseleave', function(){
            increaseGoods[i].style.transform = ('scale(1)')
        })
    }


