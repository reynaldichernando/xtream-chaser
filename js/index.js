let curr = 1;

function changeBackground(n){
    $('.bullet').css('background-color', 'white');
    let jumbo = $('.jumbotron');
    switch(n){
        case 1:
            jumbo.css('background-image', "url('./../assets/Background/City.png')");
            curr = 1;
            break;
        case 2:
            jumbo.css('background-image', "url('./../assets/Background/Undercity.jpg')");
            curr = 2;
            break;
        case 3:
            jumbo.css('background-image', "url('./../assets/Background/Volcano(edited).jpg')");
            curr = 3;
            break;
        default:
            break;
    }

    $($('.bullet')[curr-1]).css('background-color', 'lightslategray');
}

function cycleBackground(direction){
    $('.bullet').css('background-color', 'white');
    if(direction == 'left'){
        curr -=1;
        if(curr < 1) curr +=3;
    }
    else{
        curr +=1;
        if(curr > 3) curr -=3;
    }
    let jumbo = $('.jumbotron');
    switch(curr){
        case 1:
            jumbo.css('background-image', "url('./../assets/Background/City.png')");
            break;
        case 2:
            jumbo.css('background-image', "url('./../assets/Background/Undercity.jpg')");
            break;
        case 3:
            jumbo.css('background-image', "url('./../assets/Background/Volcano(edited).jpg')");
            break;
        default:
            break;
    }
    $($('.bullet')[curr-1]).css('background-color', 'lightslategray');
}

$(document).ready(function(event){
    $($('.bullet')[curr-1]).css('background-color', 'lightslategray');
});