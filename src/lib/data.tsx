export const Data = [
  {
    id: 1,
    question: 'What’s the output?',
    image: 'question-1.svg',
    options: [
      '<code>Lydia</code> and <code>undefined</code>',
      '<code>Lydia</code> and <code>ReferenceError</code>',
      '<code>ReferenceError</code> and <code>21</code>',
      '<code>undefined</code> and <code>ReferenceError</code>',
    ],
    answer: 3,
    explanation: `<p>Within the function, we first declare the <code>name</code> variable with the <code>var</code> keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of <code>undefined</code>, until we actually get to the line where we define the variable. We haven’t defined the variable yet on the line where we try to log the <code>name</code> variable, so it still holds the value of <code>undefined</code>.</p>
    <p>Variables with the <code>let</code> keyword (and <code>const</code>) are hoisted, but unlike <code>var</code>, don’t get <i>initialized</i>. They are not accessible before the line we declare (initialize) them. This is called the “temporal dead zone”. When we try to access the variables before they are declared, JavaScript throws a <code>ReferenceError</code>.</p>`,
  },
  {
    id: 2,
    question: 'What’s the output?',
    image: 'question-2.svg',
    options: [
      '<code>0 1 2</code> and <code>0 1 2</code>',
      '<code>0 1 2</code> and <code>3 3 3</code>',
      '<code>3 3 3</code> and <code>0 1 2</code>',
      '<code>3 3 3</code> and <code>3 3 3</code>',
    ],
    answer: 2,
    explanation: `<p>Because of the event queue in JavaScript, the <code>setTimeout</code> callback function is called <em>after</em> the loop has been executed. Since the variable <code>i</code> in the first loop was declared using the <code>var</code> keyword, this value was global. During the loop, we incremented the value of <code>i</code> by <code>1</code> each time, using the unary operator <code>++</code>. By the time the <code>setTimeout</code> callback function was invoked, <code>i</code> was equal to <code>3</code> in the first example.</p>.
    <p>In the second loop, the variable <code>i</code> was declared using the <code>let</code> keyword: variables declared with the <code>let</code> (and <code>const</code>) keyword are block-scoped (a block is anything between <code>{ }</code>). During each iteration, <code>i</code> will have a new value, and each value is scoped inside the loop.</p>`,
  },
  {
    id: 3,
    question: 'What’s the output?',
    image: 'question-3.svg',
    options: [
      'A: <code>20</code> and <code>62.83185307179586</code>',
      'B: <code>20</code> and <code>NaN</code>',
      'C: <code>20</code> and <code>63</code>',
      'D: <code>NaN</code> and <code>63</code>',
    ],
    answer: 1,
    explanation: `<p>Note that the value of <code>diameter</code> is a regular function, whereas the value of <code>perimeter</code> is an arrow function.</p>
    <p>With arrow functions, the <code>this</code> keyword refers to its current surrounding scope, unlike regular functions! This means that when we call <code>perimeter</code>, it doesn’t refer to the shape object, but to its surrounding scope (window for example).</p>
    <p>There is no value <code>radius</code> on that object, which returns <code>NaN</code>.</p>`,
  },
  {
    id: 4,
    question: 'What’s the output?',
    image: 'question-4.svg',
    options: [
      'A: <code>1</code> and <code>false</code>',
      'B: <code>false</code> and <code>NaN</code>',
      'C: <code>false</code> and <code>false</code>',
      'D: <code>NaN</code> and <code>NaN</code>',
    ],
    answer: 0,
    explanation: `<p>The unary plus tries to convert an operand to a number. <code>true</code> is <code>1</code>, and <code>false</code> is <code>0</code>.</p>
    <p>The string <code>'Lydia'</code> is a truthy value. What we’re actually asking, is “is this truthy value falsy?”. This returns <code>false</code>.</p>`,
  },
  {
    id: 5,
    question: 'Which one is true?',
    image: 'question-5.svg',
    options: [
      'A: <code>mouse.bird.size</code>',
      'B: <code>mouse[bird.size]</code> ',
      "C: <code>mouse[bird['size']]</code>",
      'D: All of them are valid',
    ],
    answer: 0,
    explanation: `<p>In JavaScript, all object keys are strings (unless it’s a Symbol). Even though we might not type them as strings, they are always converted into strings under the hood.</p>
    <p>JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket <code>[</code> and keeps going until it finds the closing bracket <code>]</code>. Only then, it will evaluate the statement.</p>
    <p><code>mouse[bird.size]</code>: First it evaluates <code>bird.size</code>, which is <code>"small"</code>. <code>mouse["small"]</code> returns <code>true</code></p>
    <p>However, with dot notation, this doesn’t happen. <code>mouse</code> does not have a key called <code>bird</code>, which means that <code>mouse.bird</code> is <code>undefined</code>. Then, we ask for the <code>size</code> using dot notation: <code>mouse.bird.size</code>. Since <code>mouse.bird</code> is <code>undefined</code>, we’re actually asking <code>undefined.size</code>. This isn’t valid, and will throw an error similar to <code>Cannot read property "size" of undefined</code>.</p>`,
  },
  {
    id: 6,
    question: 'What’s the output?',
    image: 'question-6.svg',
    options: [
      'A: <code>Hello</code>',
      'B: <code>Hey!</code> ',
      'C: <code>undefined</code>',
      'D: <code>ReferenceError</code>',
    ],
    answer: 0,
    explanation: `<p>In JavaScript, all objects interact by <em>reference</em> when setting them equal to each other.</p>
    <p>First, variable <code>c</code> holds a value to an object. Later, we assign <code>d</code> with the same reference that <code>c</code> has to the object.</p>
    <figure><a href="https://i.imgur.com/ko5k0fs.png"><img src="https://i.imgur.com/ko5k0fs.png"></a></figure>
    <p>When you change one object, you change all of them.</p>`,
  },
  {
    id: 7,
    question: 'What’s the output?',
    image: 'question-7.svg',
    options: [
      'A: <code>true</code> <code>false</code> <code>true</code>',
      'B: <code>false</code> <code>false</code> <code>true</code>',
      'C: <code>true</code> <code>false</code> <code>false</code>',
      'D: <code>false</code> <code>true</code> <code>true</code>',
    ],
    answer: 2,
    explanation: `<p><code>new Number()</code> is a built-in function constructor. Although it looks like a number, it’s not really a number: it has a bunch of extra features and is an object.</p>
    <p>When we use the <code>==</code> operator, it only checks whether it has the same <em>value</em>. They both have the value of <code>3</code>, so it returns <code>true</code>.</p>
    <p>However, when we use the <code>===</code> operator, both value <em>and</em> type should be the same. It’s not: <code>new Number()</code> is not a number, it’s an <strong>object</strong>. Both return <code>false.</code></p>`,
  },
  {
    id: 8,
    question: 'What’s the output?',
    image: 'question-1.svg',
    options: [
      '<code>Lydia</code> and <code>undefined</code>',
      '<code>Lydia</code> and <code>ReferenceError</code>',
      '<code>ReferenceError</code> and <code>21</code>',
      '<code>undefined</code> and <code>ReferenceError</code>',
    ],
    answer: 3,
    explanation: `<p>Within the function, we first declare the <code>name</code> variable with the <code>var</code> keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of <code>undefined</code>, until we actually get to the line where we define the variable. We haven’t defined the variable yet on the line where we try to log the <code>name</code> variable, so it still holds the value of <code>undefined</code>.</p>
    <p>Variables with the <code>let</code> keyword (and <code>const</code>) are hoisted, but unlike <code>var</code>, don’t get <i>initialized</i>. They are not accessible before the line we declare (initialize) them. This is called the “temporal dead zone”. When we try to access the variables before they are declared, JavaScript throws a <code>ReferenceError</code>.</p>`,
  },
  {
    id: 9,
    question: 'What’s the output?',
    image: 'question-2.svg',
    options: [
      '<code>0 1 2</code> and <code>0 1 2</code>',
      '<code>0 1 2</code> and <code>3 3 3</code>',
      '<code>3 3 3</code> and <code>0 1 2</code>',
      '<code>3 3 3</code> and <code>3 3 3</code>',
    ],
    answer: 2,
    explanation: `<p>Because of the event queue in JavaScript, the <code>setTimeout</code> callback function is called <em>after</em> the loop has been executed. Since the variable <code>i</code> in the first loop was declared using the <code>var</code> keyword, this value was global. During the loop, we incremented the value of <code>i</code> by <code>1</code> each time, using the unary operator <code>++</code>. By the time the <code>setTimeout</code> callback function was invoked, <code>i</code> was equal to <code>3</code> in the first example.</p>.
    <p>In the second loop, the variable <code>i</code> was declared using the <code>let</code> keyword: variables declared with the <code>let</code> (and <code>const</code>) keyword are block-scoped (a block is anything between <code>{ }</code>). During each iteration, <code>i</code> will have a new value, and each value is scoped inside the loop.</p>`,
  },
  {
    id: 10,
    question: 'What’s the output?',
    image: 'question-3.svg',
    options: [
      'A: <code>20</code> and <code>62.83185307179586</code>',
      'B: <code>20</code> and <code>NaN</code>',
      'C: <code>20</code> and <code>63</code>',
      'D: <code>NaN</code> and <code>63</code>',
    ],
    answer: 1,
    explanation: `<p>Note that the value of <code>diameter</code> is a regular function, whereas the value of <code>perimeter</code> is an arrow function.</p>
    <p>With arrow functions, the <code>this</code> keyword refers to its current surrounding scope, unlike regular functions! This means that when we call <code>perimeter</code>, it doesn’t refer to the shape object, but to its surrounding scope (window for example).</p>
    <p>There is no value <code>radius</code> on that object, which returns <code>NaN</code>.</p>`,
  },
  {
    id: 11,
    question: 'What’s the output?',
    image: 'question-4.svg',
    options: [
      'A: <code>1</code> and <code>false</code>',
      'B: <code>false</code> and <code>NaN</code>',
      'C: <code>false</code> and <code>false</code>',
      'D: <code>NaN</code> and <code>NaN</code>',
    ],
    answer: 0,
    explanation: `<p>The unary plus tries to convert an operand to a number. <code>true</code> is <code>1</code>, and <code>false</code> is <code>0</code>.</p>
    <p>The string <code>'Lydia'</code> is a truthy value. What we’re actually asking, is “is this truthy value falsy?”. This returns <code>false</code>.</p>`,
  },
  {
    id: 12,
    question: 'Which one is true?',
    image: 'question-5.svg',
    options: [
      'A: <code>mouse.bird.size</code>',
      'B: <code>mouse[bird.size]</code> ',
      "C: <code>mouse[bird['size']]</code>",
      'D: All of them are valid',
    ],
    answer: 0,
    explanation: `<p>In JavaScript, all object keys are strings (unless it’s a Symbol). Even though we might not type them as strings, they are always converted into strings under the hood.</p>
    <p>JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket <code>[</code> and keeps going until it finds the closing bracket <code>]</code>. Only then, it will evaluate the statement.</p>
    <p><code>mouse[bird.size]</code>: First it evaluates <code>bird.size</code>, which is <code>"small"</code>. <code>mouse["small"]</code> returns <code>true</code></p>
    <p>However, with dot notation, this doesn’t happen. <code>mouse</code> does not have a key called <code>bird</code>, which means that <code>mouse.bird</code> is <code>undefined</code>. Then, we ask for the <code>size</code> using dot notation: <code>mouse.bird.size</code>. Since <code>mouse.bird</code> is <code>undefined</code>, we’re actually asking <code>undefined.size</code>. This isn’t valid, and will throw an error similar to <code>Cannot read property "size" of undefined</code>.</p>`,
  },
  {
    id: 13,
    question: 'What’s the output?',
    image: 'question-6.svg',
    options: [
      'A: <code>Hello</code>',
      'B: <code>Hey!</code> ',
      'C: <code>undefined</code>',
      'D: <code>ReferenceError</code>',
    ],
    answer: 0,
    explanation: `<p>In JavaScript, all objects interact by <em>reference</em> when setting them equal to each other.</p>
    <p>First, variable <code>c</code> holds a value to an object. Later, we assign <code>d</code> with the same reference that <code>c</code> has to the object.</p>
    <figure><a href="https://i.imgur.com/ko5k0fs.png"><img src="https://i.imgur.com/ko5k0fs.png"></a></figure>
    <p>When you change one object, you change all of them.</p>`,
  },
  {
    id: 14,
    question: 'What’s the output?',
    image: 'question-7.svg',
    options: [
      'A: <code>true</code> <code>false</code> <code>true</code>',
      'B: <code>false</code> <code>false</code> <code>true</code>',
      'C: <code>true</code> <code>false</code> <code>false</code>',
      'D: <code>false</code> <code>true</code> <code>true</code>',
    ],
    answer: 2,
    explanation: `<p><code>new Number()</code> is a built-in function constructor. Although it looks like a number, it’s not really a number: it has a bunch of extra features and is an object.</p>
    <p>When we use the <code>==</code> operator, it only checks whether it has the same <em>value</em>. They both have the value of <code>3</code>, so it returns <code>true</code>.</p>
    <p>However, when we use the <code>===</code> operator, both value <em>and</em> type should be the same. It’s not: <code>new Number()</code> is not a number, it’s an <strong>object</strong>. Both return <code>false.</code></p>`,
  },
  {
    id: 15,
    question: 'What’s the output?',
    image: 'question-1.svg',
    options: [
      '<code>Lydia</code> and <code>undefined</code>',
      '<code>Lydia</code> and <code>ReferenceError</code>',
      '<code>ReferenceError</code> and <code>21</code>',
      '<code>undefined</code> and <code>ReferenceError</code>',
    ],
    answer: 3,
    explanation: `<p>Within the function, we first declare the <code>name</code> variable with the <code>var</code> keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of <code>undefined</code>, until we actually get to the line where we define the variable. We haven’t defined the variable yet on the line where we try to log the <code>name</code> variable, so it still holds the value of <code>undefined</code>.</p>
    <p>Variables with the <code>let</code> keyword (and <code>const</code>) are hoisted, but unlike <code>var</code>, don’t get <i>initialized</i>. They are not accessible before the line we declare (initialize) them. This is called the “temporal dead zone”. When we try to access the variables before they are declared, JavaScript throws a <code>ReferenceError</code>.</p>`,
  },
  {
    id: 16,
    question: 'What’s the output?',
    image: 'question-2.svg',
    options: [
      '<code>0 1 2</code> and <code>0 1 2</code>',
      '<code>0 1 2</code> and <code>3 3 3</code>',
      '<code>3 3 3</code> and <code>0 1 2</code>',
      '<code>3 3 3</code> and <code>3 3 3</code>',
    ],
    answer: 2,
    explanation: `<p>Because of the event queue in JavaScript, the <code>setTimeout</code> callback function is called <em>after</em> the loop has been executed. Since the variable <code>i</code> in the first loop was declared using the <code>var</code> keyword, this value was global. During the loop, we incremented the value of <code>i</code> by <code>1</code> each time, using the unary operator <code>++</code>. By the time the <code>setTimeout</code> callback function was invoked, <code>i</code> was equal to <code>3</code> in the first example.</p>.
    <p>In the second loop, the variable <code>i</code> was declared using the <code>let</code> keyword: variables declared with the <code>let</code> (and <code>const</code>) keyword are block-scoped (a block is anything between <code>{ }</code>). During each iteration, <code>i</code> will have a new value, and each value is scoped inside the loop.</p>`,
  },
  {
    id: 17,
    question: 'What’s the output?',
    image: 'question-3.svg',
    options: [
      'A: <code>20</code> and <code>62.83185307179586</code>',
      'B: <code>20</code> and <code>NaN</code>',
      'C: <code>20</code> and <code>63</code>',
      'D: <code>NaN</code> and <code>63</code>',
    ],
    answer: 1,
    explanation: `<p>Note that the value of <code>diameter</code> is a regular function, whereas the value of <code>perimeter</code> is an arrow function.</p>
    <p>With arrow functions, the <code>this</code> keyword refers to its current surrounding scope, unlike regular functions! This means that when we call <code>perimeter</code>, it doesn’t refer to the shape object, but to its surrounding scope (window for example).</p>
    <p>There is no value <code>radius</code> on that object, which returns <code>NaN</code>.</p>`,
  },
  {
    id: 18,
    question: 'What’s the output?',
    image: 'question-4.svg',
    options: [
      'A: <code>1</code> and <code>false</code>',
      'B: <code>false</code> and <code>NaN</code>',
      'C: <code>false</code> and <code>false</code>',
      'D: <code>NaN</code> and <code>NaN</code>',
    ],
    answer: 0,
    explanation: `<p>The unary plus tries to convert an operand to a number. <code>true</code> is <code>1</code>, and <code>false</code> is <code>0</code>.</p>
    <p>The string <code>'Lydia'</code> is a truthy value. What we’re actually asking, is “is this truthy value falsy?”. This returns <code>false</code>.</p>`,
  },
  {
    id: 19,
    question: 'Which one is true?',
    image: 'question-5.svg',
    options: [
      'A: <code>mouse.bird.size</code>',
      'B: <code>mouse[bird.size]</code> ',
      "C: <code>mouse[bird['size']]</code>",
      'D: All of them are valid',
    ],
    answer: 0,
    explanation: `<p>In JavaScript, all object keys are strings (unless it’s a Symbol). Even though we might not type them as strings, they are always converted into strings under the hood.</p>
    <p>JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket <code>[</code> and keeps going until it finds the closing bracket <code>]</code>. Only then, it will evaluate the statement.</p>
    <p><code>mouse[bird.size]</code>: First it evaluates <code>bird.size</code>, which is <code>"small"</code>. <code>mouse["small"]</code> returns <code>true</code></p>
    <p>However, with dot notation, this doesn’t happen. <code>mouse</code> does not have a key called <code>bird</code>, which means that <code>mouse.bird</code> is <code>undefined</code>. Then, we ask for the <code>size</code> using dot notation: <code>mouse.bird.size</code>. Since <code>mouse.bird</code> is <code>undefined</code>, we’re actually asking <code>undefined.size</code>. This isn’t valid, and will throw an error similar to <code>Cannot read property "size" of undefined</code>.</p>`,
  },
  {
    id: 20,
    question: 'What’s the output?',
    image: 'question-6.svg',
    options: [
      'A: <code>Hello</code>',
      'B: <code>Hey!</code> ',
      'C: <code>undefined</code>',
      'D: <code>ReferenceError</code>',
    ],
    answer: 0,
    explanation: `<p>In JavaScript, all objects interact by <em>reference</em> when setting them equal to each other.</p>
    <p>First, variable <code>c</code> holds a value to an object. Later, we assign <code>d</code> with the same reference that <code>c</code> has to the object.</p>
    <figure><a href="https://i.imgur.com/ko5k0fs.png"><img src="https://i.imgur.com/ko5k0fs.png"></a></figure>
    <p>When you change one object, you change all of them.</p>`,
  },
  {
    id: 21,
    question: 'What’s the output?',
    image: 'question-7.svg',
    options: [
      'A: <code>true</code> <code>false</code> <code>true</code>',
      'B: <code>false</code> <code>false</code> <code>true</code>',
      'C: <code>true</code> <code>false</code> <code>false</code>',
      'D: <code>false</code> <code>true</code> <code>true</code>',
    ],
    answer: 2,
    explanation: `<p><code>new Number()</code> is a built-in function constructor. Although it looks like a number, it’s not really a number: it has a bunch of extra features and is an object.</p>
    <p>When we use the <code>==</code> operator, it only checks whether it has the same <em>value</em>. They both have the value of <code>3</code>, so it returns <code>true</code>.</p>
    <p>However, when we use the <code>===</code> operator, both value <em>and</em> type should be the same. It’s not: <code>new Number()</code> is not a number, it’s an <strong>object</strong>. Both return <code>false.</code></p>`,
  },
  {
    id: 22,
    question: 'What’s the output?',
    image: 'question-1.svg',
    options: [
      '<code>Lydia</code> and <code>undefined</code>',
      '<code>Lydia</code> and <code>ReferenceError</code>',
      '<code>ReferenceError</code> and <code>21</code>',
      '<code>undefined</code> and <code>ReferenceError</code>',
    ],
    answer: 3,
    explanation: `<p>Within the function, we first declare the <code>name</code> variable with the <code>var</code> keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of <code>undefined</code>, until we actually get to the line where we define the variable. We haven’t defined the variable yet on the line where we try to log the <code>name</code> variable, so it still holds the value of <code>undefined</code>.</p>
    <p>Variables with the <code>let</code> keyword (and <code>const</code>) are hoisted, but unlike <code>var</code>, don’t get <i>initialized</i>. They are not accessible before the line we declare (initialize) them. This is called the “temporal dead zone”. When we try to access the variables before they are declared, JavaScript throws a <code>ReferenceError</code>.</p>`,
  },
  {
    id: 23,
    question: 'What’s the output?',
    image: 'question-2.svg',
    options: [
      '<code>0 1 2</code> and <code>0 1 2</code>',
      '<code>0 1 2</code> and <code>3 3 3</code>',
      '<code>3 3 3</code> and <code>0 1 2</code>',
      '<code>3 3 3</code> and <code>3 3 3</code>',
    ],
    answer: 2,
    explanation: `<p>Because of the event queue in JavaScript, the <code>setTimeout</code> callback function is called <em>after</em> the loop has been executed. Since the variable <code>i</code> in the first loop was declared using the <code>var</code> keyword, this value was global. During the loop, we incremented the value of <code>i</code> by <code>1</code> each time, using the unary operator <code>++</code>. By the time the <code>setTimeout</code> callback function was invoked, <code>i</code> was equal to <code>3</code> in the first example.</p>.
    <p>In the second loop, the variable <code>i</code> was declared using the <code>let</code> keyword: variables declared with the <code>let</code> (and <code>const</code>) keyword are block-scoped (a block is anything between <code>{ }</code>). During each iteration, <code>i</code> will have a new value, and each value is scoped inside the loop.</p>`,
  },
  {
    id: 24,
    question: 'What’s the output?',
    image: 'question-3.svg',
    options: [
      'A: <code>20</code> and <code>62.83185307179586</code>',
      'B: <code>20</code> and <code>NaN</code>',
      'C: <code>20</code> and <code>63</code>',
      'D: <code>NaN</code> and <code>63</code>',
    ],
    answer: 1,
    explanation: `<p>Note that the value of <code>diameter</code> is a regular function, whereas the value of <code>perimeter</code> is an arrow function.</p>
    <p>With arrow functions, the <code>this</code> keyword refers to its current surrounding scope, unlike regular functions! This means that when we call <code>perimeter</code>, it doesn’t refer to the shape object, but to its surrounding scope (window for example).</p>
    <p>There is no value <code>radius</code> on that object, which returns <code>NaN</code>.</p>`,
  },
  {
    id: 25,
    question: 'What’s the output?',
    image: 'question-4.svg',
    options: [
      'A: <code>1</code> and <code>false</code>',
      'B: <code>false</code> and <code>NaN</code>',
      'C: <code>false</code> and <code>false</code>',
      'D: <code>NaN</code> and <code>NaN</code>',
    ],
    answer: 0,
    explanation: `<p>The unary plus tries to convert an operand to a number. <code>true</code> is <code>1</code>, and <code>false</code> is <code>0</code>.</p>
    <p>The string <code>'Lydia'</code> is a truthy value. What we’re actually asking, is “is this truthy value falsy?”. This returns <code>false</code>.</p>`,
  },
];
