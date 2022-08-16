// Change this to change question input
const sampleArray = [1, 2, 3, 4, 5];

const printAsync = (item, ms, secondsAfter) => {
  setTimeout(() => {
    console.log('\n---------\n');
    console.log(new Date().toLocaleTimeString())
    console.log('Array item: ', item);
    console.log(`After ${secondsAfter} seconds from the previous print...`);

  }, ms);
};

const question2 = (array) => {
  console.log('---------------------------------------------------');
  console.log('Writing every item of the array: ', array);

  let multiple = 1;
  let timeFromStart = 0;
  
  for(const item of array) {
    timeFromStart = timeFromStart + multiple;
    printAsync(item, multiple * 1000, multiple);
    multiple = multiple * 2;
  };
};

question2(sampleArray);