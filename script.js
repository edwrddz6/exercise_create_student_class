// Create a class named Student that takes in name, age, and major as constructor parameters.
// Create an instance of student saved to a variable and console.log the variable

const student = {
    name: "Edward",
    age: 29,
    major: "Marketing",
};

const { name:studentName, age:studentAge, major:studentMajor } = student;

const displayStudentDetails = (studentName, studentAge, studentMajor) => {
    console.log("Student's Name: " + studentName);
    console.log("Age: " + studentAge);
    console.log("Field of Study: " + studentMajor);
}

displayStudentDetails(studentName, studentAge, studentMajor);