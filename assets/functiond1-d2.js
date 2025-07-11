 const inputElement = document.querySelector('.even-odd .inputEle');
    const btnElement = document.querySelector('.even-odd .fn-btn');
    const resultElement = document.querySelector('.even-odd .result');

    function CheckEvenOdd() {
        const inputValue = Number(inputElement.value);
        if ((inputElement.value.trim() === '') || (isNaN(inputValue))){
            resultElement.textContent = 'Please enter a number > 0'

        }
        else {
            if((inputValue % 2 === 0) && Number.isInteger(inputValue)){
                resultElement.textContent = `${inputValue} is even`
            } else if (((inputValue % 2 !== 0) && Number.isInteger(inputValue))) {
                resultElement.textContent = `${inputValue} is odd`
    
            }
            else {
                resultElement.textContent = 'Please enter an Integer '

            }
        }
    }
    btnElement.addEventListener('click', function(){
        CheckEvenOdd()
    })



    const inputElement2 = document.querySelector('.score-ranking .scoreEle');
    const btnElement2 = document.querySelector('.score-ranking .rank-btn');
    const resultElement2 = document.querySelector('.score-ranking .result');

     function scoreRanking() {
        const inputValue2 = Number(inputElement2.value);
        if ((inputElement2.value.trim() === '') || (isNaN(inputValue2))){
            resultElement2.textContent = 'Please enter a number > 0'

        }
        else {
            
            if (inputValue2 <3){
                resultElement2.textContent = 'Fail'

            } else if(inputValue2 >=3 && inputValue2 <4 ) {
                resultElement2.textContent = 'Good'
            } 
            else if (inputValue2 >=4 && inputValue2 <=5){
                resultElement2.textContent = 'Excellent'
    
            }
           
        }
    }
    btnElement2.addEventListener('click', function(){
        scoreRanking()
    })



    const inputElement3 = document.querySelector('.day');
    const btnElement3 = document.querySelector('.day-btn');
    const resultElement3 = document.querySelector('.nameofday .result');

     function nameOfDay() {
        const inputValue3 = Number(inputElement3.value);
        if ((inputElement3.value.trim() === '') || (isNaN(inputValue3))){
            resultElement3.textContent = 'Please enter a number from 1 to 7'

        }
        switch(inputValue3){
            case 1: 
                resultElement3.textContent = 'Monday';
                break;
            case 2: 
                resultElement3.textContent = 'Tuesday';
                break;
            case 3: 
                resultElement3.textContent = 'Wednesday';
                break;
            case 4: 
                resultElement3.textContent = 'Thursday';
                break;
            case 5: 
                resultElement3.textContent = 'Friday';
                break;
            case 6: 
                resultElement3.textContent = 'Saturday';
                break;
            case 7: 
                resultElement3.textContent = 'Sunday';
                break;
            default: 
                resultElement3.textContent = 'Please enter a number from 1 to 7'
                return;

        }

    }
    btnElement3.addEventListener('click', function(){
        nameOfDay()
    })



    const inputElement4 = document.querySelector('.input-random');
    const btnElement4 = document.querySelector('.random-btn');
    const resultElement4 = document.querySelector('.guess-game .result');
    const hintElement = document.querySelector('.guess-game .hint');
    const numberRandom = Math.floor(Math.random()*10) +1;

     function guessNumberGame() {
        const inputValue4 = Number(inputElement4.value);
        hintElement.textContent = numberRandom;
        if ((inputElement4.value.trim() === '') || (isNaN(inputValue4))){
            resultElement4.textContent = 'Please enter a number from 1 to 10'

        }

        switch(inputValue4){
            case numberRandom: 
                resultElement4.textContent = 'Exactly!!';
                break;
            
            default: 
                if(inputValue4>numberRandom){
                   resultElement4.textContent = `Please enter a number < ${inputValue4}`

                } else {
                   resultElement4.textContent = `Please enter a number > ${inputValue4}`

                }

                return;

        }

    }
    btnElement4.addEventListener('click', function(){
        guessNumberGame()
    })