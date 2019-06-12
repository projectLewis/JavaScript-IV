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
}
class Students extends Person {
  constructor(sName, sAge, sLocal, previousBackground, className, favSubjects) {
    super(sName, sAge, sLocal);
    this.previousBackground = previousBackground;
    this.className = className;
    this.favSubjects = favSubjects;
  }
  listSubjects() {
    this.favSubjects.forEach((el) => {
      return `${ el }`;
    });
  }
  PRAssignment(subject) {
    return `${ student.name } has submitted a PR for ${ subject }`;
  }
  sprintChallenge(subject) {
    return `${ student.name } has begun sprint challenge on ${ subject }`;
  }
}
class ProjectManagers extends Instructors {
  constructor(pName, pAge, pLocal, pSpecialty, pFavLanguage, pCatchPhrase, gradClassName, favInstructor) {

  }

}