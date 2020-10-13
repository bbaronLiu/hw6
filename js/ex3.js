/* Tutorial 4
Question 3 JavaScript code
*/
console.log("Baron's Output from HW 6 Question 5");


const words = [{
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished"
  }, {
    term: "Tautology",
    definition: "logical argument constructed in such a way that it is logically irrefutable"
  }, {
    term: "Oxymoron",
    definition: "figure of speech that juxtaposes elements that appear to be contradictory"
  }];
  
  var parsed = "";
  for (i = 0; i< words.length; i++) {
    var myobj=  words[i];
    for (var property in myobj) {
        parsed += property + ": " + myobj[property] + "\n";          
    }
}                              

document.getElementById("content").innerHTML = 'parsed';