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
  constructor(iName, iAge, iLocal, specialty, favLanguage, catchPhrase) {
    super(iName, iAge, iLocal);
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
    return student.grade;
  }
}
class Students extends Person {
  constructor(sName, sAge, sLocal, previousBackground, className, favSubjects, grade) {
    super(sName, sAge, sLocal);
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
      return `CONGRATULATIONS!!! ${ this.name } you are eligible for graduation!`;
    }
    else {
      return `Sorry, ${ this.name } not quite ready for graduation yet. Keep studying and pull those grades up.`;
    }
  }
}
class ProjectManagers extends Instructors {
  constructor(pName, pAge, pLocal, pSpecialty, pFavLanguage, pCatchPhrase, gradClassName, favInstructor) {
    super(pName, pAge, pLocal, pSpecialty, pFavLanguage, pCatchPhrase);
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
  "CSS",
  68
)
const lilWill = new Students(
  "Lil Will",
  28,
  "France",
  "tv star",
  "web27",
  "HTML",
  85
)
const will = new Students(
  "Will",
  24,
  "Spain",
  "TV star",
  "web27",
  "Javascript",
  97
)
const shakur = new ProjectManagers(
  "Mr. Shakur",
  "24",
  "West Coast",
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
console.log(shakur.location);
console.log(rios.standUp("web27"));
console.log(wallace.debugsCode(bigWill, "javascript"));
console.log(bigWill.listSubjects());
console.log(lilWill.standUp("web27"));
console.log(will.debugsCode(bigWill, "javascript"));
console.log(bigWill.location);
