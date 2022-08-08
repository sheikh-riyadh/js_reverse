const country = "Bangladesh";

function getReverse(country) {
    let reversed = "";
    for (let i = country.length - 1; i >= 0; i--) {
        reversed = reversed + " " + country[i];
    }

    return reversed;
}

let complatedReverse = getReverse(country);
console.log(complatedReverse);