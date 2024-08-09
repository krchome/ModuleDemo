
// Using global scope-not recommended

function useLandingGears() {
    console.log("Engaging landing gears!");
  }
  
  function activateEnergyShield() {
    console.log("Activating energy shield!");
  }
  
  function createSmokeEffect() {
    console.log("Creating smoke effect!");
  }
  
  function superheroLanding() {
    console.log("Deploying thrusters!");
    useLandingGears();
    activateEnergyShield();
    createSmokeEffect();
  }
  
  superheroLanding(); // Calling the function