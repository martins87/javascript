let grades = [1.8, 4.8, 7.9, 10, 9.1, 6.33, 4.99, 5.9, 7]
			
function notEnough(value) {
	return value < 6
}
			
const badGrades = grades.filter(notEnough)
console.log(badGrades)
