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
  return 
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