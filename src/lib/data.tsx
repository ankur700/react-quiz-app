export const Data = [
  {
    id: 1,
    question: 'What’s the output?',
    image: 'question-1.svg',
    options: [
      'A: <code>Lydia</code> and <code>undefined</code>',
      'B: <code>Lydia</code> and <code>ReferenceError</code>',
      'C: <code>ReferenceError</code> and <code>21</code>',
      'D: <code>undefined</code> and <code>ReferenceError</code>',
    ],
    answer: 4,
    explanation: `<p>Within the function, we first declare the <code>name</code> variable with the <code>var</code> keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of <code>undefined</code>, until we actually get to the line where we define the variable. We haven’t defined the variable yet on the line where we try to log the <code>name</code> variable, so it still holds the value of <code>undefined</code>.</p>
    <p>Variables with the <code>let</code> keyword (and <code>const</code>) are hoisted, but unlike <code>var</code>, don’t get <i>initialized</i>. They are not accessible before the line we declare (initialize) them. This is called the “temporal dead zone”. When we try to access the variables before they are declared, JavaScript throws a <code>ReferenceError</code>.</p>`,
  },
  {
    id: 2,
    question: 'What’s the output?',
    image: 'question-8.svg',
    options: [
      'A: <code>0 1 2</code> and <code>0 1 2</code>',
      'B: <code>0 1 2</code> and <code>3 3 3</code>',
      'C: <code>3 3 3</code> and <code>0 1 2</code>',
      'D: <code>3 3 3</code> and <code>3 3 3</code>',
    ],
    answer: 3,
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
    answer: 2,
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
    answer: 1,
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
    answer: 1,
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
    answer: 1,
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
    answer: 3,
    explanation: `<p><code>new Number()</code> is a built-in function constructor. Although it looks like a number, it’s not really a number: it has a bunch of extra features and is an object.</p>
    <p>When we use the <code>==</code> operator, it only checks whether it has the same <em>value</em>. They both have the value of <code>3</code>, so it returns <code>true</code>.</p>
    <p>However, when we use the <code>===</code> operator, both value <em>and</em> type should be the same. It’s not: <code>new Number()</code> is not a number, it’s an <strong>object</strong>. Both return <code>false.</code></p>`,
  },
  {
    id: 8,
    question: 'What’s the output?',
    image: 'question-8.svg',
    options: [
      'A: <code>orange</code>',
      'B: <code>Purple</code>',
      'C: <code>green</code>',
      'D: <code>TypeError</code>',
    ],
    answer: 4,
    explanation: `<p >The <code>colorChange</code> function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children or called upon class instances. Since <code>freddie</code> is an instance of class Chameleon, the function cannot be called upon it. A <code>TypeError</code> is thrown.</p>`,
  },
  {
    id: 9,
    question: 'What’s the output?',
    image: 'question-9.svg',
    options: [
      'A: <code>{}</code>',
      'B: <code>ReferenceError: greetign is not defined</code>',
      'C: <code>TypeError</code>',
      'D: <code>undefined</code>',
    ],
    answer: 1,
    explanation: `<p>It logs the object, because we just created an empty object on the global object! When we mistyped <code>greeting</code> as <code>greetign</code>, the JS interpreter actually saw this as <code>global.greetign = {}</code> (or <code>window.greetign = {}</code> in a browser).</p>.
    <p>In order to avoid this, we can use <code>"use strict"</code>. This makes sure that you have declared a variable before setting it equal to anything.</p>`,
  },
  {
    id: 10,
    question: 'What happens when we do this?',
    image: 'question-10.svg',
    options: [
      'A: Nothing, this is totally fine!',
      'B: <code>SyntaxError</code>. You cannot add properties to a function this way.',
      'C: <code>"Woof"</code> gets logged.',
      'D: <code>ReferenceError</code>',
    ],
    answer: 1,
    explanation: `<p>This is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects)</p>
   <p>A function is a special type of object. The code you write yourself isn’t the actual function. The function is an object with properties. This property is invocable.</p>`,
  },
  {
    id: 11,
    question: 'What’s the output?',
    image: 'question-11.svg',
    options: [
      'A: <code>TypeError</code>',
      'B: <code>SyntaxError</code>',
      'C: <code>Lydia Hallie</code>',
      'D: <code>undefined</code> and <code>undefined</code>',
    ],
    answer: 1,
    explanation: `<p>In JavaScript, functions are objects, and therefore, the method <code>getFullName</code> gets added to the constructor function object itself. For that reason, we can call <code>Person.getFullName()</code>, but <code>member.getFullName</code> throws a <code>TypeError</code>.</p>
   <p>If you want a method to be available to all object instances, you have to add it to the prototype property:</p>
   <pre><code>Person.prototype.getFullName = function () {  return "$"{this.firstName} "$"{this.lastName};};</code></pre>`,
  },
  {
    id: 12,
    question: 'What’s the output?',
    image: 'question-12.svg',
    options: [
      'A: <code>Person {firstName: "Lydia", lastName: "Hallie"}</code> and <code>undefined</code>',
      'B: <code>Person {firstName: "Lydia", lastName: "Hallie"}</code> and <code>Person {firstName: "Sarah", lastName: "Smith"}</code> ',
      'C: <code>Person {firstName: "Lydia", lastName: "Hallie"}</code> and <code>{}</code>',
      'D: <code>Person {firstName: "Lydia", lastName: "Hallie"}</code> and <code>ReferenceError</code>',
    ],
    answer: 1,
    explanation: `<p>For <code>sarah</code>, we didn’t use the <code>new</code> keyword. When using <code>new</code>, <code>this</code> refers to the new empty object we create. However, if you don’t add <code>new</code>, <code>this</code> refers to the <strong>global object</strong>!</p>
    <p >We said that <code>this.firstName</code> equals <code>"Sarah"</code> and <code>this.lastName</code> equals <code>"Smith"</code>. What we actually did, is defining <code>global.firstName = 'Sarah'</code> and <code>global.lastName = 'Smith'</code>. <code>sarah</code> itself is left <code>undefined</code>, since we don’t return a value from the <code>Person</code> function.</p>`,
  },
  {
    id: 13,
    question: 'What are the three phases of event propagation?',
    image: '',
    options: [
      'A: Target > Capturing > Bubbling',
      'B: Bubbling > Target > Capturing',
      'C: Target > Bubbling > Capturing',
      'D: Capturing > Target > Bubbling',
    ],
    answer: 4,
    explanation: `<p>During the <strong>capturing</strong> phase, the event goes through the ancestor elements down to the target element. It then reaches the <strong>target</strong> element, and <strong>bubbling</strong> begins.</p>
    <figure><a href="https://i.imgur.com/N18oRgd.png"><img src="https://i.imgur.com/N18oRgd.png"></a><p>During the <strong>capturing</strong> phase, the event goes through the ancestor elements down to the target element. It then reaches the <strong>target</strong> element, and <strong>bubbling</strong> begins.</p></figure>`,
  },
  {
    id: 14,
    question: ' All object have prototypes.',
    image: '',
    options: ['A: true', 'B: false'],
    answer: 2,
    explanation: `<p>All objects have prototypes, except for the <strong>base object</strong>. The base object is the object created by the user, or an object that is created using the <code>new</code> keyword. The base object has access to some methods and properties, such as <code>.toString</code>. This is the reason why you can use built-in JavaScript methods! All of such methods are available on the prototype. Although JavaScript can’t find it directly on your object, it goes down the prototype chain and finds it there, which makes it accessible for you.</p>`,
  },
  {
    id: 15,
    question: 'What’s the output?',
    image: 'question-15.svg',
    options: [
      'A: <code>NaN</code>',
      'B: <code>TypeError</code>',
      'C: <code>"2"</code>',
      'D: <code>3</code>',
    ],
    answer: 3,
    explanation: `<p>JavaScript is a <strong>dynamically typed language</strong>: we don’t specify what types certain variables are. Values can automatically be converted into another type without you knowing, which is called <em>implicit type coercion</em>. <strong>Coercion</strong> is converting from one type into another.</p>
    <p>In this example, JavaScript converts the number <code>1</code> into a string, in order for the function to make sense and return a value. During the addition of a numeric type (<code>1</code>) and a string type (<code>'2'</code>), the number is treated as a string. We can concatenate strings like <code>"Hello" + "World"</code>, so what’s happening here is <code>"1" + "2"</code> which returns <code>"12"</code>.</p>`,
  },
  {
    id: 16,
    question: 'What’s the output?',
    image: 'question-16.svg',
    options: [
      'A: <code>1</code> <code>2</code> <code>1</code>',
      'B: <code>1</code> <code>2</code> <code>2</code>',
      'C: <code>0</code> <code>2</code> <code>2</code>',
      'D: <code>0</code> <code>1</code> <code>2</code>',
    ],
    answer: 3,
    explanation: `<p>The <strong>postfix</strong> unary operator <code>++</code>:</p>.
    <ol><li>Returns the value (this returns <code>0</code>)</li><li>Increments the value (number is now <code>1</code>)</li></ol>
    <p id="680c3e3e-8584-436c-86f1-dfa43e249586" class="">The <strong>prefix</strong> unary operator <code>++</code>:</p>
    <ol><li>Increments the value (number is now <code>2</code>)</li><li>Returns the value (this returns <code>2</code>)</li></ol>
<p>This returns <code>0 2 2</code>.</p>`,
  },
  {
    id: 17,
    question: 'What’s the output?',
    image: 'question-17.svg',
    options: [
      'A: <code>"Lydia"</code> <code>21</code> <code>["", " is ", " years old"]</code>',
      'B: <code>["", " is ", " years old"]</code> <code>"Lydia"</code><code>21</code> ',
      'C: <code>"Lydia"</code> <code>["", " is ", " years old"]</code> <code>21</code>',
      'D:  <code>"Lydia"</code> <code>["", "", "21 years old"]</code> <code>21</code>',
    ],
    answer: 2,
    explanation: `<p id="51694131-80d2-4396-88c3-40ec4fa266c0" class="">If you use tagged template literals, the value of the first argument is always an array of the string values. The remaining arguments get the values of the passed expressions!</p>`,
  },
  {
    id: 18,
    question: 'What’s the output?',
    image: 'question-18.svg',
    options: [
      'A: <code>You are an adult!</code>',
      'B: <code>You are still an adult.</code>',
      'C: <code>Hmm.. You don"t have an age I guess</code>',
      'D: <code>You are an adult!</code> and <code>You are still an adult.</code>',
    ],
    answer: 3,
    explanation: `<p>When testing equality, primitives are compared by their <em>value</em>, while objects are compared by their <em>reference</em>. JavaScript checks if the objects have a reference to the same location in memory.</p>
    <p>The two objects that we are comparing don’t have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality.</p>
    <p>This is why both <code>{ age: 18 } === { age: 18 }</code> and <code>{ age: 18 } == { age: 18 }</code> return <code>false</code>.</p>`,
  },
  {
    id: 19,
    question: 'What’s the output?',
    image: 'question-19.svg',
    options: [
      'A: <code>"number"</code>',
      'B: <code>"array"</code> ',
      'C: <code>"object"</code>',
      'D: <code>"NaN"</code>',
    ],
    answer: 3,
    explanation: `<p id="7fb156bd-e4ff-403a-8b2d-f0b072424a65" class="">The rest parameter (<code>...args</code>) lets us “collect” all remaining arguments into an array. An array is an object, so <code>typeof args</code> returns <code>"object"</code></p>`,
  },
  {
    id: 20,
    question: 'What’s the output?',
    image: 'question-20.svg',
    options: [
      'A: <code>21</code>',
      'B: <code>undefined</code> ',
      'C: <code>ReferenceError</code>',
      'D: <code>TypeError</code>',
    ],
    answer: 3,
    explanation: `<p id="d4a57dab-ddd0-4107-9861-a9d7579bbdd9" class="">With <code>"use strict"</code>, you can make sure that you don’t accidentally declare global variables. We never declared the variable <code>age</code>, and since we use <code>"use strict"</code>, it will throw a reference error. If we didn’t use <code>"use strict"</code>, it would have worked, since the property <code>age</code> would have gotten added to the global object.</p>`,
  },
  {
    id: 21,
    question: 'What’s the value of sum?',
    image: 'question-21.svg',
    options: [
      'A: <code>105</code>',
      'B: <code>"105"</code>',
      'C: <code>TypeError</code>',
      'D: <code>"10*10+5"</code>',
    ],
    answer: 1,
    explanation: `<p id="f535f639-2639-4928-ae31-3b24810f49de" class=""><code>eval</code> evaluates codes that’s passed as a string. If it’s an expression, like in this case, it evaluates the expression. The expression is <code>10 * 10 + 5</code>. This returns the number <code>105</code>.</p>`,
  },
  {
    id: 22,
    question: 'How long is cool_secret accessible?',
    image: 'question-22.svg',
    options: [
      'A: Forever, the data doesn’t get lost.',
      'B: When the user closes the tab.',
      'C: When the user closes the entire browser, not only the tab.',
      'D: When the user shuts off their computer.',
    ],
    answer: 2,
    explanation: `<p>The data stored in <code>sessionStorage</code> is removed after closing the <em>tab</em>.</p>
    <p>If you used <code>localStorage</code>, the data would’ve been there forever, unless for example <code>localStorage.clear()</code> is invoked.</p>`,
  },
  {
    id: 23,
    question: 'What’s the output?',
    image: 'question-23.svg',
    options: [
      'A: <code>8</code>',
      'B: <code>10</code>',
      'C: <code>SyntaxError</code>',
      'D: <code>ReferenceError</code>',
    ],
    answer: 2,
    explanation: `<p>With the <code>var</code> keyword, you can declare multiple variables with the same name. The variable will then hold the latest value.</p>
    <p>You cannot do this with <code>let</code> or <code>const</code> since they’re block-scoped.</p>`,
  },
  {
    id: 24,
    question: 'What’s the output?',
    image: 'question-24.svg',
    options: [
      'A: <code>false</code> <code>true</code> <code>false</code> <code>true</code>',
      'B: <code>false</code> <code>true</code> <code>true</code> <code>true</code>',
      'C: <code>true</code><code>true</code> <code>false</code> <code>false</code>',
      'D: <code>true</code><code>true</code> <code>true</code><code>true</code>',
    ],
    answer: 3,
    explanation: `<p>All object keys (excluding Symbols) are strings under the hood, even if you don’t type it yourself as a string. This is why <code>obj.hasOwnProperty('1')</code> also returns true.</p>
    <p>It doesn’t work that way for a set. There is no <code>'1'</code> in our set: <code>set.has('1')</code> returns <code>false</code>. It has the numeric type <code>1</code>, <code>set.has(1)</code> returns <code>true</code>.</p>`,
  },
  {
    id: 25,
    question: 'What’s the output?',
    image: 'question-25.svg',
    options: [
      'A: <code>{ a: "one", b: "two" }</code>',
      'B: <code>{ b: "two", a: "three" }</code>',
      'C: <code>{ a: "three", b: "two" }</code>',
      'D: <code>SyntaxError</code>',
    ],
    answer: 3,
    explanation: `<p>If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value.</p>`,
  },
  {
    id: 26,
    question:
      'The JavaScript global execution context creates two things for you: the global object, and the “this” keyword.',
    image: '',
    options: ['A: true', 'B: false', 'C: it depends'],
    answer: 1,
    explanation: `<p>The base execution context is the global execution context: it’s what’s accessible everywhere in your code.</p>`,
  },
  {
    id: 27,
    question: 'What’s the output?',
    image: 'question-27.svg',
    options: [
      'A: <code>1</code> <code>2</code>',
      'B: <code>1</code> <code>2</code> <code>3</code>',
      'C: <code>1</code> <code>2</code> <code>4</code>',
      'D: <code>1</code> <code>3</code> <code>4</code>',
    ],
    answer: 3,
    explanation: `<p>The <code>continue</code> statement skips an iteration if a certain condition returns <code>true</code>.</p>`,
  },
  {
    id: 28,
    question: 'What’s the output?',
    image: 'question-28.svg',
    options: [
      'A: <code>"Just give Lydia pizza already!"</code>',
      'B: <code>TypeError: not a function</code>',
      'C: <code>SyntaxError</code>',
      'D: <code>undefined</code>',
    ],
    answer: 1,
    explanation: `<p><code>String</code> is a built-in constructor, which we can add properties to. I just added a method to its prototype. Primitive strings are automatically converted into a string object, generated by the string prototype function. So, all strings (string objects) have access to that method!</p>`,
  },
  {
    id: 29,
    question: 'What’s the output?',
    image: 'question-29.svg',
    options: [
      'A: <code>123</code>',
      'B: <code>456</code>',
      'C: <code>undefined</code>',
      'D: <code>ReferenceError</code>',
    ],
    answer: 2,
    explanation: `<p>Object keys are automatically converted into strings. We are trying to set an object as a key to object <code>a</code>, with the value of <code>123</code>.</p>
    <p>However, when we stringify an object, it becomes <code>"[object Object]"</code>. So what we are saying here, is that <code>a["[object Object]"] = 123</code>. Then, we can try to do the same again. <code>c</code> is another object that we are implicitly stringifying. So then, <code>a["[object Object]"] = 456</code>.</p>
    <p>Then, we log <code>a[b]</code>, which is actually <code>a["[object Object]"]</code>. We just set that to <code>456</code>, so it returns <code>456</code>.</p>`,
  },
  {
    id: 30,
    question: 'What’s the output?',
    image: 'question-30.svg',
    options: [
      'A: <code>First</code><code>Second</code><code>Third</code>',
      'B: <code>First</code><code>Third</code><code>Second</code>',
      'C: <code>Second</code><code>First</code><code>Third</code>',
      'D: <code>Second</code><code>Third</code><code>First</code>',
    ],
    answer: 2,
    explanation: `<p>We have a <code>setTimeout</code> function and invoked it first. Yet, it was logged last.</p>
    <p>This is because in browsers, we don’t just have the runtime engine, we also have something called a <code>WebAPI</code>. The <code>WebAPI</code> gives us the <code>setTimeout</code> function to start with, and for example the DOM.</p>
    <p>After the <em>callback</em> is pushed to the WebAPI, the <code>setTimeout</code> function itself (but not the callback!) is popped off the stack.</p>
    <p id="5ff6753e-739e-4f13-8b05-5348f6d4e164" class="">Now, <code>foo</code> gets invoked, and <code>"First"</code> is being logged.</p>
    <p><code>foo</code> is popped off the stack, and <code>baz</code> gets invoked. <code>"Third"</code> gets logged.</p>
    <p>The WebAPI can’t just add stuff to the stack whenever it’s ready. Instead, it pushes the callback function to something called the <em>queue</em>.</p>
    <p>This is where an event loop starts to work. An <strong>event loop</strong> looks at the stack and task queue. If the stack is empty, it takes the first thing on the queue and pushes it onto the stack.</p>
    <p><code>bar</code> gets invoked, <code>"Second"</code> gets logged, and it’s popped off the stack.</p>`,
  },
  {
    id: 31,
    question: 'What is the event.target when clicking the button?',
    image: 'question-31.svg',
    options: [
      'A: Outer <code>div</code>',
      'B: Inner <code>div</code>',
      'C: <code>button</code>',
      'D: An array of all nested elements.',
    ],
    answer: 3,
    explanation: `<p>The deepest nested element that caused the event is the target of the event. You can stop bubbling by <code>event.stopPropagation</code></p>`,
  },
  {
    id: 32,
    question: 'When you click the paragraph, what’s the logged output?',
    image: 'question-32.svg',
    options: [
      'A: <code>p</code> <code>div</code>',
      'B: <code>div</code> <code>p</code>',
      'C: <code>p</code>',
      'D: <code>div</code>',
    ],
    answer: 1,
    explanation: `<p>If we click <code>p</code>, we see two logs: <code>p</code> and <code>div</code>. During event propagation, there are 3 phases: capturing, target, and bubbling. By default, event handlers are executed in the bubbling phase (unless you set <code>useCapture</code> to <code>true</code>). It goes from the deepest nested element outwards.</p>`,
  },
  {
    id: 33,
    question: 'What’s the output?',
    image: 'question-33.svg',
    options: [
      'A: <code>undefined is 21</code> <code>Lydia is 21</code>',
      'B: <code>function</code> <code>function</code>',
      'C: <code>Lydia is 21</code><code>Lydia is 21</code>',
      'D: <code>Lydia is 21</code><code>function</code>',
    ],
    answer: 4,
    explanation: `<p>With both, we can pass the object to which we want the <code>this</code> keyword to refer to. However, <code>.call</code> is also <em>executed immediately</em>!</p>
    <p><code>.bind.</code> returns a <em>copy</em> of the function, but with a bound context! It is not executed immediately.</p>`,
  },
  {
    id: 34,
    question: 'What’s the output?',
    image: 'question-34.svg',
    options: [
      'A: <code>"object"</code> ',
      'B: <code>"number"</code> ',
      'C: <code>"function"</code>',
      'D: <code>"undefined"</code>',
    ],
    answer: 2,
    explanation: `<p>The <code>sayHi</code> function returns the returned value of the immediately invoked function expression (IIFE). This function returned <code>0</code>, which is type <code>"number"</code>.</p>
    <p>FYI: there are only 7 built-in types: <code>null</code>, <code>undefined</code>, <code>boolean</code>, <code>number</code>, <code>string</code>, <code>object</code>, and <code>symbol</code>. <code>"function"</code> is not a type, since functions are objects, it’s of type <code>"object"</code>.</p>`,
  },
  {
    id: 35,
    question: 'Which of these values are falsy?',
    image: 'question-35.svg',
    options: [
      'A: <code>0</code>, <code>""</code>,<code>undefined</code> ',
      'B: <code>0</code>,<code>new Number(0)</code>, <code>""</code>,<code>new Boolean(false)</code>, <code>undefined</code>',
      'C: <code>0</code>, <code>""</code>,<code>new Boolean(false)</code>, <code>undefined</code>',
      'D: All of them are falsy',
    ],
    answer: 1,
    explanation: `<p>There are 8 falsy values:</p>
    <ul ><li><code>undefined</code></li><li><code>null</code></li><li><code>NaN</code></li><li><code>false</code></li><li><code>''</code> (empty string)</li><li><code>0</code></li><li><code>0</code></li><li><code>0n</code> (BigInt(0))</li></ul>
    <p>Function constructors, like <code>new Number</code> and <code>new Boolean</code> are truthy.</p>`,
  },
  {
    id: 36,
    question: 'What’s the output?',
    image: 'question-36.svg',
    options: [
      'A: <code>"number"</code> ',
      'B: <code>"string"</code>',
      'C: <code>"object"</code>',
      'D: <code>"undefined"</code>',
    ],
    answer: 2,
    explanation: `<p><code>typeof 1</code> returns <code>"number"</code>. <code>typeof "number"</code> returns <code>"string"</code></p>`,
  },
  {
    id: 37,
    question: 'What’s the output?',
    image: 'question-37.svg',
    options: [
      'A: <code>[1, 2, 3, 7 x null, 11]</code> ',
      'B: <code>[1, 2, 3, 11]</code>',
      'C: <code>[1, 2, 3, 7 x empty, 11]</code>',
      'D: <code>SyntaxError</code>',
    ],
    answer: 2,
    explanation: `<p>When you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called “empty slots”. These actually have the value of <code>undefined</code>, but you will see something like:</p>
    <p><code>[1, 2, 3, 7 x empty, 11] <br>depending on where you run it (it’s different for every browser, node, etc.)</code></p>`,
  },
  {
    id: 38,
    question: 'What’s the output?',
    image: 'question-38.svg',
    options: [
      'A: <code>1</code><code>undefined</code> <code>2</code>',
      'B: <code>undefined</code><code>undefined</code><code>undefined</code>',
      'C: <code>1</code><code>1</code><code>2</code>',
      'D: <code>1</code><code>undefined</code><code>undefined</code>',
    ],
    answer: 1,
    explanation: `<p>The <code>catch</code> block receives the argument <code>x</code>. This is not the same <code>x</code> as the variable when we pass arguments. This variable <code>x</code> is block-scoped.</p>
    <p>Later, we set this block-scoped variable equal to <code>1</code>, and set the value of the variable <code>y</code>. Now, we log the block-scoped variable <code>x</code>, which is equal to <code>1</code>.</p>
    <p>Outside of the <code>catch</code> block, <code>x</code> is still <code>undefined</code>, and <code>y</code> is <code>2</code>. When we want to <code>console.log(x)</code> outside of the <code>catch</code> block, it returns <code>undefined</code>, and <code>y</code> returns <code>2</code>.</p>`,
  },
  {
    id: 39,
    question: 'What’s the output?',
    image: '',
    options: [
      'A: primitive or object',
      'B: function or object',
      'C: trick question! only objects',
      'D: number or object',
    ],
    answer: 1,
    explanation: `<p>Primitive types are <code>boolean</code>, <code>null</code>, <code>undefined</code>, <code>bigint</code>, <code>number</code>, <code>string</code>, and <code>symbol</code>.</p>
    <p>What differentiates a primitive from an object is that primitives do not have any properties or methods; however, you’ll note that <code>'foo'.toUpperCase()</code> evaluates to <code>'FOO'</code> and does not result in a <code>TypeError</code>. This is because when you try to access a property or method on a primitive like a string, JavaScript will implicitly wrap the primitive type using one of the wrapper classes, i.e.&nbsp;<code>String</code>, and then immediately discard the wrapper after the expression evaluates. All primitives except for <code>null</code> and <code>undefined</code> exhibit this behaviour.</p>`,
  },
  {
    id: 40,
    question: 'What’s the output?',
    image: 'question-40.svg',
    options: [
      'A: <code>[0, 1, 2, 3, 1, 2]</code>',
      'B: <code>[6, 1, 2]</code>',
      'C: <code>[1, 2, 0, 1, 2, 3]</code>',
      'D: <code>[1, 2, 6]</code>',
    ],
    answer: 1,
    explanation: `<p><code>[1, 2]</code> is our initial value. This is the value we start with, and the value of the very first <code>acc</code>. During the first round, <code>acc</code> is <code>[1,2]</code>, and <code>cur</code> is <code>[0, 1]</code>. We concatenate them, which results in <code>[1, 2, 0, 1]</code>.</p>
    <p>Then, <code>[1, 2, 0, 1]</code> is <code>acc</code> and <code>[2, 3]</code> is <code>cur</code>. We concatenate them, and get <code>[1, 2, 0, 1, 2, 3]</code></p>`,
  },
  {
    id: 41,
    question: 'What’s the output?',
    image: 'question-41.svg',
    options: [
      'A: <code>false</code><code>true</code><code>false</code>',
      'B: <code>false</code><code>false</code><code>true</code>',
      'C: <code>false</code><code>true</code><code>true</code>',
      'D: <code>true</code><code>true</code><code>false</code>',
    ],
    answer: 2,
    explanation: `<p><code>null</code> is falsy. <code>!null</code> returns <code>true</code>. <code>!true</code> returns <code>false</code>.</p>
    <p><code>""</code> is falsy. <code>!""</code> returns <code>true</code>. <code>!true</code> returns <code>false</code>.</p>
    <p><code>1</code> is truthy. <code>!1</code> returns <code>false</code>. <code>!false</code> returns <code>true</code>.</p>`,
  },
  {
    id: 42,
    question: 'What does the setInterval method return in the browser?',
    image: 'question-41.svg',
    options: [
      'A: a unique id',
      'B: the amount of milliseconds specified',
      'C: the passed function',
      'D: <code>undefined</code>',
    ],
    answer: 1,
    explanation: `<p>It returns a unique id. This id can be used to clear that interval with the <code>clearInterval()</code> function.</p>`,
  },
  {
    id: 43,
    question: 'What does this return?',
    image: 'question-43.svg',
    options: [
      'A: <code>["L", "y", "d", "i", "a"]</code>',
      'B: <code>["Lydia"]</code>',
      'C: <code>[[], "Lydia"]</code>',
      'D: <code>[["L", "y", "d", "i", "a"]]</code>',
    ],
    answer: 1,
    explanation: `<p>A string is an iterable. The spread operator maps every character of an iterable to one element.</p>`,
  },
  {
    id: 44,
    question: 'What’s the output?',
    image: 'question-44.svg',
    options: [
      'A: <code>[0, 10], [10, 20]</code>',
      'B: <code>20, 20</code>',
      'C: <code>10, 20</code>',
      'D: <code>0, 10 and 10, 20</code>',
    ],
    answer: 3,
    explanation: `<p>Regular functions cannot be stopped mid-way after invocation. However, a generator function can be “stopped” midway, and later continue from where it stopped. Every time a generator function encounters a <code>yield</code> keyword, the function yields the value specified after it. Note that the generator function in that case doesn’t <em>return</em> the value, it <em>yields</em> the value.</p>
    <p>First, we initialize the generator function with <code>i</code> equal to <code>10</code>. We invoke the generator function using the <code>next()</code> method. The first time we invoke the generator function, <code>i</code> is equal to <code>10</code>. It encounters the first <code>yield</code> keyword: it yields the value of <code>i</code>. The generator is now “paused”, and <code>10</code> gets logged.</p>
    <p>Then, we invoke the function again with the <code>next()</code> method. It starts to continue where it stopped previously, still with <code>i</code> equal to <code>10</code>. Now, it encounters the next <code>yield</code> keyword, and yields <code>i * 2</code>. <code>i</code> is equal to <code>10</code>, so it returns <code>10 * 2</code>, which is <code>20</code>. This results in <code>10, 20</code>.</p>`,
  },
  {
    id: 45,
    question: 'What’s the output?',
    image: 'question-45.svg',
    options: [
      'A: <code>"one"</code>',
      'B: <code>"two"</code>',
      'C: <code>"two" "one"</code>',
      'D: <code>"one" "two"</code>',
    ],
    answer: 2,
    explanation: `<p>When we pass multiple promises to the <code>Promise.race</code> method, it resolves/rejects the <em>first</em> promise that resolves/rejects. To the <code>setTimeout</code> method, we pass a timer: 500ms for the first promise (<code>firstPromise</code>), and 100ms for the second promise (<code>secondPromise</code>). This means that the <code>secondPromise</code> resolves first with the value of <code>'two'</code>. <code>res</code> now holds the value of <code>'two'</code>, which gets logged.</p>`,
  },
  {
    id: 46,
    question: 'What’s the output?',
    image: 'question-46.svg',
    options: [
      'A: <code>null</code>',
      'B: <code>[null]</code>',
      'C: <code>[{}]</code>',
      'D: <code>[{ name: "Lydia" }]</code>',
    ],
    answer: 4,
    explanation: `<p>First, we declare a variable <code>person</code> with the value of an object that has a <code>name</code> property.</p>
    <p>Then, we declare a variable called <code>members</code>. We set the first element of that array equal to the value of the <code>person</code> variable. Objects interact by <em>reference</em> when setting them equal to each other. When you assign a reference from one variable to another, you make a <em>copy</em> of that reference. (note that they don’t have the <em>same</em> reference!)</p>
    <p>Then, we set the variable <code>person</code> equal to <code>null</code>.</p>
    <p>We are only modifying the value of the <code>person</code> variable, and not the first element in the array, since that element has a different (copied) reference to the object. The first element in <code>members</code> still holds its reference to the original object. When we log the <code>members</code> array, the first element still holds the value of the object, which gets logged.</p>`,
  },
  {
    id: 47,
    question: 'What’s the output?',
    image: 'question-47.svg',
    options: [
      'A: <code>{ name: "Lydia" }, { age: 21 }</code>',
      'B: <code>"name", "age"</code>',
      'C: <code>"Lydia", 21</code>',
      'D: <code>["name", "Lydia"], ["age", 21]</code>',
    ],
    answer: 2,
    explanation: `<p>With a <code>for-in</code> loop, we can iterate through object keys, in this case <code>name</code> and <code>age</code>. Under the hood, object keys are strings (if they’re not a Symbol). On every loop, we set the value of <code>item</code> equal to the current key it’s iterating over. First, <code>item</code> is equal to <code>name</code>, and gets logged. Then, <code>item</code> is equal to <code>age</code>, which gets logged.</p>`,
  },
  {
    id: 48,
    question: 'What’s the output?',
    image: 'question-48.svg',
    options: [
      'A: <code>"345"</code>',
      'B: <code>"75"</code>',
      'C: <code>12</code>',
      'D: <code>"12"</code>',
    ],
    answer: 2,
    explanation: `<p>Operator associativity is the order in which the compiler evaluates the expressions, either left-to-right or right-to-left. This only happens if all operators have the <em>same</em> precedence. We only have one type of operator: <code>+</code>. For addition, the associativity is left-to-right.</p>
    <p><code>3 + 4</code> gets evaluated first. This results in the number <code>7</code>.</p>
    <p><code>7 + '5'</code> results in <code>"75"</code> because of coercion. JavaScript converts the number <code>7</code> into a string, see question 15. We can concatenate two strings using the <code>+</code>operator. <code>"7" + "5"</code> results in <code>"75"</code>.</p>`,
  },
  {
    id: 49,
    question: 'What’s the value of num?',
    image: 'question-49.svg',
    options: [
      'A: <code>42</code>',
      'B: <code>"42"</code>',
      'C: <code>7</code>',
      'D: <code>NaN</code>',
    ],
    answer: 3,
    explanation: `<p>Only the first numbers in the string is returned. Based on the <em>radix</em> (the second argument in order to specify what type of number we want to parse it to: base 10, hexadecimal, octal, binary, etc.), the <code>parseInt</code> checks whether the characters in the string are valid. Once it encounters a character that isn’t a valid number in the radix, it stops parsing and ignores the following characters.</p>
    <p><code>*</code> is not a valid number. It only parses <code>"7"</code> into the decimal <code>7</code>. <code>num</code> now holds the value of <code>7</code>.</p>`,
  },
  {
    id: 50,
    question: 'What’s the output?',
    image: 'question-50.svg',
    options: [
      'A: <code>[]</code>',
      'B: <code>[null, null, null]</code>',
      'C: <code>[undefined, undefined, undefined]</code>',
      'D: <code>[ 3 x empty ]</code>',
    ],
    answer: 3,
    explanation: `<p>When mapping over the array, the value of <code>num</code> is equal to the element it’s currently looping over. In this case, the elements are numbers, so the condition of the if statement <code>typeof num === "number"</code> returns <code>true</code>. The map function creates a new array and inserts the values returned from the function.</p>
    <p>However, we don’t return a value. When we don’t return a value from the function, the function returns <code>undefined</code>. For every element in the array, the function block gets called, so for each element we return <code>undefined</code>.</p>`,
  },
];
