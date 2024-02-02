import { ModalHeaderProps } from "../../../types/types";

export default function DocumentHeader({ modalHeader }: ModalHeaderProps) {
  return (
    <>
      <div
        className={`${
          modalHeader ? "grid-container-modal" : "grid-container"
        } border-none bg-backgroundMain px-4 rounded-t py-4 text-textMain text-sm`}
      >
        <p className="grid-col-stretch">Document Name</p>
        <p>Date</p>
        <p>Type</p>
        {!modalHeader && <p>Action</p>}
      </div>
    </>
  );
}
