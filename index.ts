/**
 * getstatstics module.
 * @module testtask-getstatistics/index
 */


interface Student {
  /**
   * The interface that describes student data.
   * @param {string} name - Student name.
   * @param {number} avgMark - Student average rating.
   */
  name: string;
  avgMark: number;
};

interface Statistics {
  /**
   * The interface that describes output data format.
   * @param {number} avgMark - Students average rating.
   * @param {string} highestMark - Student name with the highest average score.
   * @param {string} lowesMark - Student name with the lower average score.
   */
  avgMark: number;
  highestMark: string;
  lowestMark: string;
};

function getStatistics(marks: Student[]): Statistics {
  /**
   * A function that returns statistics on students.
   * @param {Array<Student>} marks - Array with students info.
   * @return {Statistics} result - Students information.
   */
  let len: number = marks.length;
  let result: Statistics = {
    avgMark: 0,
    highestMark: '',
    lowestMark: ''
  };
  let max: number = -Infinity;
  let min: number = Infinity; 
  let sum: number = 0;
  for (let i: number = 0; i < len; i += 1) {
    sum = sum + marks[i].avgMark;
    if (marks[i].avgMark > max) {
      max = marks[i].avgMark;
      result.highestMark = marks[i].name;
    };
    if (marks[i].avgMark < min) {
      min = marks[i].avgMark;
      result.lowestMark = marks[i].name;
    };
  };
  result.avgMark = sum / len;
  return result;
};

// Test data.
const testMarks = [
  {
    name: 'Vasya',
    avgMark: 3.75
  },
  {
    name: 'Lena',
    avgMark: 4.89
  }
];

console.log(getStatistics(testMarks));