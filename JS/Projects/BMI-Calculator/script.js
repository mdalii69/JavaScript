const myButton = document.querySelector('form')
myButton.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = document.getElementById('height').value;   //175
    const weight = document.getElementById('weight').value;   //70
    height_inMeter = height/100;   //(175/100) === 1.7  [Also this operation converted height(string into number)]
    bmi = (weight / (Math.pow(height_inMeter,2))).toFixed(1);  // ( 70 / ( 1.7 * 1.7) ).toFixed(1) === 22.9
    console.log(bmi)
    const output = document.getElementById('results')
    if (bmi < 18.6){
        output.textContent= `Under Weight: ${bmi}`
    }
    else if (18.6<= bmi && bmi <=24.9){
        output.textContent= `Normal Range: ${bmi}`
    }
    else if (24.9 < bmi){
        output.textContent= `Over Weight: ${bmi}`
    }
    else {
        output.textContent= `Enter you correct Height and Weight!`
    }
});



