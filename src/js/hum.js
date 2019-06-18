{
    'use strict';

    let humBar = document.getElementById('hum-bar')
    let menuItems = document.getElementsByClassName('hd-nav__item--sp');
    // for (i = 0; i < menuItems.length; i++) {
    //     clickedElement.push(menuItems[i])
    // }


    humBar.addEventListener('click', function () {
        let clickedElement = [humBar]
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
        console.log(humBar);
        console.log(menuItems);
        console.log(clickedElement);
        humMenu.classList.toggle('menu-active');

    })
}