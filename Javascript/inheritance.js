// const me = {
//     learning(){                   repeat
//         return `inheritance`
//     }
// };

// const you = {
//     learning(){
//         return `inheritance`         repeat
//     }
// };

// console.log(me.learning());
// console.log(you.learning());

//  A big NO NO...

// Prototypal inheritance
class Subject {
  learning() {
    // no repetation
    return `inheritance`;
  }
}

const me = new Subject();
const you = new Subject();
const all = new Subject();

console.log(me.learning());
console.log(you.learning());
console.log(all.learning());

console.log(me.__proto__ === Subject.prototype); // true
console.log(Subject.prototype);
Subject.prototype.learning = () => {
  return `inheritance class prototype change..`;
};

you.__proto__.learning = () => {
  return `Only you instance is changed`; // here learning is a method
  //  All 3 changed
};
console.log(me.learning());
console.log(you.learning());
console.log(all.learning());

// function Book(){  // Book function as a class

//     this.learning=()=>{   // learning here regarded as property like string, no...  function learning instance copied into child he
//         return `learning from Book function`;
//     }
// }

// const he=new Book();
// console.log(he);

class Art extends Subject {
  writing() {
    return `He is writing answers....`;
  }
}

const they = new Art();

console.log(they.learning());
console.log(they.writing());

const her = Object.create(Art); // her is an object

console.log(her);

const we = {};

console.log(we);

Object.setPrototypeOf(we, Art); // we is an object

console.log(we.prototype.learning());

//  to use
// component class can be used multiple times extends to react in react framework
