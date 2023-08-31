import React, { useCallback, useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";

import styled from "styled-components";
import { Close } from "@material-ui/icons";

const BackGround = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(170, 105, 192, 0.7);
  position: fixed;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 2fr 2fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalImage = styled.img`
  width: 100%;
  height: 83%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  line-height: 1%.8;
  color: #000;

  button {
    padding: 10px 24px;
    background: pink;
    color: #000;
    border: none;
    cursor: pointer;
  }

  p {
    margin-bottom: 1rem;
  }
`;

const CloseModalButton = styled(Close)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  height: 32px;
  width: 32px;
  padding: 0;
  z-index: 10;
`;

const Modal = ({ showModal, setShowModal }) => {
  const ModalRef = useRef();

  const animation = useSpring({
    config: { duration: 250 },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const openNewHandle = () => {
    setShowModal((prev) => !prev);
  };

  const closeModal = (e) => {
    if (ModalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => {
      document.removeEventListener("keydown", keyPress);
    };
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <BackGround ref={ModalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper showmodal={showModal}>
              <ModalImage src="https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
              <ModalContent>
                <h1> Ready for Delicious Yum?</h1>
                <p>Get a sale on flavors!</p>
                <button>Try now!</button>
              </ModalContent>
              <CloseModalButton
                aria-label="Close Modal"
                onClick={openNewHandle}
              />
            </ModalWrapper>
          </animated.div>
        </BackGround>
      ) : null}
    </>
  );
};

export default Modal;
