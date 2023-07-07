// Deposit part

/*
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
const currentbalanceTotal = previousBalanceTotal + newDepositAmount;
 const numberBalanceTotal = parseFloat(currentbalanceTotal);
 balanceTotalElement.innerText = numberBalanceTotal


depositField.value = '';

})
*/


// withdraw
/*
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
 const currentbalanceTotal = previousBalanceTotal - newWithdrawAmount;
//  const numberBalanceTotal = parseFloat(currentbalanceTotal);
 balanceTotalElement.innerText = currentbalanceTotal


withdrawField.value = '';

})

*/



// bank-function
function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
     const inputFieldValueString = inputField.value;
     const inputFieldValue = parseFloat(inputFieldValueString)
     inputField.value = '';
     return inputFieldValue;
}

function getElementsValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const value = parseFloat(elementValueString);
    return value;
}

function setTextElemtsValueByid(elementId,newValue){
    const textElemt = document.getElementById(elementId);
    textElemt.innerText = newValue;

}

// function-deposit

document.getElementById("btn-deposit").addEventListener('click',function(){
    const newDepositAmount = getInputValueById('deposit')

    const previousDepositTotal = getElementsValueById('deposit-total');
    console.log(newDepositAmount)

    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElemtsValueByid('deposit-total',newDepositTotal);

    const previousBalanceTotal = getElementsValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElemtsValueByid('balance-total', newBalanceTotal)

})


// withdraw-function

document.getElementById("btn-withdraw").addEventListener('click',function(){
    const newWithdrawAmount = getInputValueById('withdraw')

    const previousWithdrawTotal = getElementsValueById('withdraw-total');
    console.log(newWithdrawAmount)

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElemtsValueByid('withdraw-total',newWithdrawTotal);

    const previousBalanceTotal = getElementsValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElemtsValueByid('balance-total', newBalanceTotal)

})