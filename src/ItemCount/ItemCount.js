import React, {useState} from 'react';
import Button from '@mui/material/Button';
import './ItemCount.css';

const ItemCount = ({initial, stock, onAdd}) => {

    const [counter, setCounter] = useState(initial);

    const handlerCounterUp = () =>{
        if(counter < stock){
        setCounter(counter+1);
        } else {
            console.log("no hay stock suficiente");
        }
    };
    const handlerCounterDown = () =>{
        if(counter > 1){
        setCounter(counter-1);
        } else {
            console.log("no se puede quitar mas productos");	
        }
    };

    return(
		<div className='itemCount'>
            <h4 className='itemCount_Stock'>Stock disponible: {stock - counter}</h4>
            <div className='buttonCounter'>
                <Button onClick={handlerCounterDown} variant="outlined" size="large">
                -</Button>
                {counter}
                <Button onClick={handlerCounterUp} variant="outlined" size="large">
                +</Button>
            </div>
            <div className='buttonAdd'>
            <Button onClick={onAdd} variant="contained" size="large" color="primary"> 
                Agregar al carrito
            </Button>
            </div>
		</div>
    );
};

export default ItemCount;
