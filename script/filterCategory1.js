let filter = document.getElementById('filter'),
    blockItem  = document.querySelector('.goodswrapper');

    filter.onchange = function(){
        let items = blockItem.getElementsByClassName('goods_item');
        for (let i = 0; i < items.length; i++){
            if(items[i].classList.contains(this.value)){
                items[i].style.display = "block";
            }
            else{
                items[i].style.display = "none";
            }
        }
    }