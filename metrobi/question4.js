// Change this to change question input
const sampleBrackets = '{[[{}]]}[]{[]a[][][]}';

const opening = ["(", "[", "{"];
const closing = [")", "]", "}"];
const respectiveOpenClose = {
  '{':'}',
  '[':']',
  '(':')',
}

const question4 = () => {
  console.log('----------------------------------');
  console.log('Evaluating bracket: ', sampleBrackets);

  let arrayWithOpeningBracketsFILO = [];
  let currentClosingBracket = '';
  let currentLeft;

  for (let i = 0; i<sampleBrackets.length; i++){
    currentLeft = sampleBrackets[i];
    if (opening.includes(currentLeft)){
      arrayWithOpeningBracketsFILO = [...arrayWithOpeningBracketsFILO, currentLeft];
    }
    if (closing.includes(currentLeft)){
      // check if this is the respective last opened
      currentClosingBracket = currentLeft;
      let lastOpened = arrayWithOpeningBracketsFILO.pop();
      if (respectiveOpenClose[lastOpened] === currentClosingBracket) {
        currentClosingBracket = '';
      } else {
        console.log('\nIt does not close properly...')
        console.log('----------------------------------');
        return;
      }
    }
    if (arrayWithOpeningBracketsFILO.length === 0 && !currentClosingBracket && sampleBrackets.length === i+1){
      console.log('\nIt has opened and closed properly!');
      console.log('----------------------------------');
      return;
    }else if (sampleBrackets.length === i+1) {
      console.log('\nIt does not close properly')
      console.log('----------------------------------');
      return;
    }
  }
}

question4();