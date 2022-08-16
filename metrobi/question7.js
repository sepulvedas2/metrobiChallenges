// Change these to change question input
const carrotTypes = [
  { kg: 5, price: 100 },
  { kg: 7, price: 150 },
  { kg: 3, price: 70 },
];
const capacity = 37;

const getMax = (a, b) => {
  return ( a < b ) ? b : a;
};

const findMaxValueInBag = (capacity, n, weight, value) => {
  let matrix = [];
  for(let i = 0; i < capacity+1; i++) {
      matrix[i]=0;
  }
  for(let i = 0; i < capacity+1; i++) {
    for(let j = 0; j < n; j++) {
      if(weight[j].kg <= i) {
        matrix[i] = getMax(matrix[i], matrix[i-weight[j].kg] + value[j].price);
      }
    }
  }
  return matrix[capacity];
}
function question7() {
  const n = carrotTypes.length;
  console.log('--------------------------------------------------------------');
  console.log("\nThe maximum carrots value you can put in the bag is: ", findMaxValueInBag(capacity,n,carrotTypes,carrotTypes));
  console.log('\n--------------------------------------------------------------');
}

question7();
