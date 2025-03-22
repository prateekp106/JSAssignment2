// Q1:-
// Simple function to find grades using switch case
function findGrades(marks) {
    // Convert marks to a number between 0 and 50
    let simpleMarks = marks % 51;
  
    switch (true) {
      case (simpleMarks < 10):
        console.log("Grade: E");
        break;
      case (simpleMarks < 20):
        console.log("Grade: D");
        break;
      case (simpleMarks < 30):
        console.log("Grade: C");
        break;
      case (simpleMarks < 40):
        console.log("Grade: B");
        break;
      case (simpleMarks <= 50):
        console.log("Grade: A");
        break;
      default:
        console.log("Invalid Marks");
    }
  }
  
  findGrades(48); 
  findGrades(15); 
  findGrades(35); 
  findGrades(5050);
  findGrades(7); 


// Q2:-
// Function to get value based on character input
function getValue(char) {
    // Convert character to lowercase to handle both cases
    char = char.toLowerCase();
  
    switch (char) {
      case 'p':
        return "PrepBytes";
      case 'z':
        return "Zenith";
      case 'e':
        return "Expert Coder";
      case 'd':
        return "Data Structure";
      default:
        return "Invalid Character";
    }
  }
  
  console.log(getValue('P')); 
  console.log(getValue('z')); 
  console.log(getValue('E')); 
  console.log(getValue('d')); 
  console.log(getValue('x')); 
 
// Q3
// Function to find the largest number among three numbers
function Max_out_of_three(a, b, c) {
    // Check if all three numbers are the same
    if (a === b && b === c) {
      console.log(-1);
    } else {
      // Find the largest number using Math.max
      console.log(Math.max(a, b, c));
    }
  }
  
  // Test examples
  Max_out_of_three(10, 20, 30); 
  Max_out_of_three(50, 50, 50); 
  Max_out_of_three(15, 25, 25); 
  Max_out_of_three(70, 40, 90); 

//Q4
// Function to find the second smallest number among three distinct numbers
function findSndSmallest(a, b, c) {
    // Create an array of the three numbers and sort it in ascending order
    const sortedNumbers = [a, b, c].sort((x, y) => x - y);
    
    // Return the second smallest number (index 1 after sorting)
    console.log(sortedNumbers[1]);
  }
  
  findSndSmallest(10, 20, 30); 
  findSndSmallest(50, 30, 40); 
  findSndSmallest(15, 5, 25); 
  findSndSmallest(70, 90, 80); 
  
//Q5
