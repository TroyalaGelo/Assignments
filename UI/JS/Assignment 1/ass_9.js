console.log("Assignment 9");

function is_weekend(dt){
    let date = new Date(dt).getDay();

    if (date == 6 || date == 0){
        return "weekend";
    } else {
        return false;
    }
}

console.log(is_weekend('Nov 15, 2014'));
console.log(is_weekend('Nov 16, 2014'));
console.log(is_weekend('Nov 17, 2014'));

