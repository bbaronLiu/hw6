/* Tutorial 4
Question 2 JavaScript code
*/
console.log("Baron's Output from HW 6 Question 2");

const displayText400 = () => {
    var x = document.getElementById("400level").textContent;
    console.log(x)
};

displayText400();

const paragraphBoldYellow = () => {
    document.getElementById("P").style.fontWeight = "bold";
    document.getElementById("P").style.backgroundColor = "yellow";
};

paragraphBoldYellow();


const addLink = () => {
    var a = document.createElement('a');
    var linkText = document.createTextNode("College of Business");
    a.appendChild(linkText);
    a.title = "College of Business";
    a.href = "https://www.csulb.edu/college-of-business";
    document.getElementById("D").appendChild(a)
};