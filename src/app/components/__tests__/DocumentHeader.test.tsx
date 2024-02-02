// DocumentHeader.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DocumentHeader from "../DocumentHeader";

describe("DocumentHeader Component", () => {
  it("renders DocumentHeader component with correct content", () => {
    // Mock data
    const mockModalHeader = true;

    render(<DocumentHeader modalHeader={mockModalHeader} />);

    // Check if the column headers are rendered
    expect(screen.getByText("Document Name")).toBeInTheDocument();
    expect(screen.getByText("Date")).toBeInTheDocument();
    expect(screen.getByText("Type")).toBeInTheDocument();

    // Check if Action column is rendered when modalHeader is false
    if (!mockModalHeader) {
      expect(screen.getByText("Action")).toBeInTheDocument();
    }
  });
});
