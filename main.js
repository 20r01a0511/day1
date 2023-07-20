function numbersThenCharacters(arr) {
  let numbersList = [];
  let charactersList = [];

  for (let sublist of arr) {
    let numbers = [];
    let characters = [];
    for (let element of sublist) {
      if (typeof element === 'number') {
        numbers.push(element);
      } else {
        characters.push(element);
      }
    }
    numbers.sort((a, b) => a - b);
    characters.sort();
    numbersList.push(numbers);
    charactersList.push(characters);
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push([...numbersList[i], ...charactersList[i]]);
  }

  return result;
}

// Examples
console.log(numbersThenCharacters([
  [11, 12, 24, 23, "a", "b"],
  [56, "c", 45], [67, "d"],
  ["f", "e", 78]
]));


console.log(numbersThenCharacters([
  [11, 26, 45.4, "f", "a", "b"],
  [0], [1.5, "d", "X", 35, "s"],
  ["f", "e", 58],
  ["p", "Y", "Z"],
  [98, 72]
]));
