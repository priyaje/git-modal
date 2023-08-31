import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #34efec;
`;

const Button = styled.button`
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #b269b8;
  min-width: 100px;
  color: #f3eaea;

  font-size: 24px;
  cursor: pointer;
`;

const ModalButton = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Container>
      <Button onClick={openModal}>Ice me!</Button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </Container>
  );
};

export default ModalButton;
