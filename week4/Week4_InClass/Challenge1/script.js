function calculate() {

    // YOUR CODE GOES HERE
    if (!validate_numbers()) {
        let result = document.getElementById("result");
        result.innerText = "Bad input!";
        return;
    }

    let n1 = Number(document.getElementById("number1").value);
    let n2 = Number(document.getElementById("number2").value);
    console.log(document.getElementById("number1"));
    console.log(document.getElementById("number2"));
    var total = 0;
    for (i = n1; i < (n2 + 1); i++) {
        total += i;
    }
    let result = document.getElementById("result");
    result.innerText = "The sum is: "+total;

    function validate_numbers() {
        let n1 = document.getElementById("number1").value;
        let n2 = document.getElementById("number2").value;
        if (n1 == "" || n2 == "") {
            return false;
        }
        return true;
    }
}




