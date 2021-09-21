// Importing test important object and methods
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Async from "./Async.jsx";

// Creating our new test Suite
describe("Async component", () => {
  // Test to check if the posts are being rendered correctly
  test("renders and posts if request recieved", async () => {
    // Changing or replacing fetch with mock fetch from jest
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First Post" }],
    });

    // Arrange the test
    render(<Async />);

    // Act..//

    // Assert
    // Check if list item exist
    // the listItemElements array must not be 0
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
