$(function() {
/* 
    var $span = $('span');
    $span.each(function(index, element) {
        if(index % 2 == 0) {
            $(element).css('color', 'red');
        }
    });
 */
    //alternative short version of above
    $('span:even').css('color','blue').css('font-weight','700');
    $('span:odd').css('color','green').css('font-style','italic');

    var $paragraphs = $('p');

    //add button to paragraph
    $paragraphs.each(function(index, element) {
        $(element).append('<button data-tmp="' + index + '">Click me!</button>');
        $(element).children('button').addClass('button');
    });

    var $buttons = $('button'),
        $body = $('body');

    //display alert when click on button
    $buttons.on('click', function() {
        
        //set value of attribute 'data-tmp' 
        var $dataTmpValue = $(this).attr('data-tmp');

        alert('This is button whit data-tmp='+$(this).attr('data-tmp'));
    });

    var $divButtons = $('div.buttons');

    //change body backgroud color when mouse over buuton
    $divButtons.on('mouseover', 'button', function() {
        var $dataTmpValue = $(this).attr('data-tmp'),
        
        //set color between black and white (greysacle) eg. if button's id=4 then color=100,100,100
            color = '' + ($dataTmpValue * 25) + ',' + ($dataTmpValue * 25) + ',' + ($dataTmpValue * 25);
        $body.css('background-color', 'rgb(' + color + ')');
    });
});


