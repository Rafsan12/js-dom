// Deposit part

document.getElementById('btn-deposit').addEventListener('click', function(){
 const depositField = document.getElementById('deposit');
 const newDepositAmountString = depositField.value;
//  console.log(depositAmount)
const newDepositAmount = parseFloat(newDepositAmountString)
// for non-input use innerText
const depositTotalElement = document.getElementById('deposit-total');
const previousDepositTotalString = depositTotalElement.innerText;
// console.log(depositTotal) 
const previousDepositTotal =parseFloat(previousDepositTotalString)
const curentDepositeTotal = previousDepositTotal + newDepositAmount;
const numberCurrentDepositTotal = parseFloat(curentDepositeTotal)
depositTotalElement.innerText = numberCurrentDepositTotal;

const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);
const currentbalanceTotal = numberCurrentDepositTotal + previousBalanceTotal;
 const numberBalanceTotal = parseFloat(currentbalanceTotal);
 balanceTotalElement.innerText = numberBalanceTotal


depositField.value = '';

})



// withdraw

document.getElementById('btn-withdraw').addEventListener("click", function(){
    const withdrawField = document.getElementById('withdraw');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString)
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString)
    const currentWithdraeAmount = previousWithdrawTotal + newWithdrawAmount;
    const numberWithdrawTotal = parseFloat(currentWithdraeAmount)
    withdrawTotalElement.innerText = numberWithdrawTotal;


 const balanceTotalElement = document.getElementById('balance-total');
 const previousBalanceTotalString = balanceTotalElement.innerText;
 const previousBalanceTotal = parseFloat(previousBalanceTotalString);
 const currentbalanceTotal = previousBalanceTotal - numberWithdrawTotal;
 const numberBalanceTotal = parseFloat(currentbalanceTotal);
 balanceTotalElement.innerText = numberBalanceTotal


withdrawField.value = '';

})