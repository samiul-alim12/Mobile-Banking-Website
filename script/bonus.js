document.getElementById("bonus-btn").addEventListener("click",function(event){
    
    event.preventDefault();
    const bonusAmount = InputStringToNumber("bonus-amount");

    const mainBalance = textStringToNumber("balance");
    const transactionContainer = document.getElementById("transaction-container")
    if(bonusAmount > 0){
        const added = mainBalance + bonusAmount;
        innerTextChange("balance",added) ;
        const p = document.createElement("p");
        p.innerHTML = `
        
        <div class="flex w-full flex-col my-4 card bg-base-100 items-center justify-center rounded-box p-2 place-items-center">Added Money ${bonusAmount} for coupon</div> 
        `

        transactionContainer.appendChild(p)
    }
    else{
        alert("enter your coupon")
    }
})