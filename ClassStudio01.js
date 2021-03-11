//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class crewCandidate {
  constructor(name, mass, scores){
    this.name = name;
    this.mass = mass;
    this.scores = [];
  }
  // Method to Add New Scores 
  addScore(num) {
    // Push scores to this.scores
    this.scores.push(num);
  }

  // Method to average test scores
  // average() {
  //   let total = 0;
  //   for(let i = 0;i < this.scores.length; i++) { 
  //       total += this.scores[i];
  //   }
  //   return Math.round(total/this.scores.length);
  //   }

  average() {
    let total = 0;
    for(let i = 0;i < this.scores.length; i++) { 
        total += this.scores[i];
    
    }
    total = total/this.scores.length * 10;
    return Math.round(total/10);
    }

//   // Method to indicate the candidate should be admitted
  status() {
    let admissionStatus = '';
    let average = this.average();

    if(average >= 90) {
      admissionStatus = "Accepted"
    }
    else if(average >= 80) {
      admissionStatus = "Reserve"
    }
    else if(average >= 70) {
      admissionStatus = "Probationary"
    }
    else {
      admissionStatus = "Rejected"
    }
    
    return `${this.name} earned an average test score of ${average}% and has a status of ${admissionStatus}.`

  }

}

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.


// Candidate objects
let bearObj = new crewCandidate('Bubba Bear', 135);
bearObj.scores.push(88, 85, 90);
bearObj.addScore(83);
// console.log(bearObj.scores);
console.log(bearObj);
console.log(bearObj.status() + '\n');


let malteseObj = new crewCandidate('Merry Maltese', 1.5);
malteseObj.scores.push(93, 88, 97);

console.log(malteseObj);
console.log("Merry's Average Score:", malteseObj.average());
console.log(malteseObj.status() + '\n');

let gatorObj = new crewCandidate('Glad Gator', 225);
gatorObj.scores.push(75, 78, 62);
// // Add 2 scores of 100% for Glad Gator to be moved to the Reserve category
// gatorObj.addScore(100);
// gatorObj.addScore(100);
// // Add 4 more scores of 100% for Glad Gator to be moved to the Accepted category
// gatorObj.addScore(100);
// gatorObj.addScore(100);
// gatorObj.addScore(100);
// gatorObj.addScore(100);

// console.log(gatorObj.scores);
console.log(gatorObj);
console.log(gatorObj.status() + '\n');


