// Change this to change question input
const sampleArray = [2, 4, 3, 5, 3, 4, 6, 3, {1: 'a'}, {1: 'a'}];

const findDuplicates = (array) => {
  const length = array.length;
  const printingArray = [];
  
  let freqMap = new Map();

  for (let i = 0; i < length; i++) {
    let val = array[i];
    if (typeof array[i] === 'object') {
      console.log('entrou');
      val = JSON.stringify(array[i]);
    }
    if (freqMap.has(val)) {
      freqMap.set(val, freqMap.get(val) + 1);
    } else {
      freqMap.set(val, 1);
    }
  }

  for (let [key, value] of freqMap.entries()) {
    if (value === 2 ){
      printingArray.push(key);
    }
  }

  return printingArray;
};

const question1 = (arrayWithDuplicates) => {
  console.log('------------------------------------');
  console.log('Evaluating array: ', sampleArray);

  printingArray = findDuplicates(arrayWithDuplicates);

  console.log('\nDuplicates: ', printingArray);
  console.log('------------------------------------');

};

question1(sampleArray);