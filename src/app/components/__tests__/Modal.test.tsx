import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from "../Modal";
import { File } from "../../../../types/types";

describe("Modal Component", () => {
  // Mock file data
  const mockFiles: File[] = [
    {
      name: "Document 1",
      type: "pdf",
      added: "2022-02-01",
    },
    {
      name: "Document 2",
      type: "csv",
      added: "2022-02-02",
    },
  ];

  it("renders Modal component with file details", () => {
    render(<Modal files={mockFiles} />);

    mockFiles.forEach((file) => {
      expect(screen.getByText(file.name)).toBeInTheDocument();
      expect(screen.getByText(file.type)).toBeInTheDocument();
      expect(screen.getByText(file.added)).toBeInTheDocument();
    });
  });
});
