import "@testing-library/jest-dom/extend-expect"
const matchers = require('jest-extended');
expect.extend(matchers);

afterEach(() => {
  jest.useRealTimers();
});