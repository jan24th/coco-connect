import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("example", () => {
  it("has a button", async () => {
    render(<button>button</button>);
    expect(screen.getByRole("button").textContent).toBe("button");
  });
});
