function convert() {
    var inputType = document.getElementById("inputType").value;
    var outputType = document.getElementById("outputType").value;
    var input = document.getElementById("input").value;
    var output,cell;

    // Convert input to Celsius
    if (inputType === "fer") {
        output = (input - 32) * (5 / 9);
        bg(output);
    } else if (inputType === "kel") {
        output = input - 273.15;
        bg(output);
    } else {
        output = input;
        bg(output);
    }

    // Convert Celsius to output type
    if (outputType === "fer") {
        output = (output * 9 / 5) + 32;
    } else if (outputType === "kel") {
        output = output + 273.15;
    }

    document.getElementById("output").value = output.toFixed(2);
}
function heading(){
    var inputType = document.getElementById("inputType").value;
    var outputType = document.getElementById("outputType").value;
    var feild = document.getElementById('head').innerText;
    var first,second;
    if(inputType=="cel"){
        first = "Celsius";
    }
    else if(inputType=="fer"){
        first = "Ferhenheit";
    }
    else if(inputType=="kel"){
        first = "Kelvin";
    }
    if(outputType=="cel"){
        second = "Celsius";
    }
    else if(outputType=="fer"){
        second = "Ferhenheit";
    }
    else if(outputType=="kel"){
        second = "Kelvin";
    }
    document.getElementById('head').innerText = first + " to " + second;
}
function bg(num){debugger;
    var body = document.querySelector('body');

}
