class SlideShow {}

// workaround for static index variable
let slide = new SlideShow();
slide.curr = 1;

function changeBackground(n){
    $('.bullet').css('background-color', 'white');
    let jumbo = $('.jumbotron');
    switch(n){
        case 1:
            jumbo.css('background-image', "url('./assets/Background/City.png')");
            slide.curr = 1;
            break;
        case 2:
            jumbo.css('background-image', "url('./assets/Background/Undercity.jpg')");
            slide.curr = 2;
            break;
        case 3:
            jumbo.css('background-image', "url('./assets/Background/Volcano(edited).jpg')");
            slide.curr = 3;
            break;
        default:
            break;
    }

    $($('.bullet')[slide.curr-1]).css('background-color', 'lightslategray');
}

function cycleBackground(direction){
    $('.bullet').css('background-color', 'white');
    if(direction == 'prev'){
        slide.curr -=1;
        if(slide.curr < 1) slide.curr +=3;
    }
    else{
        slide.curr +=1;
        if(slide.curr > 3) slide.curr -=3;
    }
    let jumbo = $('.jumbotron');
    switch(slide.curr){
        case 1:
            jumbo.css('background-image', "url('./assets/Background/City.png')");
            break;
        case 2:
            jumbo.css('background-image', "url('./assets/Background/Undercity.jpg')");
            break;
        case 3:
            jumbo.css('background-image', "url('./assets/Background/Volcano(edited).jpg')");
            break;
        default:
            break;
    }
    $($('.bullet')[slide.curr-1]).css('background-color', 'lightslategray');
}

function autoCycle(){
    cycleBackground('next');
    setTimeout(autoCycle, 5000);
}

$(document).ready(function(event){
    $($('.bullet')[slide.curr-1]).css('background-color', 'lightslategray');
    autoCycle();
});