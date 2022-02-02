// wakeDog
// leashDog
// walkToPark
// throwFrisbee
// walkHome
// unleashDog

function wakeDog(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`
  }

  function leashDog(dogName, dogBreed) {
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return `Leash ${dogName} the ${dogBreed}`
  }
  
  function walkToPark(dogName, dogBreed) {
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    return `Walk to the park with ${dogName} the ${dogBreed}`
  }

  function throwFrisbee(dogName, dogBreed) {
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return `Throw the frisbee for ${dogName} the ${dogBreed}`
  }

  function walkHome(dogName, dogBreed) {
    console.log(`Walk home ${dogName} the ${dogBreed}`);
    return `Walk home with ${dogName} the ${dogBreed}`
  }

  function unleashDog(dogName, dogBreed) {
    console.log(`Unleash ${dogName} the ${dogBreed}`);
    return `Unleash ${dogName} the ${dogBreed}`
  }


 const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];


//   Iterate over the routine array to get access to each function in the array
// Call each function in the array, passing the dogName and dogBreed received by exerciseDog() to each function when calling it
// Store the return value of each function's call in a new array
// Return that new array from exerciseDog
  function exerciseDog(dogName, dogBreed){
      const exercises = []
      for (let i = 0; i < routine.length; i++) {
          const x = routine[i] //finding which iteration of the routine its one
          const exercise = x(dogName, dogBreed)
          exercises.push(exercise)
      }
      return exercises
      console.log(exercises)
  }