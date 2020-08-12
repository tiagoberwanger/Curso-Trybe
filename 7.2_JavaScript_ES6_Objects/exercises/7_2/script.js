//Content - Part I
const tryber = {
    firstname: 'Tiago',
    lastname: 'Berwanger',
    
}
console.log(tryber);

tryber.age = 30;

console.log(tryber);

//Content - Part II- Object.keys

console.log(Object.keys(tryber));

//Content - Part III- Object.values

console.log(Object.values(tryber));

//Content - Part III- Object.entries

console.log(Object.entries(tryber));

//Content - Part III- Object.assign
const personalData = {
    age: 30,
    undergraduate: 'international relations',
    actualRole: 'student',
}
console.log(Object.assign(tryber, personalData));
console.log(tryber);

//Exercise I - Part II

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };


  console.log('----------------------------------')


  //1
  const addShift = (object, key, value) => {
  object[key] = value;
  };

  addShift(lesson2, 'turno', 'manhã');
  console.log(lesson2)
  
  //2 

  const listKeys = (object) => Object.keys(object);

  console.log(listKeys(lesson1));
  
  //3 

  const sizeObj = (object) => Object.keys(object).length;

  console.log(sizeObj(lesson1));
  
  //4
  const listValues = (object) => Object.values(object);

  console.log(listValues(lesson3));

  //5 
  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3 });
  console.log(allLessons);

  //6
  const returnAllStudents = object => {
    //falta fazer!
    //falta fazer!
    //falta fazer!
  }

  //7 
  const valueKeyPosition = (object, position) => {
    return Object.values(object)[position]

  }   
  console.log(valueKeyPosition(lesson3, 2));

  //8 
  const verifyPair = (object, key, value) => {
    let isEqual = false;
    for (let i = 0; i < Object.keys(object).length; i++) {
        if (Object.keys(object)[i] == key && Object.values(object)[i] == value) {
            isEqual = true;
        }
    }
    return isEqual;
  }
  
  console.log(verifyPair(lesson1, 'turno', 'manhã'))
