handleToggle("add-money","block");
handleToggle("cash-out","none");
handleToggle("transfer-money","none")
handleToggle("Bonus-money", "none")
handleToggle("transaction-container", "none")
handleToggle("pay-bill", "none")


document.getElementById("add-money-box").addEventListener("click",function(){
    handleToggle("cash-out","none")
    handleToggle("add-money","block")
    handleToggle("Bonus-money", "none")
    handleToggle("transfer-money","none")
    handleToggle("transaction-container", "none")
    handleToggle("pay-bill", "none")

})
document.getElementById("cashout-box").addEventListener("click",function(){
    handleToggle("cash-out","block")
    handleToggle("add-money","none")
    handleToggle("transaction-container", "none")
    handleToggle("Bonus-money", "none")
    handleToggle("transfer-money","none")
    handleToggle("pay-bill", "none")
})

// transfer money
document.getElementById("transfer-money-box").addEventListener("click",function(){
    handleToggle("add-money","none");
    handleToggle("cash-out","none");
    handleToggle("transfer-money","block")
    handleToggle("Bonus-money", "none")
    handleToggle("transaction-container", "none")
    handleToggle("pay-bill", "none")
})
// bonus section
document.getElementById("bonus-box").addEventListener("click",function(){
    handleToggle("add-money","none");
    handleToggle("cash-out","none");
    handleToggle("transfer-money","none")
    handleToggle("Bonus-money", "block")
    handleToggle("transaction-container", "none")
    handleToggle("pay-bill", "none")
})
// pay bill section
document.getElementById("pay-bill-box").addEventListener("click",function(){
    handleToggle("pay-bill", "block")
    handleToggle("add-money","none");
    handleToggle("cash-out","none");
    handleToggle("transfer-money","none")
    handleToggle("Bonus-money", "none")
    handleToggle("transaction-container", "none")
})
document.getElementById("transaction-box").addEventListener("click",function(){
        handleToggle("add-money","none")
        handleToggle("cash-out","none")
        handleToggle("transaction-container", "block")
        handleToggle("transfer-money","none")
        handleToggle("Bonus-money","none")
        handleToggle("pay-bill", "none")
})
