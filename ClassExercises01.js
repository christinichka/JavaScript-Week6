/*Headquarters have asked that you store the following information about each book.*/


// Each class needs 2 methods that update the book's property if the book needs to be discarded.

// Define your Book class here (Parent Class):

class Book {
  constructor(title, author, copyrightDate, isbn, numPages, numCheckedOut, hasBeenDiscarded) {
    this.title = title;
    this.author = author;
    this.copyrightDate = copyrightDate;
    this.isbn = isbn;
    this.numPages = numPages;
    this.numCheckedOut = numCheckedOut;
    this.hasBeenDiscarded = hasBeenDiscarded;  
  }
}

// Define your Manual and Novel classes here (Child Classes):

// Manuals > 5 years old: TOSS
class Manual extends Book {
  constructor(title, author, copyrightDate, isbn, numPages, numCheckedOut, hasBeenDiscarded) {
    super(title, author, copyrightDate, isbn, numPages, numCheckedOut, hasBeenDiscarded);
  }
  manualAgeMethod() {
    let currentYear = new Date().getFullYear();
    let ageOfManual = currentYear - this.copyrightDate;

// update hasBeenDiscarded to 'Yes'
    if (ageOfManual < 5) {
      return `${this.title} is ${ageOfManual} years old. Keep in inventory.`
    } else {
      manualObj["hasBeenDiscarded"] = 'Yes';
      // console.log(manualObj['hasBeenDiscarded'])
      return `${this.title} is ${ageOfManual} years old. Time to toss!`;
    }
  }
}


// Novel checked out > 100 times: TOSS*/
class Novel extends Book {
  constructor(title, author, copyrightDate, isbn, numPages, numCheckedOut, hasBeenDiscarded) {
    super(title, author, copyrightDate, isbn, numPages, numCheckedOut, hasBeenDiscarded);
  }
  numCheckedOutMethod(num) {
    // this will update the check out method as users check out books
    let updatedCheckedOutNum = novelObj.numCheckedOut + num;
    novelObj["numCheckedOut"] = updatedCheckedOutNum;
    // console.log(novelObj["numCheckedOut"])
    // this will change the hasBeenDiscarded key to 'Yes' if the novel has been checked out > 100 times
    if (updatedCheckedOutNum < 100) {
      return `${this.title} has been checked out ${updatedCheckedOutNum} times. Keep in inventory.`
    } else {
      manualObj["hasBeenDiscarded"] = 'Yes';
      // console.log(manualObj['hasBeenDiscarded'])
      return `${this.title} has been checked out ${updatedCheckedOutNum} times. Time to toss!`;
    }
  }
}


// Declare the objects for exercises 2 and 3 here:
let manualObj = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, 0000000000000, 1147, 1, 'No');
console.log(manualObj.manualAgeMethod());
console.log(manualObj);

let novelObj = new Novel('Pride and Prejudice', 'Jane Austin', 1813, 1111111111111, 432, 32, 'No');

console.log(novelObj.numCheckedOutMethod(5));
console.log(novelObj);


// Code exercises 4 & 5 here:
/*4. One of the above books needs to be discarded. Call the appropriate method for that book to update the property. That way the crew can throw it into empty space to become debris.


5. The other book has been checked out 5 times since you first created the object. Call the appropriate method to update the number of times the book has been checked out.*/
