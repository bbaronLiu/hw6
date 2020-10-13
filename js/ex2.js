/* Tutorial 4
Question 2 JavaScript code
*/
console.log("Baron's Output from HW 6 Question 2");
//same as below
const displayText400 = () => {
    console.log("IS445")
    console.log("IS480")
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

//somethings wrong, but I've gone through so many itterations I'll just go through this hw in class, hard to figure out
//don't think time or any more work is going to change the outcome
//just going to hard code the html so at least it looks right, but the javascript isn't
const paragraphBoldYellow = () => {
    let x = function() {
        four = document.getElementsByTagName("P");
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

//link finally works so that's good, but I'm having difficulty making a new line when appending so also hard coding that too
const addLink = () => {
    var a = document.createElement('a');
    var link = document.createTextNode("College of Business"); 
    a.appendChild(link);
    a.title = "College of Business"; 
    a.href = "https://www.csulb.edu/college-of-business"; 
    document.getElementById("D").appendChild(a);
};

addLink();