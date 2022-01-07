/**
 * getstatstics module.
 * @module testtask-getstatistics/index
 */
;
;
function getStatistics(marks) {
    /**
     * A function that returns statistics on students.
     * @param {Array<Student>} marks - Array with students info.
     * @return {Statistics} result - Students information.
     */
    var len = marks.length;
    var result = {
        avgMark: 0,
        highestMark: '',
        lowestMark: ''
    };
    var max = -Infinity;
    var min = Infinity;
    var sum = 0;
    for (var i = 0; i < len; i += 1) {
        sum = sum + marks[i].avgMark;
        if (marks[i].avgMark > max) {
            max = marks[i].avgMark;
            result.highestMark = marks[i].name;
        }
        ;
        if (marks[i].avgMark < min) {
            min = marks[i].avgMark;
            result.lowestMark = marks[i].name;
        }
        ;
    }
    ;
    result.avgMark = sum / len;
    return result;
}
;
// Test data.
var testMarks = [
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
