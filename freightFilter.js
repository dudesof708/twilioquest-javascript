function scanAndFilter(array, text){
    let filteredArray = array.filter(item => !(item === text))
    console.log(filteredArray)
    return filteredArray;
}

const filtered = scanAndFilter(
    ['dog', 'ray gun', 'cat', 'zippers', 'ray gun'],
    'ray gun'
  );
  console.log('Filtered Items');
  console.log(filtered); // should be ['dog', 'cat', 'zippers']