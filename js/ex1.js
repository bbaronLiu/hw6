/* Tutorial 4
 Question 1 JavaScript code
*/
console.log("Baron's Output from HW 6 Question 1");

const bodyNodes = (node, index) => { 
    console.log(document.body);
};


bodyNodes();

console.log(document.body.childNodes[0]);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[20]);
console.log(document.body.childNodes[5].childNodes[0]);
console.log(document.body.childNodes[5].childNodes[1]);
