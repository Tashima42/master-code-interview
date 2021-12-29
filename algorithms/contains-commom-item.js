function containsCommonItem(arr1, arr2) {
	const map = {};
	for (let i = 0; i < arr1.length; i++) {
		if (!map[arr1[i]]) map[arr1[i]] = true;
	}
	for (let j = 0; j < arr2.length; j++) {
		if (map[arr2[j]]) return true;
	}
	return false;
}

const arr1 = ["a", "b", "c", "x"];
const arr2 = ["z", "y", "x"];

console.log(containsCommonItem(arr1, arr2));
