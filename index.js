// Error handling - try, catch, finally
// The throw statement - create custom errors.

var sumButton = document.querySelector("#sumButton");
sumButton.addEventListener("click", function() {
    var num1 = document.querySelector("#input-1").value;
    var num2 = document.querySelector("#input-2").value;
    try {
        console.log("num1=" + num1 + " num2=" + num2);
        if (num1 < 0 || num2 < 0) {
            throw "Input is too low";
        }
        else if (num1 > 100 || num2 > 0) {
            throw "Input is too high";
        }
    } catch (error) {
        console.log(error);
    } 
    var sum = parseInt(num1) + parseInt(num2);
    document.querySelector("#displaySum").innerHTML = sum;
});