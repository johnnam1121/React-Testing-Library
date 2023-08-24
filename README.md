Lesson 4
npm run test is used to start the test file.
if you were to copy the same file elsewhere, it will still run that test

import { render, screen } from '@testing-library/react';
import App from './App';

// renders learn react link is the description of what we want to test
test('renders learn react link', () => { // test and it are interchangable
// this is what will be executed when the test is run

// first thing to do is declare which component we are testing
// this tells it we are testing the app component and first thing it does is render the app comp
render(App);

// second thing to do is find the elements we want to interact with
// screen loooks into the dom and screens some methods to do blah
// in this case, we are trying to get some text that says learn react
// we are calling it linkElement because we are expecting a link
const linkElement = screen.getByText(/learn react/i);

// third thing is to interact with the element

// fourth thing is to assert that the results are as expected
expect(linkElement).toBeInTheDocument();
});

Lesson 5
exploring the different screen query methods
findAllBy**_
findBy_**
getAllBy**_
getBy_**
queryAllBy**_
queryBy_**

if you use one of the ones that are supposed to only get 1 result, but you have multiple, you will get an error

Lesson 6
Priority
Point of the lesson is to try and mimic what the user would be doing.

Lesson 7
General method in testing. Make a folder inside the component we are testing. called it **test**like this then create the test file like Header.test.js

Lesson 9
Describe blocks

describe("todofooter", ()=>{
whatever test here
})

main purpose is for organizing the tests

Lesson 10
Fire Events

const MockedSetTodo = jest.fn()

basically these are event functions... check if x happens when blah
fireEvent.change(inputElement, {target:{value:"Go Grovery Shopping"}})

Lesson 13
Mocking Http requests

Lesson 14
before each and after each

basically before and after each test, you can do something like console log x then run test 1 and repeat