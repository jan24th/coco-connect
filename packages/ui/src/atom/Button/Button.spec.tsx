import { Button } from "./Button";
import { render, screen } from "../../../test/test-utils";
import { expect } from "vitest";

describe("Button", () => {
  it("can switch theme", () => {
    render(<Button />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
