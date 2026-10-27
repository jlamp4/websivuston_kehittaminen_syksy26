'use strict';

const switcher = document.querySelector('.switcher');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const classList = document.body.classList;
    if(classList.contains('light-theme')) {
        this.textContent = 'Dark';
    } else {
        this.textContent = 'Light';
    }

    console.log('current class name: '+ className);
});
