function reverse(str) {
  if (!str || str.length < 2 || typeof str != "string") throw new Error("invalid input") 
  const reversedString = []

  for (let i = str.length - 1; i >= 0; i--) {
    const char = str[i]
    reversedString.push(char)
  }
  return reversedString.join("")
}

function reverse2(str) {
  return str.split("").reverse().join("")
}

const reverse3 = str => [...str].reverse().join("")

const str = "Hi, My name is Pedro!"

console.log(reverse(str))
console.log(reverse2(str))
console.log(reverse3(str))
