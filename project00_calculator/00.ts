function calculator():number | undefined {


    var num1:number = Number(prompt("Enter the first number : "));
    var num2:number = Number(prompt("Enter the second number : "));

    var operation:string|null = prompt("Choose operation from : + - / * : ")

    if (operation == "+" ) {
        return num1 + num2;
    } else if (operation == "-") {
        return num1 - num2;
    } else if (operation == "*") {
        return num1 * num2;
    } else if (operation == "/") {
        return num1 / num2;
    } else {
        console.log("Stop joking around. ");
        return undefined
    }
}

console.log(calculator());