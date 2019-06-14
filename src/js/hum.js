{
    'use strict';


    let humBar = document.getElementById('hum-bar')
    humBar.addEventListener('click', function () {
        let bar1 = document.getElementById('bar1')
        let bar2 = document.getElementById('bar2')
        let bar3 = document.getElementById('bar3')
        let barArray = [bar1, bar2, bar3]
        let humMenu = document.getElementById('hd-nav--sp')

        // ボタンのアニメーション
        for (i = 0; i < barArray.length; i++) {
            barArray[i].classList.toggle('hum-clicked')
        }

        // メニューの表示
        humMenu.classList.toggle('menu-active')

    })
}