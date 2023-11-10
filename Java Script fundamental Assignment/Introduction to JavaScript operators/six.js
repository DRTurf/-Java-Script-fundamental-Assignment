function BMI(weight,height){
    let BMI=weight/(Math.pow(height,2));
    return BMI;
}

let weight=90;
let height=150;

console.log(`BMI is: ${BMI(weight,height)}`);