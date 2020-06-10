document.addEventListener('DOMContentLoaded', function(event){
    document.querySelector('#hamburger-menu').addEventListener('click', function(event){
        let menu = document.querySelectorAll('.menu');
        if(menu[0].style.display == "" || menu[0].style.display == "none"){
            menu.forEach(item => {
                item.style.display = 'block';
            })
        }
        else{
            menu.forEach(item => {
                item.style.display = 'none';
            })
        }
    });
});