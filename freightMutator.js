function mutate(array){
    let result = array.map(item => item.toUpperCase());
    console.log(result);
    return result;
}

const mutated = mutate(['dog', 'ray gun', 'cat']);
console.log('Mutated Items');
console.log(mutated); // should be ['DOG', 'CAT', 'ZIPPERS']