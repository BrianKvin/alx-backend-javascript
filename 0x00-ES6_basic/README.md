<p>
<img width="260" height="170" src="https://www.flaticon.com/svg/static/icons/svg/1661/1661330.svg" align="right" >
</p>

# :colombia: 0x00. Python - Variable Annotations

- Type annotations in Python 3
- How you can use type annotations to specify function signatures and variable types
- Duck typing
- How to validate your code with mypy

## Setup
1. Install NodeJS 12.11.x
   - curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   - sudo bash nodesource_setup.sh
   - sudo apt install nodejs -y
   - $ nodejs -v
   - v12.11.1
   - $ npm -v
   - 6.11.3

2. Install Jest, Babel, and ESLint
   - Install Jest using: npm install --save-dev jest
   - Install Babel using: npm install --save-dev babel-jest @babel/core @babel/preset-env
   - Install ESLint using: npm install --save-dev eslint

## Prerequisites

- Allowed editors: vi, vim, emacs
- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using python3 (version 3.7)
- All your files should end with a new line
- The first line of all your files should be exactly `#!/usr/bin/env python3`
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the `pycodestyle` style (version 2.5.)
- All your files must be executable
- The length of your files will be tested using wc
- All your modules should have a documentation `(python3 -c 'print(__import__("my_module").__doc__)')`
- All your classes should have a documentation `(python3 -c 'print(__import__("my_module").MyClass.__doc__)')`
- All your functions (inside and outside a class) should have a documentation `(python3 -c 'print(__import__("my_module").my_function.__doc__)' and python3 -c 'print(__import_- ("my_module").MyClass.my_function.__doc__)')`

## Files

| Files                                      | Description                                   |
| ------------------------------------------ | --------------------------------------------- |
| **0-add.py, 0-main.py**                    | Basic annotations - add                       |
| **1-main.py, 1-concat.py**                 | Basic annotations - concat                    |
| **2-main.py, 2-floor.py**                  | Basic annotations - floor                     |
| **3-main.py, 3-to_str.py**                 | Basic annotations - to string                 |
| **4-define_variables.py, 4-main.py**       | Define variables                              |
| **5-main.py, 5-sum_list.py**               | Complex types - list of floats                |
| **6-main.py, 6-sum_mixed_list.py**         | Complex types - mixed list                    |
| **7-main.py, 7-to_kv.py**                  | Complex types - string and int/float to tuple |
| **8-main.py, 8-make_multiplier.py**        | Complex types - functions                     |
| **9-main.py, 9-element_length.py**         | Let's duck type an iterable object            |
| **100-safe_first_element.py, 100-main.py** | Duck typing - first element of a sequence     |
| **101-safely_get_value.py, 101-main.py**   | More involved type annotations                |
| **102-main.py, 102-type_checking.py**      | Type Checking                                 |



# :book: 0x00. ES6 Basics
## Topics Covered
1. ECMAScript 6 - ECMAScript 2015.
2. Node.js and NPM

## Project setup
```bash
# Create a new node project
npm init -y

# Install babel core for project
npm install --save-dev @babel/core

# Add babel presets (babel plugins and config options)
npm install --save-dev @babel/preset-env

# Create babel config file
touch babel.config.js

# Install babel-node for project
npm install --save-dev @babel/node

# Run js file using babel node
npx babel-node <js filename>

# Run js file using package.json script
npm run dev <filename>

# Install eslint for liniting js file
npm install --save-dev eslint

# Setup eslint configuration
npx eslint --init # or
npm init @eslint/config

# Lint a folder with js file or lint a js file.
npx eslint <folder | filename>

# Fix a js file lint issue
npx eslint <folder | filename> --fix

# Install Jest as development dependecy.
npm install --save-dev jest
npm uninstall --save-dev jest

npm install --save-dev jest@27.0.0

# Run jet test
npm run test

# Install @babel/jest
# npm install --save-dev babel-jest
# npm uninstall --save-dev babel-jest
```

# :computer: Tasks
## [0. Const or let?](0-constants.js)
```bash
touch 0-constants.js
chmod +x 0-constants.js
npm run lint 0-constants.js --fix

touch 0-main.js
chmod +x 0-main.js
npm run dev ./tests/0-main.js 
```

## [1. Block Scope](1-block-scoped.js)
```bash
touch 1-block-scoped.js
chmod +x 1-block-scoped.js
npm run lint 1-block-scoped.js --fix

touch ./tests/1-main.js
chmod +x ./tests/1-main.js
npm run dev ./tests/1-main.js 
```

## [2. Arrow functions](2-arrow.js)
```bash
touch 2-arrow.js
chmod +x 2-arrow.js
npm run lint 2-arrow.js --fix

touch ./tests/2-main.js
chmod +x ./tests/2-main.js
npm run dev ./tests/2-main.js 
```

## [3. Parameter defaults](3-default-parameter.js)
```bash
touch 3-default-parameter.js
chmod +x 3-default-parameter.js
npm run lint 3-default-parameter.js --fix

touch ./tests/3-main.js
chmod +x ./tests/3-main.js
npm run dev ./tests/3-main.js 
```

## [4. Rest parameter syntax for functions](4-rest-parameter.js)
```bash
touch 4-rest-parameter.js
chmod +x 4-rest-parameter.js
npm run lint 4-rest-parameter.js --fix

touch ./tests/4-main.js
chmod +x ./tests/4-main.js
npm run dev ./tests/4-main.js
```

## [5. The wonders of spread syntax](5-spread-operator.js)
```bash
touch 5-spread-operator.js
chmod +x 5-spread-operator.js
npm run lint 5-spread-operator.js --fix

touch ./tests/5-main.js
chmod +x ./tests/5-main.js
npm run dev ./tests/5-main.js
```

## [6. Take advantage of template literals](6-string-interpolation.js)
```bash
touch 6-string-interpolation.js
chmod +x 6-string-interpolation.js
npm run lint 6-string-interpolation.js --fix

touch ./tests/6-main.js
chmod +x ./tests/6-main.js
npm run dev ./tests/6-main.js
```

## [7. Object property value shorthand syntax](7-getBudgetObject.js)
```bash
touch 7-getBudgetObject.js
chmod +x 7-getBudgetObject.js
npm run lint 7-getBudgetObject.js --fix

touch ./tests/7-main.js
chmod +x ./tests/7-main.js
npm run dev ./tests/7-main.js
```

## [8. No need to create empty objects before adding in properties](8-getBudgetCurrentYear.js)
```bash
touch 8-getBudgetCurrentYear.js
chmod +x 8-getBudgetCurrentYear.js
npm run lint 8-getBudgetCurrentYear.js --fix

touch ./tests/8-main.js
chmod +x ./tests/8-main.js
npm run dev ./tests/8-main.js
```

## [9. ES6 method properties](9-getFullBudget.js)
```bash
touch 9-getFullBudget.js
chmod +x 9-getFullBudget.js
npm run lint 9-getFullBudget.js --fix

touch ./tests/9-main.js
chmod +x ./tests/9-main.js
npm run dev ./tests/9-main.js
```

## [10. For...of Loops](10-loops.js)
```bash
touch 10-loops.js
chmod +x 10-loops.js
npm run lint 10-loops.js --fix

touch ./tests/10-main.js
chmod +x ./tests/10-main.js
npm run dev ./tests/10-main.js
```

## [11. Iterator](11-createEmployeesObject.js)
```bash
touch 11-createEmployeesObject.js
chmod +x 11-createEmployeesObject.js
npm run lint 11-createEmployeesObject.js --fix

touch ./tests/11-main.js
chmod +x ./tests/11-main.js
npm run dev ./tests/11-main.js
```

## [12. Let's create a report object](12-createReportObject.js)
```bash
touch 12-createReportObject.js
chmod +x 12-createReportObject.js
npm run lint 12-createReportObject.js --fix

touch ./tests/12-main.js
chmod +x ./tests/12-main.js
npm run dev ./tests/12-main.js
```

## [13. Iterating through report objects ](100-createIteratorObject.js)
```bash
touch 100-createIteratorObject.js
chmod +x 100-createIteratorObject.js
npm run lint 100-createIteratorObject.js --fix

touch ./tests/100-main.js
chmod +x ./tests/100-main.js
npm run dev ./tests/100-main.js
```

## [14. Iterate through object](101-iterateThroughObject.js)
```bash
touch 101-iterateThroughObject.js
chmod +x 101-iterateThroughObject.js
npm run lint 101-iterateThroughObject.js --fix

touch ./tests/101-main.js
chmod +x ./tests/101-main.js
npm run dev ./tests/101-main.js
```

# :books: References
1. [Using Babel](https://babeljs.io/setup#installation)
1. [Getting Started with ESLint](https://eslint.org/docs/latest/user-guide/getting-started)
1. [npm vs npx — What’s the Difference?](https://www.freecodecamp.org/news/npm-vs-npx-whats-the-difference/)
1. [Jestr Getting Started](https://jestjs.io/docs/27.x/getting-started)
1. [ECMAScript 6 - ECMAScript 2015](https://www.w3schools.com/js/js_es6.asp)
1. [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
1. [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
1. [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
1. [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
1. [Javascript ES6 — Iterables and Iterators](https://towardsdatascience.com/javascript-es6-iterables-and-iterators-de18b54f4d4)
