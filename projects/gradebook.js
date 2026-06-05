// Array of student scores
const scores = [85, 42, 67, 90, 38, 75, 50, 29, 88, 61];

// Calculate average score
const average =
  scores.reduce((sum, score) => sum + score, 0) / scores.length;

// Filter passing scores (50 and above)
const passingScores = scores.filter(score => score >= 50);

// Sort passing scores in ascending order
const sortedPassingScores = passingScores.sort((a, b) => a - b);

// Output results to the console
console.log("Student Scores:", scores);
console.log("Average Score:", average.toFixed(2));
console.log("Passing Scores:", sortedPassingScores);