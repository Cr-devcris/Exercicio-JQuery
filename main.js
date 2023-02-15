$(document).ready(function() {
    $('form').submit(function(event) {    
    event.preventDefault();
    
    var tarefa = $('input').val();    
    var novoItem = $('<li><p>' + tarefa + '</p></li>');

    $('ul').append(novoItem);    
    $('input').val('');
});


    $('ul').on('click', 'li', function() {    
    var p = $(this).find('p');
    
    if (p.hasClass('riscado')) {
    p.removeClass('riscado');
    p.css('text-decoration', 'none');
    } else { 
    p.addClass('riscado');
    p.css('text-decoration', ' line-through');
    }
});
});