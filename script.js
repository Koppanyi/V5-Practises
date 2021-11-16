var myFirstString = 'ez egy string';
var mySecondString = "ez is egy string";
var myThirdString = 'ez pedig egy többsoros string';

var myFirtNumber = 0;
var mySecondNumber = 15;
var myThirdNumber = 6528000;

var myfirstBoolean = true;
var mySecondBoolean = false;

var myFirstArray = [ "1984", "Száz év magány", "Mester és Margarita", "39 kulcs", "Homo Sapiens"];

var mySecondArray = [ 1984, "Száz év magány", "Mester és Margarita", "39 kulcs", "Homo Sapiens"];

var myFirstObject = {
    title: "Mester és Margarita",
    year: "1966",
    author: "Mikhail Bulgakov",
    translations: ["hu", "en", "de", "fr"]
};

console.log(myFirstArray[0]);
console.log(myFirstObject.title);
console.log(myFirstObject["title"]);

var a = 1;
var b = 2;
var c = a + b;
console.log(c);

function add(firstNumber, secondNumber) {
    if (firstNumber > 0) {
        console.log("az első szám nagyobb mint 0")
    } else {
        consolole.log("az első szám <= 0")
    }
    console.log(firstNumber + secondNumber);
};

function subtract(firstNumber, secondNumber) {
    let result;
    if (firstNumber > secondNumber) {        
        result = firstNumber - secondNumber;
    } else {
        result = secondNumber - firstNumber;
    }
    console.log("az eredmény:", result);
};

subtract(8, 10);

//add(1, 2);

//add(17948, 679);


function check(text) {
    if (text === "hello") {
        console.log("a Text az volt hogy HELLO")
    }
    else if 
        (text === "hello") {
        console.log("második if-else ág")
    }
    
    if (text === "hello") {
        console.log("ez egy másik if-else vizsgálat")
    }
    
}

check("hello");

function compare (a, b) {
    console.log("==", a == b );
    console.log("===", a === b);
    var c = a + b;
    console.log("a + b", c);
    console.log("c típusa", typeof c);


}

compare (1984, "1984")

compare(myFirstArray[0], mySecondArray[0]);

var myFirstFuctionVariable = function () {
    console.log("ez egy függvény amit változóban tároltunk el")
};
 myFirstFuctionVariable();

 (function (text)  {
    console.log("ez a függvényt egyből meghívtuk")
    console.log("text")
 }("Bye"));

 var mySecondFunctionVariable = function () {
     console.log("Ez valyon mikor fut le")
 };

 mySecondFunctionVariable;

 var anotherVar = mySecondFunctionVariable;
 anotherVar();

 var theLastFuncton = function (text) {
     console.log(text)
 };
 theLastFuncton(funtion () {return "I'm calling the last function"} );
 