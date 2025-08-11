//Promise = object that wrap a promise around an
//          asynchronus code
//          "I Promise to Return a Value"
//          Pending -> Resolved , Rejected
//          new Promise((resolve , reject) => {asynchronus code})

// Like Do these Chores in Order

// 1.WALK THE DOG
// 2.CLEAN THE KITCHEN
// 3.TAKE OUT THE TRASH

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;

      if (dogWalked) {
        resolve(`You walked the dog`);
      } else {
        reject(`You didnot walked the dog`);
      }
    }, 1500);
  });
}
function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = true;

      if (kitchenCleaned) {
        resolve(`You cleaned the kitchen`);
      } else {
        reject(`YYou Did not cleaned the kitchen`);
      }
    }, 2500);
  });
}
function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashTook = true;
      if (trashTook) {
        resolve(`You took out the trash`);
      } else {
        reject(`You did not took trash out`);
      }
    }, 500);
  });
}

walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeOutTrash();
  })
  .then((value) => {
    console.log(value);
    console.log(`You Finished All Tasks`);
  })
  .catch((error) => console.error(error));
