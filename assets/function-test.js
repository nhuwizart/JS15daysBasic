const easyInput1 = document.querySelector('#easy__input-x');
const easyInput2 = document.querySelector('#easy__input-y');
const easyButton = document.querySelector('#easy__button');
const easyResult = document.querySelector('.easy__result');
const addBtn = document.querySelector('.add');
const subBtn = document.querySelector('.sub');
const xBtn = document.querySelector('.multi');
const divBtn = document.querySelector('.division');



addBtn.addEventListener( 'click', function(){
    const inputValue1 = Number(easyInput1.value) ;
    const inputValue2 = Number(easyInput2.value);
    if ((inputValue1) && (inputValue2)){
        easyResult.textContent = `The area of ​​the rectangle is:  ${inputValue1} + ${inputValue2}  =  ${inputValue1+inputValue2}`;
    } else{
        easyResult.textContent = 'Please enter value';
        
    }

})
subBtn.addEventListener( 'click', function(){
    const inputValue1 = Number(easyInput1.value) ;
    const inputValue2 = Number(easyInput2.value);
    if ((inputValue1) && (inputValue2)){
        easyResult.textContent = `The area of ​​the rectangle is:  ${inputValue1} - ${inputValue2}  =  ${inputValue1-inputValue2}`;
    } else{
        easyResult.textContent = 'Please enter value';
        
    }

})
xBtn.addEventListener( 'click', function(){
    const inputValue1 = Number(easyInput1.value) ;
    const inputValue2 = Number(easyInput2.value);
    if ((inputValue1) && (inputValue2)){
        easyResult.textContent = `The area of ​​the rectangle is:  ${inputValue1} * ${inputValue2}  =  ${inputValue1*inputValue2}`;
    } else{
        easyResult.textContent = 'Please enter value';
        
    }

})
divBtn.addEventListener( 'click', function(){
    const inputValue1 = Number(easyInput1.value) ;
    const inputValue2 = Number(easyInput2.value);
    if ((inputValue1) && (inputValue2)){
        easyResult.textContent = `The area of ​​the rectangle is:  ${inputValue1} / ${inputValue2}  =  ${inputValue1/inputValue2}`;
    } else{
        easyResult.textContent = 'Please enter value';
        
    }

})
easyButton.addEventListener( 'click', function(){
    const inputValue1 = Number(easyInput1.value) ;
    const inputValue2 = Number(easyInput2.value);
    if ((inputValue1) && (inputValue2)){
        easyResult.textContent = `The area of ​​the rectangle is:  ${inputValue1} * ${inputValue2}  =  ${inputValue1*inputValue2}`;
    } else{
        easyResult.textContent = 'Please enter value';
        
    }

})


const cInput = document.querySelector('#easy__input-c');
const fInput = document.querySelector('#easy__input-f');
const CtoFButton = document.querySelector('#convert__button-1');
const FtoCButton = document.querySelector('#convert__button-2');
const convertBtn = document.querySelector('.convert__result');

CtoFButton.addEventListener( 'click', function(){
    const cInputValue = Number(cInput.value) ;
    if (cInputValue){
        convertBtn.textContent = `C to F:   ${cInputValue*1.8+32}`;
    } else{
        convertBtn.textContent = 'Please enter value';
        
    }

})
FtoCButton.addEventListener( 'click', function(){
    const fInputValue = Number(fInput.value);
    if (fInputValue){
        convertBtn.textContent = `F to C:   ${(fInputValue-32)/1.8}`;
    } else{
        convertBtn.textContent = 'Please enter value';
        
    }

})


const vndInput = document.querySelector('#easy__input-vnd');
const usdInput = document.querySelector('#easy__input-usd');
const currencyBtn1 = document.querySelector('#convert__currency1');
const currencyBtn2 = document.querySelector('#convert__currency2');
const currencyBtn = document.querySelector('.currency-result');

currencyBtn1.addEventListener( 'click', function(){
    const vInputValue = Number(vndInput.value) ;
    if (vInputValue){
        currencyBtn.textContent = `VND to USD:   ${vInputValue/24000}`;
    } else{
        currencyBtn.textContent = 'Please enter value';
        
    }

})
currencyBtn2.addEventListener( 'click', function(){
    const uInputValue = Number(usdInput.value) ;
    if (uInputValue){
        currencyBtn.textContent = `USD to VND :   ${uInputValue*24000}`;
    } else{
        currencyBtn.textContent = 'Please enter value';
        
    }

})






