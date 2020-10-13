/* Tutorial 4
Question 2 JavaScript code
*/
console.log("Baron's Output from HW 6 Question 2");

const displayText400 = () => {
    let x = function() {
        four = document.getElementsByTagName("400level");
    };
    let y = function() {
        for (var i=0; i<x.length; i++)
        {
            console.log(x[i]);
        }
    }
    y()
};

displayText400();

const paragraphBoldYellow = () => {
    let x = function() {
        four = document.getElementsByTagName("D");
    }
    let y = function() {
        for (var i=0; i<x.length; i++)
        {
            x[i].style.fontweight = "bold";
            x[i].style.fontweight = "yellow";
        }
    y()
    }
};

paragraphBoldYellow();


const addLink = () => {
    var a = document.createElement('a');
    var link = document.createTextNode("This is link"); 
    a.appendChild(link);
    a.title = "College of Business"; 
    a.href = "https://www.csulb.edu/college-of-business"; 
    document.getElementById("D").appendChild(a);
};

addLink();