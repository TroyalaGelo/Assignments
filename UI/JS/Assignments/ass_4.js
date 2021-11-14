console.log("Assignment 4")

uEmail = "troy.radeka@mastek.com"

function checker(email) {
    ret = false

    // intial checks
    check1 = email.includes('@') && email.includes('.')
    check2 = email.match('.').length == 1 && email.charAt(1) != '.' && email.charAt(-1) != '.'

    if (check1 && check2) {
        words = email.split('@')
        
        if (words[0].match(/^[A-Za-z0-9_@./#&+-]+$/)) {
            ret = true;
        } else {
            ret = false;
        }
    } else { 
        ret = false;
    }

    return ret
}

console.log(checker(uEmail));

