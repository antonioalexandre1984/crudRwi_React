import { FaEdit, FaTrash } from 'react-icons/fa';
import { useState } from 'react';
import {EditUserModal} from './components/EditUserModal'

function App() {
   const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([
     {
      id: 1,
      name: "Alexandre",
      email: "alexandre@mail.com",
      telephone: "8398888888",
      address: "Rua Santa Maria",
      cpf: "05055505022",
    },
        {
      id: 2,
      name: "Lara",
      email: "lara@mail.com",
      telephone: "8398888888",
      address: "Rua Santa Maria",
      cpf: "05055505022",
    },
  ])
   const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
    // Função para adicionar um novo usuário
  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  // Função para atualizar um novo usuário
   const updateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
  };

   // Função para excluir um usuário
  const deleteUser = (userId) => {
    const filteredUsers = users.filter((user) => user.id !== userId);
    setUsers(filteredUsers);
  };

  return (
    <div className="bg-primary min-h-screen w-screen p-0 m-0 flex flex-col items-center justify-center">
      <div className="container mx-auto">
        <section className=" bg-slate-400 text-center mb-4 p-4 flex justify-center items-center ">
          <h1 className="text-black  border-black p-2 font-body text-4xl">
              Crud User
            </h1>
        </section>
        
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Status</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Telephone</th>
              <th className="border p-2">Address</th>
              <th className="border p-2">CPF</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
   <tbody>
  {users.map((user) => (
    <tr key={user.id} className="bg-gray-100">
      <td className="border p-2 flex items-center justify-center">
        <input type="checkbox" className="form-checkbox h-6 w-6 text-primary" />
      </td>
      <td className="border p-2">{user.name}</td>
      <td className="border p-2">{user.email}</td>
      <td className="border p-2">{user.telephone}</td>
      <td className="border p-2">{user.address}</td>
      <td className="border p-2">{user.cpf}</td>
      <td className="border p-2">
        <div className="flex justify-center p-2 gap-2">
          <button onClick={() => openModal(user)}>
            <FaEdit size={20} color="#52B4FF" />
          </button>
          <button onClick={() => deleteUser(user.id)}>
            <FaTrash size={18} color="#FF001E" />
          </button>
        </div>
      </td>
    </tr>
  ))}
</tbody>

        </table>
         <button
          onClick={() => addUser({
                  id: Math.max(...users.map((user) => user.id)) + 1,
                  name: "Novo Usuário",
                  email: "novousuario@mail.com",
                  telephone: "0000000000",
                  address: "Endereço",
                  cpf: "12345678901",
                })}
          className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Add User
    </button> 
      </div>
      <EditUserModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        user={selectedUser}
        updateUser={updateUser}
      />
    </div>
  );
}

export default App;