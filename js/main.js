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

    $paragraphs.each(function(index, element) {
        $(element).append('<button data-tmp="' + index + '">Click me!</button>');
        $(element).children('button').addClass('button');
    });

    var $buttons = $('button');

    $buttons.click(function() {
        
        //set body background-color corelated whit value of attribute 'data-tmp' 
        var $dataTmpValue = $(this).attr('data-tmp'),
        color = '' + ($dataTmpValue * 25) + ',' + ($dataTmpValue * 25) + ',' + ($dataTmpValue * 25);
        $('body').css('background-color', 'rgb(' + color + ')');
        

        alert('This is button whit data-tmp='+$(this).attr('data-tmp'));

        
    });
});


