// --------------------------------
// CONVERT STRING TO NUMBER
// --------------------------------
function getInputNumber(id){
    var number = parseInt(document.getElementById(id).value);
    return number;
}


// --------------------------------
// TICKET COUNT
// --------------------------------
function ticketChange(ticketInput ,isIncrease){
    let ticketNumber = getInputNumber(ticketInput);
    if(isIncrease == true){
        ticketNumber++;
    }
    if(isIncrease == false && ticketNumber > 0){
        ticketNumber--;
    }
    document.getElementById(ticketInput).value = ticketNumber;
    total();
}


// --------------------------------
// CALCULATE TOTAL COST
// --------------------------------
function total(){
    let fTicketNumber = getInputNumber("firstClassTicket");
    let eTicketNumber = getInputNumber("eTicket");
    let subtotal = (fTicketNumber * 150) + (eTicketNumber * 100);
    let vat = Math.round(subtotal * 0.1);
    let totalAmount = subtotal + vat;
    document.querySelector("#subtotal").innerText = subtotal;
    document.querySelector("#vat").innerText = vat;
    document.querySelector("#total").innerText = totalAmount; 
}

// ---------------------
// Popup Function Area
// ---------------------
function popup(){
    let fTicketNumber = getInputNumber("firstClassTicket");
    let eTicketNumber = getInputNumber("eTicket");
    document.querySelector("#f").innerText = fTicketNumber;
    document.querySelector("#e").innerText = eTicketNumber;
    document.getElementById("popup-1").classList.add("active");
}


function closePopup(){
    document.getElementById("popup-1").classList.remove("active");
}

