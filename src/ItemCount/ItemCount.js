import React, {useState} from 'react';
import Button from '@mui/material/Button';
import './ItemCount.css';

const ItemCount = () => {

    const [counter, setCounter] = useState(10);

    const handlerCounterUp = () =>{
        setCounter(counter+1);
    };
    const handlerCounterDown = () =>{
        setCounter(counter-1);
    };

    return(
		<div className='itemCount'>
            <h4 className='itemCount_Stock'>Stock disponible: {counter}</h4>
            <div className='buttonCounter'>
                <Button onClick={handlerCounterUp} variant="outlined" size="large">
                +</Button>
                <Button onClick={handlerCounterDown} variant="outlined" size="large">
                -</Button>
            </div>
		</div>
    );
};

export default ItemCount;