# 0x01. ES6 Promises

# References
1. [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
2. [Java Script Promise: An introduction](https://web.dev/promises/)
3. [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
4. [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
5. [throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

## Setup
1. Install NodeJS 12.11.x
(in your home directory):

   - curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   - sudo bash nodesource_setup.sh
   - sudo apt install nodejs -y
   - $ nodejs -v
   - v12.11.1
   - $ npm -v
   - 6.11.3

2. Install Jest, Babel, and ESLint
in your project directory:
Install Jest using: npm install --save-dev jest
Install Babel using: npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/cli
Install ESLint using: npm install --save-dev eslint
Files
package.json
Click to show/hide file contents
babel.config.js
Click to show/hide file contents
utils.js
Use when you get to tasks requiring uploadPhoto and createUser.

Click to show/hide file contents
.eslintrc.js
Click to show/hide file contents
and…
Don’t forget to run $ npm install when you have the package.json

Response Data Format
uploadPhoto returns a response with the format

{
  status: 200,
  body: 'photo-profile-1',
}
createUser returns a response with the format

{
  firstName: 'Guillaume',
  lastName: 'Salva',
}
