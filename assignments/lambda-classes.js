// See README for detailed instructions
class Person {
  constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
  }
  speak() {
    return `Hello my name is ${ this.name }, I am from ${ this.location }`;
  }
}
class Instructors extends Person {
  constructor(name, age, location, specialty, favLanguage, catchPhrase) {
    super(name, age, location);
    this.specialty = specialty;
    this.favLanguage = favLanguage;
    this.catchPhrase = catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${ subject }`;
  }
  grade(student, subject) {
    return `${ student.name } receives a perfect score on ${ subject }`;
  }
  adjustGrade(student) {
    student.grade = Math.floor((Math.random() * 100) + 1);
    return `${ this.name } has graded some more assignments. ${ student.name }'s new grade is ${ student.grade }`;
  }
}
class Students extends Person {
  constructor(name, age, location, previousBackground, className, favSubjects, grade) {
    super(name, age, location);
    this.previousBackground = previousBackground;
    this.className = className;
    this.favSubjects = favSubjects;
    this.grade = grade;
  }
  listSubjects() {
    const favArr = [];
    this.favSubjects.forEach((el) => {
      favArr.push(el)
    });
    return favArr;
  }
  PRAssignment(subject) {
    return `${ this.name } has submitted a PR for ${ subject }`;
  }
  sprintChallenge(subject) {
    return `${ this.name } has begun sprint challenge on ${ subject }`;
  }
  graduate() {
    if (this.grade >= 70) {
      return `CONGRATULATIONS!!! ${ this.name } you are eligible for graduation! Your grade on course completion was ${ this.grade }`;
    }
    else {
      return `Sorry, ${ this.name } not quite ready for graduation yet. Your current grade is ${ this.grade }. Keep studying and pull those grades up.`;
    }
  }
}
class ProjectManagers extends Instructors {
  constructor(name, age, location, specialty, favLanguage, catchPhrase, gradClassName, favInstructor) {
    super(name, age, location, specialty, favLanguage, catchPhrase);
    this.gradClassName = gradClassName;
    this.favInstructor = favInstructor;
  }
  standUp(channel) {
    return `${ this.name } announces to ${ channel }, @channel standy times!`;
  }
  debugsCode(student, subject) {
    return `${ this.name } debugs ${ student.name }'s code on ${ subject }`;
  }
}

/// Test Personnel

const bigMike = new Instructors(
  "Big Mike",
  30,
  "new guinea",
  "Go Lang",
  "Rust",
  "Wait this is a Web Dev course??"
)
const lilMike = new Instructors(
  "Lil Mike",
  15,
  "Egypt",
  "backend",
  "C#",
  "Yes, I am a child prodigy..."
)
const mike = new Instructors(
  "Mike",
  42,
  "New Mexico",
  "frontend",
  "Javascript",
  "No I'm the real Mike!!"
)
const bigWill = new Students(
  "Big Will",
  22,
  "Scotland",
  "tv star",
  "web27",
  ["React", "CSS", "SQL"],
  68
)
const lilWill = new Students(
  "Lil Will",
  28,
  "France",
  "tv star",
  "web27",
  ["Node", "Computer Science", "Javascript"],
  85
)
const will = new Students(
  "Will",
  24,
  "Spain",
  "TV star",
  "web27",
  ["front end", "back end", "databases"],
  97
)
const shakur = new ProjectManagers(
  "Mr. Shakur",
  "24",
  "the West Coast",
  "machine learning",
  "Python",
  "PM LIFE!",
  "Web0",
  "Big Mike"
)
const wallace = new ProjectManagers(
  "Mr. Shakur",
  "23",
  "Brooklyn",
  "web development",
  "Typescript",
  "Where Brooklyn at!?",
  "Web0",
  "Big Mike"
)
const rios = new ProjectManagers(
  "Mr. Rios",
  "27",
  "The Bronx",
  "Node",
  "Javscript",
  "I'm not a PM, I just grade a lot.",
  "Web0",
  "Big Mike"
)

// console.log tests below
console.log(bigMike.demo(bigMike.specialty));
console.log(lilMike.adjustGrade(bigWill));
console.log(mike.grade(will, "testing"));
console.log(shakur.speak());
console.log(rios.standUp("web27"));
console.log(wallace.debugsCode(bigWill, "javascript"));
console.log(bigWill.listSubjects());
console.log(lilWill.PRAssignment("CSS"));
console.log(will.sprintChallenge("React"));
console.log(bigWill.graduate());
