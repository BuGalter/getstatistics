interface Student {
  name: string; // имя студента
  avgMark: number; // средний балл студента
};

interface Statistics {
  avgMark: number; // средняя оценка всех студентов
  highestMark: string; // имя студента с самым высоким средним баллом
  lowestMark: string; // имя студента с самым низким средним баллом
};

function getStatistics(marks: Student[]): Statistics {
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