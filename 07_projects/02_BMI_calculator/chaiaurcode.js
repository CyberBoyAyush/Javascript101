const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault(); // prevent the default action of the form
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const results = document.querySelector('#results');

    let errorMessage = '';
    if(height === '' || height < 0 || isNaN(height)){
        errorMessage += 'Please give a valid height. ';
    }
    if(weight === '' || weight < 0 || isNaN(weight)){
        errorMessage += 'Please give a valid weight.';
    }

    if(errorMessage){
        results.innerHTML = errorMessage;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>Your BMI is ${bmi}</span>`;
    }


});