import { useState } from 'react';
import Modal from '../components/Modal';

const HomePage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>This is a Modal</h2>
        <p>Using React Portals with Next.js</p>
      </Modal>
    </div>
  );
};

export default HomePage;
