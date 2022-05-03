function convertToCe() {
    var fahrenheit1 = document.getElementById("fahrenheit1").value;
    if (fahrenheit1 != "") {
        var number = parseFloat(fahrenheit1);
        document.getElementById("celcius1").value = (number - 32) / 1.8 + "\xB0C";
    } else {
        alert("Please enter something");
    }
}

function convertToFa() {
    var celcius2 = document.getElementById("celcius2").value;
    if (celcius2 != "") {
        var number = parseFloat(celcius2);
        document.getElementById("fahrenheit2").value = (number * 9 / 5) + 32 + "\xB0F";
    } else {
        alert("Please enter something");
    }
}