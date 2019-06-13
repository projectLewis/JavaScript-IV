// See README for detailed instructions
class Person {
  constructor(name) {
    this.name = name;
  }
  setAge(age) {
    this.age = age;
    return this;
  }
  setLocation(age) {
    this.location = location;
    return this;
  }
  speak() {
    return `Hello my name is ${ this.name }, I am from ${ this.location }`;
  }
}
class Instructors extends Person {
  constructor(name) {
    super(name);
  }
  setSpecialty(specialty) {
    this.specialty = specialty;
    return this;
  }
  setFavLanguage(favLanguage) {
    this.favLanguage = favLanguage;
    return this;
  }
  setCatchPhrase(catchPhrase) {
    this.catchPhrase = catchPhrase;
    return this;
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
  constructor(name) {
    super(name);
  }
  setPreviousBackground(previousBackground) {
    this.previousBackground = previousBackground;
    return this;
  }
  setClassName(className) {
    this.className = className;
    return this;
  }
  setFavSubject(favSubjects) {
    this.favSubjects = favSubjects;
    return this;
  }
  setGrade(grade) {
    this.grade = grade;
    return this;
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
  constructor(name) {
    super(name, favLanguage, catchPhrase);
    this.gradClassName = gradClassName;
    this.favInstructor = favInstructor;
  }
  setGradClassName(gradClassName) {
    this.gradClassName = gradClassName;
    return this;
  }
  setFavInstructor(favInstructor) {
    this.favInstructor = favInstructor;
    return this;
  }
  standUp(channel) {
    return `${ this.name } announces to ${ channel }, @channel standy times!`;
  }
  debugsCode(student, subject) {
    return `${ this.name } debugs ${ student.name }'s code on ${ subject }`;
  }
}

/// Test Personnel

const bigMike = new Instructors("Big Mike")
  .setAge(30)
  .setLocation("new guinea")
  .setSpecialty("Go Lang")
  .setFavLanguage("Rust")
  .setCatchPhrase("Wait this is a Web Dev course??");
const lilMike = new Instructors("Lil Mike")
  .setAge(15)
  .setLocation("Egypt")
  .setSpecialty("backend")
  .setFavLanguage("C#")
  .setCatchPhrase("Yes, I am a child prodigy...");
const mike = new Instructors("Mike")
  .setAge(42)
  .setLocation("New Mexico")
  .setSpecialty("frontend")
  .setFavLanguage("Javascript")
  .setCatchPhrase("No I'm the real Mike!!");
const bigWill = new Students("Big Will")
  .setAge(22)
  .setLocation("Scotland")
  .setPreviousBackground("tv star")
  .setClassName("web27")
  .setFavSubject(["React", "CSS", "SQL"])
  .setGrade(68);
const lilWill = new Students("Lil Will")
  .setAge(28)
  .setLocation("France")
  .setPreviousBackground("tv star")
  .setClassName("web27")
  .setFavSubject(["Node", "Computer Science", "Javascript"])
  .setGrade(85);
const will = new Students("Will")
  .setAge(24)
  .setLocation("Spain")
  .setPreviousBackground("TV star")
  .setClassName("web27")
  .setFavSubject(["front end", "back end", "databases"])
  .setGrade(97);
const shakur = new ProjectManagers("Mr. Shakur")
  .setAge(24)
  .setLocation("the West Coast")
  .setSpecialty("machine learning")
  .setFavLanguage("Python")
  .setCatchPhrase("PM LIFE!")
  .setGradClassName("Web0")
  .setFavInstructor("Big Mike");
const wallace = new ProjectManagers("Mr. Shakur")
  .setAge(23)
  .setLocation("Brooklyn")
  .setSpecialty("web development")
  .setFavLanguage("Typescript")
  .setCatchPhrase("Where Brooklyn at!?")
  .setGradClassName("Web0")
  .setFavInstructor("Big Mike");
const rios = new ProjectManagers("Mr. Rios")
  .setAge(27)
  .setLocation("The Bronx")
  .setSpecialty("Node")
  .setFavLanguage("Javscript")
  .setCatchPhrase("I'm not a PM, I just grade a lot.")
  .setGradClassName("Web0")
  .setFavInstructor("Big Mike");

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
