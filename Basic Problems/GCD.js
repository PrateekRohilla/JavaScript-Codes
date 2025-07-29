function HCF(a, b) {

    let res;

    for (let i = (a < b ? a : b); i >= 1; i--) {
        if (a % i == 0 && b % i == 0) {
            res = i;
            break;
        }
    }

    console.log(res);
}

//Euclidean algo for GCD
function GCD(a, b) {

    let res;

    while (a > 0 && b > 0) {
        if (a > b)
            a = a % b;
        else
            b = b % a;
    }

    res = a > b ? a : b;
    console.log(res);
}

HCF(45, 33);
GCD(45, 33);
