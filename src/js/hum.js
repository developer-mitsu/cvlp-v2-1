{
    'use strict';
    let humBar = document.getElementById('hum-bar')
    let bar1 = document.getElementById('bar1')
    let bar2 = document.getElementById('bar2')
    let bar3 = document.getElementById('bar3')
    let barArray = [bar1, bar2, bar3]


    humBar.addEventListener('click', function () {
        for (i = 0; i < barArray.length; i++) {
            barArray[i].classList.toggle('hum-clicked')
        }
    })


}