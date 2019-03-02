var inputOne = document.getElementById('vall1');
var inputTwo = document.getElementById('vall2');


inputOne.onfocus = function() {
    var container = document.getElementById('container');
    
    container.onclick = function (event) {
    if (event.target.parentElement.id != 'container') return;

    var numb = event.target.innerHTML;
    document.getElementById("vall1").value += numb;
    };
};
    
inputTwo.onfocus = function() {
    var container = document.getElementById('container');

    container.onclick = function (event) {
    if (event.target.parentElement.id != 'container') return;

    var numb = event.target.innerHTML;
    document.getElementById('vall2').value += numb;
    };
};