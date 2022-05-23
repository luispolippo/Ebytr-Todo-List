import React from 'react';
import { FaAsterisk } from 'react-icons/fa/';

function Header() {
  return (
    <header className="grid grid-cols-3 items-cente text-sky-500 py-2 shadow-md">
      <div className="flex justify-center items-center gap-3 h-full text-2xl">
        <FaAsterisk />
        <p>Ebytr</p>
      </div>
      <div className="text-3xl text-center">
        <h2 className="">Lista de Tarefas</h2>
      </div>
    </header>
  );
}

export default Header;
