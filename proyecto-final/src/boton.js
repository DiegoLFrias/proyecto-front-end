import React, { useState } from 'react';
import Tabla from './componentes/Tabla/tabla'

function Botones() {
  const [show, setShow] = useState(true);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? 'No Mostrar' : 'Mostrar'}
      </button>

      {show ? (
        <Tabla/>
      ) : (
        <div></div>
      )}
    </>
  );
};
export default Botones;