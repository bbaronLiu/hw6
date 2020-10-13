/* Tutorial 4
Question 2 JavaScript code
*/
console.log("Baron's Output from HW 6 Question 2");

const displayText400 = () => {
    document.getElementsByName('400level').forEach(function(ele, idx) {
        console.log(ele)

    };

displayText400();

const paragraphBoldYellow = () => {
    document.getElementsByName('submit').forEach(function(ele, idx) {
        ele.style.fontweight = 'bold';
        ele.style.fontweight = "yellow";

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

addLink();