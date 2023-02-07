let obj1 = {name: "Person 1", age:5}; 
let obj2 = {age:5, name: "Person 1"};

for (const key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      console.log(`${key}: ${obj1[key]}`);
    }
  }

