// 1.
for(var i = 1; i <= 20; i++) {
    if (i == 0) {
        console.log(i + " is even");
    } else if (i % 2 == 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}

// 2.
for(var i = 100; i >= 0; i--) {
    if (i % 3 == 0) {
        console.log(i + " is divisible by " + 3)
    } else {
        console.log(i)
    }
}

// 3.
for(var i = 4; i>= -3.5; i-=1.5) {
    console.log(i)
}

// 4.
var sum = 0
for(var i = 1; i <= 100; i++) {
    sum+= i;
}
console.log(sum)

// 5.
var product = 1
for(var i = 1; i <= 12; i++) {
    product *= i;
}
console.log(product)