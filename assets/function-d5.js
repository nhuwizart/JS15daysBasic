// Easy

function arrayMethods(event){
    const countries = ['VietNam', 'Russia', 'China', 'England']
    
    const btn = event.target.id
    document.querySelector('.place-basic').innerHTML = countries
    if (btn==='add'){
        countries.push('Thailand');
        document.querySelector('.place-output').innerHTML = countries
    } else if (btn==='del'){
        delete countries[1];
        document.querySelector('.place-output').innerHTML = countries


    }
}

document.querySelector('#add').addEventListener('click',arrayMethods) 
document.querySelector('#del').addEventListener('click',arrayMethods)


// Medium

function numberArray(event){
    const numberArr = [1, 6, 4, 9, 10]
    const placeOriginal = document.querySelector('.place-original')
    const btn=event.target.id
    placeOriginal.innerHTML = numberArr
    switch (btn){
        case 'max':
            document.querySelector('.place-max').innerHTML = Math.max(...numberArr)
            break;
        case 'min':
            document.querySelector('.place-min').innerHTML = Math.min(...numberArr)
            break;
        case 'sort':
            document.querySelector('.place-sort').innerHTML = numberArr.sort(function(a,b){return a-b})
            break;
        case 'reverse':
            document.querySelector('.place-reverse').innerHTML = numberArr.sort (function(a,b){return b-a})
            break;
        }   

}

document.querySelector('#max').addEventListener('click',numberArray)
document.querySelector('#min').addEventListener('click',numberArray)
document.querySelector('#sort').addEventListener('click',numberArray)
document.querySelector('#reverse').addEventListener('click',numberArray)