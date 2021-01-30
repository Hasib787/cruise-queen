//plus button event handler
document.getElementById('firstClass-increase').addEventListener('click', function () {
    ticketCountHandler('firstClass', true);
});

document.getElementById('economy-increase').addEventListener('click', function () {
    ticketCountHandler('economy', true);
});

//Minus button event handler
document.getElementById('firstClass-decrease').addEventListener('click', function () {
    ticketCountHandler('firstClass', false);
});

document.getElementById('economy-decrease').addEventListener('click', function () {
    ticketCountHandler('economy', false);
});


//Ticket Count event handler
function ticketCountHandler(ticket, isIncrease) {
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    } else if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    let subTotal = 0;
    if (ticket == 'firstClass') {
        subTotal = ticketNewCount * 150;
    }
    if (ticket == 'economy') {
        subTotal = ticketNewCount * 100;
    }
    document.getElementById(ticket + '-total').innerText = subTotal;
    calculateTotal();
}


//calculate total value
function calculateTotal() {
    const firstClassCount = getInputValue('firstClass');
    const economyCount = getInputValue('economy');

    const subTotalPrice = firstClassCount * 150 + economyCount * 100;
    document.getElementById('sub-total').innerText = subTotalPrice;

    const vat = Math.round(subTotalPrice * 0.1);
    document.getElementById('vat').innerText = vat;

    const grandTotal = subTotalPrice + vat;
    document.getElementById('grand-total').innerText = grandTotal;
}