const firstClassPlus = document.getElementById("firstClassPlus");
const firstClassMinus = document.getElementById("firstClassMinus");
const economyPlus =document.getElementById("economyPlus");
const economyMinus = document.getElementById("economyMinus");
const bookBtn = document.getElementById("bookBtn");





function ticketChange(ticketInput ,isIncrease){
    let fTicketNumber = getInputNumber(ticketInput);
    if(isIncrease == true){
        fTicketNumber++;
    }
    if(isIncrease == false && fTicketNumber > 0){
        fTicketNumber--;
    }
    document.getElementById(ticketInput).value = fTicketNumber;
    total();
}





// function handleFTicketChange(isIncrease){
//     let fTicketNumber = getInputNumber("firstClassTicket");
//     if(isIncrease == true){
//         fTicketNumber++;
//     }
//     if(isIncrease == false && fTicketNumber > 0){
//         fTicketNumber--;
//     }
//     document.getElementById("firstClassTicket").value = fTicketNumber;
//     total();
// }


// function handleETicketChange(isIncrease){
//     let eTicketNumber = getInputNumber("eTicket");
//     if(isIncrease == true){
//         eTicketNumber++;
//     }
//     if(isIncrease == false && eTicketNumber > 0){
//         eTicketNumber--;
//     }
//     document.getElementById("eTicket").value = eTicketNumber;
//     total();
// }














// function handleFTicketChange(isIncrease){
//     let fTicketNumber = getInputNumber("firstClassTicket");
//     if(isIncrease == true){
//         fTicketNumber++;
//     }
//     if(isIncrease == false && fTicketNumber > 0){
//         fTicketNumber--;
//     }
//     document.getElementById("firstClassTicket").value = fTicketNumber;
//     total();
    
// }


// function handleETicketChange(isIncrease){
//     let eTicketNumber = getInputNumber("eTicket");
//     if(isIncrease == true){
//         eTicketNumber++;
//     }
//     if(isIncrease == false && eTicketNumber > 0){
//         eTicketNumber--;
//     }
//     document.getElementById("eTicket").value = eTicketNumber;
//     total();
// }






// firstClassPlus.addEventListener("click",function(){
//     // let fTicketAmount = document.getElementById("firstClassTicket").value;
//     // let fTicketNumber = parseInt(fTicketAmount);
//     let fTicketNumber = getInputNumber("firstClassTicket");
//     fTicketNumber++;
//     document.getElementById("firstClassTicket").value = fTicketNumber;
//     total()
    
// })



// firstClassMinus.addEventListener("click",function(){
//     // let fTicketAmount = document.getElementById("firstClassTicket").value;
//     // let fTicketNumber = parseInt(fTicketAmount);
//     let fTicketNumber = getInputNumber("firstClassTicket");
//     fTicketNumber--;
//     if(fTicketNumber<0){
//         fTicketNumber = 0;
//     }
//     document.getElementById("firstClassTicket").value = fTicketNumber;
//     total()
    
// })


function getInputNumber(id){
    var amount = document.getElementById(id).value;
    var number = parseInt(amount);
    return number;
}




// economyPlus.addEventListener("click",function(){
//     // let eTicketAmount = document.getElementById("eTicket").value;
//     // let eTicketNumber = parseInt(eTicketAmount);
//     let eTicketNumber = getInputNumber("eTicket");
//     eTicketNumber++;
//     document.getElementById("eTicket").value = eTicketNumber;
//     total()
    
// })

// economyMinus.addEventListener("click",function(){
//     // let eTicketAmount = document.getElementById("eTicket").value;
//     // let eTicketNumber = parseInt(eTicketAmount);
//     let eTicketNumber = getInputNumber("eTicket");
//     eTicketNumber--;
//     if(eTicketNumber < 0)
//     {
//         eTicketNumber = 0;
//     }
//     document.getElementById("eTicket").value = eTicketNumber;
//     total()
    
// })

function total(){
    let fTicketNumber = getInputNumber("firstClassTicket");
    let eTicketNumber = getInputNumber("eTicket");
    let subtotal = (fTicketNumber * 150) + (eTicketNumber * 100);
    let vat = subtotal * 0.1;
    vat.toFixed(2);
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


const close = document.querySelector("#close");
close.addEventListener("click",function(){
    document.getElementById("popup-1").classList.remove("active");
})

