import React from 'react';

function InputBar() {
  return (
    <div className="py-4 bg-gradient-to-r from-sky-500 to-sky-600 flex flex-col md:flex-row justify-around items-center gap-2 shadow-inner shadow-slate-600">
      <input type="text" placeholder="Título" className="w-2/4 md:w-1/4 input-bar-inputs" />
      <input type="text" placeholder="Digite sua tarefa" className="w-3/4 md:w-2/4 input-bar-inputs" />
      <button type="button" className="input-bar-button md:mt-0 md:w-auto md:px-3">Adicionar</button>
    </div>
  );
}

export default InputBar;
