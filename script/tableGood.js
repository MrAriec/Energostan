let table = document.querySelector('.good_table');

let tableItem = table.getElementsByClassName('good_tableItem');

for(let i = 0; i < tableItem.length; i++){
    if(i != 0 && i % 2 == 0){
        tableItem[i].style.background = '#e5e5e5';
    }
    
}


