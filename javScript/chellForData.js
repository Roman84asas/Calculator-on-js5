var sumButton = document.form.sum;

function returnSummNumb(e) {
    var inputOne = +document.getElementById("vall1").value;
    var inputTwo = +document.getElementById("vall2").value;
    var vallOper = form.keyForSumm.options.selectedIndex;
    var formReset = document.forms['form'];

    switch (vallOper) {
        case 0:
            alert( inputOne + inputTwo );
            break;
        case 1:
            alert( inputOne - inputTwo );
            break;
        case 2:
            alert( inputOne * inputTwo );
            break;
        default:
            alert( inputOne / inputTwo );
    }
    formReset.reset();
}

sumButton.addEventListener('click', returnSummNumb);