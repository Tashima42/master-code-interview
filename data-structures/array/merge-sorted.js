function mergeSortedArrays(first, second) {
  return [...first, ...second].sort((a, b) => a - b);
}

function mergeSortedArrays2(first, second) {
  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      if (first[i] > second[j]) {
        first.splice(i, 0, second[j]);
        second.splice(j, 1);
      }
    }
  }
  return first;
}

function mergeSortedArrays3(first, second) {
  const mergedArray = [];
  let fistItem = first[0];
  let secondItem = second[0];
  let i = 0;
  let j = 0;

  if (first.length == 0) return second;
  if (second.length == 0) return first;

  while (firstItem || secondItem) {
    if (!secondItem || firstItem < secondItem) {
      mergedArray.push(firstItem);
      firstItem = first[i];
      i++;
    } else {
      mergedArray.push(secondItem);
      secondItem = second[j];
      j++;
    }
  }

  return mergedArray;
}

const first = [0, 3, 4, 31];
const second = [4, 6, 30];

console.log(mergeSortedArrays(first, second));
console.log(mergeSortedArrays2(first, second));
console.log(mergeSortedArrays3(first, second));
