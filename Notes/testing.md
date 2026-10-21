# Types of Testing

## 1. Unit Testing

Unit testing involves testing individual, isolated pieces of code, such as specific functions or methods within a module or file.

**Purpose:** To identify and fix bugs in small, isolated pieces of code before they cause larger problems in an application.

**Example:** Testing a function that calculates the total price of items in a shopping cart.

## 2. Integration Testing

Integration testing checks how different pieces of code work together. This can include testing how modules interact with each other or how an application interacts with a database or an external API.

**Purpose:** To ensure that different components work together as expected.

**Example:** Testing whether an API endpoint correctly retrieves data from a database.

## 3. End-to-End (E2E) Testing

End-to-end testing involves testing an entire application flow from start to finish. It simulates real user interactions to verify that the frontend, backend, and other connected components work together correctly.

**Purpose:** To ensure the application works as expected in a real-world scenario.

**Example:** Testing whether a user can register, log in, and access their dashboard.

## 4. API Testing

API testing involves testing the endpoints an application exposes to ensure they respond correctly to different requests and inputs. It can include checking response status codes, response data, input validation, authentication, and error handling.

API testing often overlaps with integration testing, especially when testing how an API interacts with a database or other services. However, API testing focuses specifically on the API's behavior.

**Purpose:** To ensure that API endpoints handle requests correctly and return the expected responses.

**Example:** Sending a `POST` request to a registration endpoint and verifying that a user is created successfully.

# Introduction to Jest

[Jest](https://jestjs.io/) is a JavaScript testing framework originally developed by Facebook (now Meta). It supports testing JavaScript applications, including frontend and backend code.

Jest provides tools for running tests, making assertions, mocking dependencies, and measuring code coverage.

## How Jest Finds Test Files

Jest searches for test files based on its configuration and default file-matching patterns. Common naming conventions include:

- `example.test.js`
- `example.spec.js`
- Files inside a `__tests__` directory.

Jest does not simply look for `.test` anywhere in a filename. It uses configured patterns to identify files that contain tests.

## Writing a Jest Test

A Jest test commonly uses the `test()` or `it()` function, which accepts a description and a callback function.

Inside the callback, you execute the code you want to test and use `expect()` with matchers, such as `.toBe()`, to verify the expected result.

### Example

```javascript
function add(a, b) {
  return a + b;
}

test('adds two numbers', () => {
  const result = add(2, 3);

  expect(result).toBe(5);
});
```

In this example:

- `test()` defines the test and describes what it should do.
- `add(2, 3)` executes the function being tested.
- `expect(result)` specifies the actual value to check.
- `.toBe(5)` verifies that the result is exactly `5`.

If the result does not match the expected value, Jest reports the test as failed.

## Code Coverage

Code coverage is a metric that measures how much of your code is executed when your tests run.

Coverage reports commonly measure:

- **Statement coverage:** The percentage of statements executed.
- **Branch coverage:** The percentage of conditional branches tested.
- **Function coverage:** The percentage of functions called.
- **Line coverage:** The percentage of executable lines run.

Some companies set code coverage thresholds that tests must meet. Coverage tools also help developers identify parts of the codebase that may need additional tests.

**Important:** High code coverage does not guarantee that your application is bug-free. Tests must also verify meaningful behavior and expected outcomes.

To generate a coverage report with Jest, run:

```bash
npx jest --coverage
```

