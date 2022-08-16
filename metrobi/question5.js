// Change these to change question input
// Considering it starts on 1st floor
const highestFloorEggCanBeDropped = 99;

// Considering it starts on position zero in the array
const highestBuildingFloor = 99;

const timeOut = async () => new Promise((resolve) => {
  setTimeout(resolve, 400);
});
const fillArrayFloors = (arrayFloors) => {
  for (let i = 0; i <= highestBuildingFloor+1; i ++) {
    if (i < highestFloorEggCanBeDropped) {
      arrayFloors.push(0);
    } else {
      arrayFloors.push(1);
    }
  };
}
const searchOneByOne = async (begin, end, arrayFloors) => {
  for (let i = begin; i <= end; i++){
    console.log(`Dropping egg from ${i+1} floor`);
    if (arrayFloors[i] === 1) {
      await timeOut();
      console.log('\nYou broke an egg!\n');
      console.log(`Highest floor an egg can be dropped from is ${i}!`);
      console.log('----------------------------------------------------');
      return;
    } else {
      await timeOut();
      console.log('\nEgg is intact!\n');
    }
  }
}

const findHighestFloorEggSurvives = async (half, lastChecked, arrayFloors) => {
  let position = 0;
  if (lastChecked === 0){
    position = half;
  }else{
    position = lastChecked + half;
  };
  if (arrayFloors[position] === 1) {
    console.log(`Dropping egg from ${position+1} floor`);
    // if it breaks we go one by one
      await timeOut();
      console.log('\nYou broke an egg!\n');
    searchOneByOne(lastChecked+1, position, arrayFloors);
    return;
  } else if(half === 1) {
      
    searchOneByOne(lastChecked+1, 100, arrayFloors);
    return;
  } else {
    console.log(`Dropping egg from ${position+1} floor`);
    lastChecked = position;
    half = Math.floor(half / 2);
    await timeOut();
    console.log('\nEgg is intact!\n');
    findHighestFloorEggSurvives(half, lastChecked, arrayFloors);
  }
};

function question5() {
  console.log('------------------------------------');
  let arrayFloors = []; 
  fillArrayFloors(arrayFloors);

  findHighestFloorEggSurvives(Math.floor(highestBuildingFloor/2), 0, arrayFloors);
}

question5();