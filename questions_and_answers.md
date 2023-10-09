<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: -A: '{}'

<i>With this corrected code, you declare a variable called "greeting" and assign an empty object to it. Then, you log the contents of the "greeting" variable to the console, which will display an empty object {}.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - D: `3`

<i>JavaScript is a weakly typed language, so it will attempt to perform type coercion and convert the string "2" to a number, resulting in the concatenation of the two values instead of numeric addition. The result will be the string "12" rather than the number 3.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - A: `['🍕', '🍫', '🥑', '🍔']`

<i>This code creates an array of four emojis representing food and assigns it to a constant variable named food. Then it creates an object with a property named favoriteFood and assigns it the value of the first element of the food array, which is 🍕. Then it changes the value of the favoriteFood property to 🍝. Finally, it logs the food array to the console, which will show [“🍕”, “🍫”, “🥑”, “🍔”].</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - B: `Hi there, undefined`

<i>This code defines a function named sayHi that takes a parameter called name and returns a string that greets the name. Then it calls the function with no argument and logs the return value to the console, which will be Hi there, undefined. This is because when a function is called with fewer arguments than parameters, the missing arguments are assigned the value of undefined in JavaScript.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - C: 3

<i>In this case, the condition if (num) will evaluate to false when num is 0 because 0 is considered a falsy value in JavaScript. As a result, the count variable will not be incremented for the element 0. However, it will be incremented for all other elements in the array since they are truthy.</i>

</p>
</details>
