import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DocumentIcon from "../DocumentIcon";
import { Type } from "../../../../types/types";

describe("Document Component", () => {
  // Mock file data
  const mockType: Type = {
    type: "pdf",
  };

  it("renders Document component with file details", () => {
    render(<DocumentIcon type={mockType.type} />);

    expect(screen.getByAltText("PDF svg")).toBeInTheDocument();
  });
});
