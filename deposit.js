document.getElementById('btn-deposit').addEventListener('click',function(){
    const forinputValue=document.getElementById('deposit-input');
    const inputValueString=forinputValue.value;
    const inputValue=parseFloat(inputValueString);
    
    const viewDeposit=document.getElementById('deposit-amount');
    const totalDepositString=viewDeposit.innerText;

    const totalDeposit=parseFloat(totalDepositString);

    viewDeposit.innerText=inputValue;
    forinputValue.value='';

    const depositAmountTotal=inputValue+totalDeposit;
    viewDeposit.innerText=depositAmountTotal;
     const balanceAmount=document.getElementById('balane-amount');
     const balanceExixtingString=balanceAmount.innerText;
     const balanceExixting=parseFloat(balanceExixtingString);
     const totalBalance=balanceExixting+inputValue;
     balanceAmount.innerText=totalBalance;
});
