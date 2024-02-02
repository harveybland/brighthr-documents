import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Document from "../Document";
import { DocumentItem } from "../../../../types/types";

describe("Document Component", () => {
  // Mock data
  const mockFile: DocumentItem = {
    type: "pdf",
    name: "Employee Handbook",
    added: "2017-01-06",
  };

  it("renders Document component with file details", () => {
    render(
      <Document
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
