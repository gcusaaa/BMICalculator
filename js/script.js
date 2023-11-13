document.getElementById('calculateBtn').addEventListener('click', function() {
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);

    if(Number.isNaN(height) || Number.isNaN(weight)) {
        document.getElementById('answer').innerText = 'Please enter correct height and weight.';
        return;
    }

    let bmiCategory;
    let bmi = weight / ((height / 100) * (height / 100));

    switch (true) {
        case bmi < 18.5:
            bmiCategory = 'Underweight'
            break;
        case bmi >= 18.5 && bmi <25:
            bmiCategory = 'Normal weight'
            break;
        case bmi >= 25 && bmi < 30:
            bmiCategory = 'Overweight'
            break;
        default:
            bmiCategory = 'Obese'
            break;
    }

    document.getElementById('answer'). innerText = `Your BMI is: ${bmi.toFixed(2)} (${bmiCategory})`;
});







// let button = document.getElementById('calculateBtn')


// button.addEventListener('click', () => {
//     const height = parseInt(document.getElementById('height').value);
//     const weight = parseInt(document.getElementById('weight').value);
//     const result = document.getElementById('answer');
//     let height_status = false, weight_status = false
// })