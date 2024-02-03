
function number(num) {
    let sume = 0;

    for(let nume of num){
        sume+=nume;

    }
    return sume;

}
console.log(number([10, 20, 30, 40, 50, 60]));