import { ReactNode } from "react";
import Modal from "./Modal";

import "./utils.css"

export const ModalDesc = ({
    isModalOpen,
    closeModal,
    previewImage,
    children
}: {
    isModalOpen: boolean;
    previewImage: string | undefined;
    closeModal: () => void;
    children: ReactNode
}) => {


    return (
        <Modal isOpen={isModalOpen}>
            {isModalOpen && (
                <div className="modal-container">
                    <div className="text-center flex justify-center">
                        <img
                            src={previewImage}
                            className="smaller-image shadow-lg"
                        />
                    </div>
                    {children}
                    <div className="line-separator" />
                    <div className="flex justify-end">
                        <button className="text-[#ff014f] border-[#ff014f] border p-2 rounded-md text-xs
                                            hover:bg-[#ff014f] hover:text-white duration-300 -mb-3
                                        " onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </Modal>
    );
};