import { fireEvent, render, screen } from "../../../test/test-utils";
import { ThemeSwitch } from "./ThemeSwitch";
import { useState } from "react";
import { expect } from "vitest";
import { waitFor } from "@testing-library/dom";

describe("ThemeSwitch", () => {
  it("can switch theme", () => {
    const Container = () => {
      const [theme, setTheme] = useState("dark");
      return <ThemeSwitch theme={theme} setTheme={setTheme} />;
    };
    render(<Container />);
    const switchButton = screen.getByRole("switch");
    expect(screen.getByText("toggle theme to light")).toBeInTheDocument();
    fireEvent.click(switchButton);
    expect(screen.getByText("toggle theme to dark")).toBeInTheDocument();
  });
  describe("have enabled prop", () => {
    it("disable if enabled is false", () => {
      const Container = () => {
        const [theme, setTheme] = useState("dark");
        return (
          <ThemeSwitch theme={theme} setTheme={setTheme} enabled={false} />
        );
      };
      render(<Container />);
      expect(
        screen.getByText("toggle theme is not enabled")
      ).toBeInTheDocument();
    });
    it("enabled if enabled turn on with dark mode", async () => {
      const Container = () => {
        const [theme, setTheme] = useState("dark");
        const [enabled, setEnabled] = useState(false);
        return (
          <>
            <ThemeSwitch theme={theme} setTheme={setTheme} enabled={enabled} />
            <button title="enable" onClick={() => setEnabled(true)}>
              enable
            </button>
          </>
        );
      };
      render(<Container />);
      const button = screen.getByText("enable");
      fireEvent.click(button);
      await waitFor(() => {
        expect(screen.getByText("toggle theme to light")).toBeInTheDocument();
        const switchButton = screen.getByRole("switch");
        fireEvent.click(switchButton);
        expect(screen.getByText("toggle theme to dark")).toBeInTheDocument();
      });
    });
    it("enabled if enabled turn on with light mode", async () => {
      const Container = () => {
        const [theme, setTheme] = useState("light");
        const [enabled, setEnabled] = useState(false);
        return (
          <>
            <ThemeSwitch theme={theme} setTheme={setTheme} enabled={enabled} />
            <button title="enable" onClick={() => setEnabled(true)}>
              enable
            </button>
          </>
        );
      };
      render(<Container />);
      const button = screen.getByText("enable");
      fireEvent.click(button);
      await waitFor(() => {
        expect(screen.getByText("toggle theme to dark")).toBeInTheDocument();
        const switchButton = screen.getByRole("switch");
        fireEvent.click(switchButton);
        expect(screen.getByText("toggle theme to light")).toBeInTheDocument();
      });
    });
  });
});
