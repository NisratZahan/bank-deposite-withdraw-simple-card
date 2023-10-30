document.getElementById('btn-withdraw').addEventListener('click',function(){
    const forInputView=document.getElementById('withdraw-amount');
    const inputValueString=forInputView.value;
    const inputValue=parseFloat(inputValueString);
     
    const viewValue=document.getElementById('withdraw-amountdas');
    const viewAmountString=viewValue.innerText;
    const viewAmount=parseFloat(viewAmountString);
    viewValue.innerText=inputValue;
    forInputView.value='';

    const totalWithdraw=viewAmount+ inputValue;
    viewValue.innerText=totalWithdraw;

    const balance=document.getElementById('balane-amount');
    const balanceViewString=balance.innerText;
    const balanceView=parseFloat(balanceViewString);
     const totalBalance=balanceView-totalWithdraw;
     balance.innerText= totalBalance;

})