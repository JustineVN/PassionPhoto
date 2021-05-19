'use strict'
const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme1')

    var className = document.body.className;
    if(className == "dark-theme2") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

});

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme2')

    var className = document.body.className;
    if(className == "dark-theme1") {
        this.textContent = "Light";
    }
    else {
        this.textContent = "Dark";
    }
});