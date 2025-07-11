// easy



function printNumberList(){
    const placeNumberList = document.querySelector('.place-number-list');
    placeNumberList.innerHTML = ''
    for(let i=1; i<=10; i++){
        placeNumberList.innerHTML  += i + "<br>";
    }

}


function printSum(){
    const numberInput = document.querySelector('.number-input');
    const placeSum = document.querySelector('.place-sum');
    const numberValue = Number(numberInput.value);
    
    let sum = 0;
    for (let i=1; i<=numberValue; i++){
        sum+=i;
    }

    placeSum.textContent = sum;
    
    

}


function printMultiTable(){
    const placeOutput = document.querySelector('.place-multi-table');
    placeOutput.innerHTML = ''
    for(let i=2; i<=9; i++){
        for(let j=1; j<=10; j++){
            placeOutput.innerHTML  += `${i} x ${j} = ${i*j} <br>`;

        }
    }

}




