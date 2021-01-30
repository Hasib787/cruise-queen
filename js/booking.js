//plus button event handler
document.getElementById('firstClass-increase').addEventListener('click', function () {
    ticketCountHandler('firstClass', true);
});


//Minus button event handler
document.getElementById('firstClass-decrease').addEventListener('click', function () {
    ticketCountHandler('firstClass', false);
});

document.getElementById('economy-decrease').addEventListener('click',function(){
    ticketCountHandler('economy', false);
});


//Ticket Count event handler
function ticketCountHandler(ticket, isIncrease) {
    const firstClassInput = document.getElementById(ticket + '-count');
    const firstClassCount = parseInt(firstClassInput.value);
    // const firstClassNewCount = firstClassCount + 1;
    if (isIncrease == true) {
        firstClassNewCount = firstClassCount + 1;
    } else if (isIncrease == false && firstClassCount > 0) {
        firstClassNewCount = firstClassCount - 1;
    }
    firstClassInput.value = firstClassNewCount;
    const subTotal = firstClassNewCount * 150;
    document.getElementById('sub-total').innerText = subTotal;
}
