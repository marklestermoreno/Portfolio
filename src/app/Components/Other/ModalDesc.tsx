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

                    <div className="flex justify-end">
                        <button className="modal-exit navigator desc" onClick={closeModal}>
                            ✖
                        </button>
                    </div>
                    <div className="w-full text-center flex justify-center">
                        <img
                            src={previewImage}
                            className="smaller-image shadow-lg"
                        />
                    </div>
                    {children}
                </div>
            )}
        </Modal>
    );
};