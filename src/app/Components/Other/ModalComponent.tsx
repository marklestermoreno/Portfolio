import { ReactNode, useEffect, useState } from "react";
import Modal from "./Modal";

import "./utils.css"
import LoadingData from "./LoadingData";

export const ModalComponent = ({
    isModalOpen,
    closeModal,
    image,
    currentImageIndex,
    handlePrevImage,
    handleNextImage,
    children
}: {
    isModalOpen: boolean;
    closeModal: () => void;
    image: string[];
    currentImageIndex: number;
    handlePrevImage: () => void;
    handleNextImage: () => void;
    children: ReactNode
}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true); // Set loading state to true when modal opens
        const images = image.map((src) => {
            const img = new Image();
            img.src = src;
            return img;
        });

        let loadedCount = 0;

        const handleImageLoad = () => {
            loadedCount++;
            if (loadedCount === image.length) {
                setIsLoading(false);
            }
        };

        images.forEach((img) => {
            img.addEventListener("load", handleImageLoad);
        });

        return () => {
            images.forEach((img) => {
                img.removeEventListener("load", handleImageLoad);
            });
        };
    }, [isModalOpen, image]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!isModalOpen) return;
            if (event.key === "ArrowLeft") {
                handlePrevImage();
            } else if (event.key === "ArrowRight") {
                handleNextImage();
            }

            if (event.key === "Escape") {
                closeModal();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isModalOpen, handlePrevImage, handleNextImage, closeModal]);

    return (
        <Modal isOpen={isModalOpen}>
            {isModalOpen && (
                <div className="modal-container">
                    {isLoading ? (
                        <LoadingData />
                    ) : (
                        Array.isArray(image) && (
                            <>
                                <button className="modal-exit" onClick={closeModal}>
                                    X
                                </button>
                                <img
                                    src={image[currentImageIndex]}
                                    alt={`achievement-${currentImageIndex}`}
                                    className="achievements-image"
                                />
                                {children}
                            </>
                        )
                    )}
                </div>
            )}
        </Modal>
    );
};