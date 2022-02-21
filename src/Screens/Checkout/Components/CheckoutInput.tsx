import React, {FC} from 'react';

const width = window.innerWidth

interface InputProps{
    name: string
}

const  CheckoutInput:FC<InputProps> = ({name}):JSX.Element =>  {
    return (
        <div className='CheckoutInput' style={{width: width - 60}} >
            <p>{name}</p>
            <input />
        </div>
    );
}

export default CheckoutInput;