import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
import React from "react";

afterEach(() => {
  cleanup();
});

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render export
