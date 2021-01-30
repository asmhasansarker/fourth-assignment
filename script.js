const firstClassPlus = document.getElementById("firstClassPlus");
const firstClassMinus = document.getElementById("firstClassMinus");
const economyPlus =document.querySelector("#economyPlus");
const economyMinus = document.querySelector("#economyMinus");
const bookBtn = document.querySelector("#bookBtn");

firstClassPlus.addEventListener("click",function(){
    let fTicketAmount = document.querySelector("#firstClassTicket").value;
    let fTicketNumber = parseInt(fTicketAmount);
    fTicketNumber++;
    document.querySelector("#firstClassTicket").value = fTicketNumber;
    total()
    
})



firstClassMinus.addEventListener("click",function(){
    let fTicketAmount = document.querySelector("#firstClassTicket").value;
    let fTicketNumber = parseInt(fTicketAmount);
    fTicketNumber--;
    if(fTicketNumber<0){
        fTicketNumber = 0;
    }
    document.querySelector("#firstClassTicket").value = fTicketNumber;
    total()
    
})

economyPlus.addEventListener("click",function(){
    let eTicketAmount = document.querySelector("#eTicket").value;
    let eTicketNumber = parseInt(eTicketAmount);
    eTicketNumber++;
    document.querySelector("#eTicket").value = eTicketNumber;
    total()
    
})

economyMinus.addEventListener("click",function(){
    let eTicketAmount = document.querySelector("#eTicket").value;
    let eTicketNumber = parseInt(eTicketAmount);
    eTicketNumber--;
    if(eTicketNumber < 0)
    {
        eTicketNumber = 0;
    }
    document.querySelector("#eTicket").value = eTicketNumber;
    total()
    
})

function total(){
    let fTicketNumber = parseInt(document.querySelector("#firstClassTicket").value);
    let eTicketNumber = parseInt(document.querySelector("#eTicket").value);
    let subtotal = (fTicketNumber * 150) + (eTicketNumber * 100);
    let vat = subtotal * 0.1;
    vat.toFixed(2);
    let totalAmount = subtotal + vat;
    document.querySelector("#subtotal").innerText = subtotal;
    document.querySelector("#vat").innerText = vat;
    document.querySelector("#total").innerText = totalAmount; 
    

}

// bookBtn.addEventListener("click",function(){
//     let fTicketNumber = parseInt(document.querySelector("#firstClassTicket").value);
//     let eTicketNumber = parseInt(document.querySelector("#eTicket").value);
//     document.querySelector("#f").innerText = fTicketNumber;
//     document.querySelector("#e").innerText = eTicketNumber;
//     let head = document.querySelector("#head");
//     let main = document.querySelector("#main");
//     head.classList.add = "custom-gray";
//     main.classList.add = "custom-gray";
//     let success = document.querySelector("#congratulation-area");
//     success.style.display = "block";
// })



// ---------------------
// Popup Function Area
// ---------------------

function popup(){
    let fTicketNumber = parseInt(document.querySelector("#firstClassTicket").value);
    let eTicketNumber = parseInt(document.querySelector("#eTicket").value);
    document.querySelector("#f").innerText = fTicketNumber;
    document.querySelector("#e").innerText = eTicketNumber;
    document.getElementById("popup-1").classList.add("active");
}


const close = document.querySelector("#close");
close.addEventListener("click",function(){
    document.getElementById("popup-1").classList.remove("active");
})

