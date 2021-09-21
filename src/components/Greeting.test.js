// Importing the component we want to test
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting.jsx";

// Testing suites
describe("Greeting Component", () => {
  // Calling test function or method to create a test
  // We write the test code in callback
  test("renders Hello Client", () => {
    // Arrange the test
    render(<Greeting />);

    // Act or Action we want to check
    // ...

    // Assert
    const helloClientElement = screen.getByText("Hello Client", {
      exact: false,
    });
    expect(helloClientElement).toBeInTheDocument();
  });

  // Second test to check if the button was not clicked
  test("renders Nice to see you if the button was not clicked", () => {
    //   Arrangin
    render(<Greeting />);

    // Act or Action we want to check !!
    //..

    // Assert
    const niceToSeeElement = screen.getByText("Nice to see you", {
      exact: true,
    });
    expect(niceToSeeElement).toBeInTheDocument();
  });

  // Third test to check if the button was clicked
  test("renders 'Changed' to see if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const changedElement = screen.getByText("Changed!");
    expect(changedElement).toBeInTheDocument();
  });

  // Fourth test to check if the button was clicked and previous text removed
  test("renders 'checks' if the text is removed or not", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.queryByText("Nice to see you");
    expect(outputElement).toBeNull();
  });
});
