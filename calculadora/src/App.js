import './App.css';
import logoM from './imagenes/logoM.png'
import Boton from './componentes/Boton'
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react'
import { evaluate } from 'mathjs';

function App() {

const [input, setInput] = useState('');
const addInput = val => {
  setInput(input + val);
};
console.log(input)
const resultado = () => {
  if(input){
    setInput(evaluate(input))
  }else{
    alert('Ingrese valores para realizar los cálculos')
  }
};

  return (
    <div className='App'>
      <div className='LogoM'>
        <img
          src={logoM}
          className='logo-Mi-camino'
          alt='logoM'
        />
        <div className='contCalculadora'>
        <Pantalla input={input} />
          <div className='fila'>
            <Boton manejarClick={addInput}>7</Boton>
            <Boton manejarClick={addInput}>8</Boton>
            <Boton manejarClick={addInput}>9</Boton>
            <Boton manejarClick={addInput}>/</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={addInput}>4</Boton>
            <Boton manejarClick={addInput}>5</Boton>
            <Boton manejarClick={addInput}>6</Boton>
            <Boton manejarClick={addInput}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={addInput}>1</Boton>
            <Boton manejarClick={addInput}>2</Boton>
            <Boton manejarClick={addInput}>3</Boton>
            <Boton manejarClick={addInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={resultado}>=</Boton>
            <Boton manejarClick={addInput}>0</Boton>
            <Boton manejarClick={addInput}>.</Boton>
            <Boton manejarClick={addInput}>+</Boton>
          </div>
          <div className='fila'>
            <BotonClear manejarClick={() => setInput('')}>Clear</BotonClear>
          </div>
        </div>
      </div>
<div>
</div>
    </div>
  );
}

export default App;
