// 2D Arrays Practice - Three Challenges

const allScores = [                        // Create a 2D array with three inner arrays, each containing three test scores
    [85, 92, 78],  // Student 1's scores
    [90, 88, 95],  // Student 2's scores
    [76, 84, 89]   // Student 3's scores
];

console.log('All student scores:', allScores);
console.log('Student 1 scores:', allScores[0]);
console.log('Student 2, Test 2 score:', allScores[1][1]);
console.log('Student 3, Test 3 score:', allScores[2][2]);

const theaterSeating = [                 // Create a 2D array representing 3 rows with 4 seats each
    ["A1", "A2", "A3", "A4"],  // Row A
    ["B1", "B2", "B3", "B4"],  // Row B
    ["C1", "C2", "C3", "C4"]   // Row C
];

console.log('Theater seating layout:', theaterSeating);
console.log('Row A seats:', theaterSeating[0]);
console.log('Row B seats:', theaterSeating[1]);
console.log('Row C seats:', theaterSeating[2]);
console.log('Seat B3 location:', theaterSeating[1][2]);

const contactsList = [                                          // Create a 2D array where each inner array contains contact information
    ["John Smith", "john.smith@email.com", "555-123-4567"],     // Contact 1
    ["Sarah Johnson", "sarah.j@email.com", "555-987-6543"]      // Contact 2
];

console.log('Complete contacts list:', contactsList);
console.log('Contact 1 info:', contactsList[0]);
console.log('Contact 2 info:', contactsList[1]);
console.log('John Smith\'s email:', contactsList[0][1]);
console.log('Sarah Johnson\'s phone:', contactsList[1][2]);
/*
for (let i = 0; i < contactsList.length; i++) {    // Attempted to loop through each contact to display formatted information
    console.log(`Contact ${i + 1}:`);
    console.log(`  Name: ${contactsList[i][0]}`);
    console.log(`  Email: ${contactsList[i][1]}`);
    console.log(`  Phone: ${contactsList[i][2]}`);
}
*/