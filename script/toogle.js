
handleToggle("cash-out","none")
handleToggle("add-money","block")
handleToggle("transaction-container", "none")


document.getElementById("add-money-box").addEventListener("click",function(){
    handleToggle("cash-out","none")
    handleToggle("add-money","block")
    handleToggle("transaction-container", "none")
})
document.getElementById("cashout-box").addEventListener("click",function(){
    handleToggle("cash-out","block")
    handleToggle("add-money","none")
    handleToggle("transaction-container", "none")
})

document.getElementById("transaction-box").addEventListener("click",function(){
        handleToggle("add-money","none")
        handleToggle("cash-out","none")
        handleToggle("transaction-container", "block")
    
})