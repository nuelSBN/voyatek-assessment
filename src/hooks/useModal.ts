import { useState, useCallback } from "react";

export type ContentType = "flights" | "hotels" | "activity" | null;

type UseModalReturnType = {
  isOpen: boolean;
  openModal: (contentType: ContentType) => void;
  closeModal: () => void;
  contentType: ContentType;
};

const useModal = (): UseModalReturnType => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentType, setContentType] = useState<ContentType>(null);

  const openModal = useCallback((contentType: ContentType) => {
    setIsOpen(true);
    setContentType(contentType);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setContentType(null);
  }, []);

  return {
    isOpen,
    contentType,
    openModal,
    closeModal,
  };
};

export default useModal;
