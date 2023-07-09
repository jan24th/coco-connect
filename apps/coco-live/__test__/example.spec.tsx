import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CcButton } from "../src/components/atom/CcButton";
import React from "react";

describe("example", () => {
  it("has a button", async () => {
    render(<CcButton label="button" />);
    expect(screen.getByRole("button").textContent).toBe("button");
  });
});
