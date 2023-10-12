/* eslint-disable react/prop-types */
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Define o elemento raiz do aplicativo

const modalStyles = {
  content: {
    width: '400px',
    margin: 'auto',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    padding: '20px',
    background: 'white',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
};

export function EditUserModal({ isOpen, closeModal, user, updateUser }) {
  // Implemente a lógica de edição de usuário aqui
  if (!user) {
    return null; // Ou qualquer outra ação apropriada, como exibir uma mensagem de erro
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Editar Usuário"
      style={modalStyles}
    >
      <h2>Editar Usuário</h2>
      <form>
        {/* Renderize o formulário de edição aqui */}
        {/* Exemplo: */}
        <label>
          Nome:
          <input type="text" value={user.name} onChange={(e) => updateUser({ ...user, name: e.target.value })} />
        </label>
        {/* Repita isso para outros campos */}
        <button onClick={closeModal}>Fechar</button>
        <button onClick={() => updateUser(user)}>Salvar</button>
      </form>
    </Modal>
  );
}


