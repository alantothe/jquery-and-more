
// JQuery equivalent of document.createElement
       let div = $('<div id="div1">Here is a JQuery Div!</div>');
// JQuery equivalent of document.querySelector
        let body = $('body');
 // JQuery equivalent of document.appendChild
    body.append(div);
// Without variables
    $('body').append($('<div id="div2">Another JQuery Div!</div>'))
    $('#list').append($('<li> Test </li>'));
// Creating functions with eventListeners
    div.on('click', function(){
       console.log("Click");
    })
    $('#div2').on('click', ()=> console.log("Div 2"));
// JQuery equivalent of .style
 $("body").css({
    backgroundColor: 'blue',
    color: 'white',
 })
    
    