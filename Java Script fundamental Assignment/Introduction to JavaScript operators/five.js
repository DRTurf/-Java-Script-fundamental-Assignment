function Interest(principle,rate,time){
    let simpleInterest=(principle*rate*time)/100;
    return simpleInterest;
}

let principle=200;
let rate=50;
let time=2;

console.log(`Simple interest is: ${Interest(principle,rate,time)}`);
