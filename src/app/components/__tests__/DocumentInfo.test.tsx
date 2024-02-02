import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DocumentInfo from "../DocumentInfo";

describe("DocumentInfo Component", () => {
  // Mock details
  const mockFile = {
    type: "pdf",
    name: "Sample Document",
    added: "2022-02-01",
  };

  it("renders DocumentInfo component with file details", () => {
    render(
      <DocumentInfo
        type={mockFile.type}
        name={mockFile.name}
        added={mockFile.added}
      />
    );

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      mockFile.name
    );
    expect(screen.getByText(`${mockFile.added}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockFile.type}`)).toBeInTheDocument();
  });
});
