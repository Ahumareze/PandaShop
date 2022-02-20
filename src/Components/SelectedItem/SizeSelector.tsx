import React, {FC} from 'react';

interface selectorProps {
    tag: any,
    active: boolean,
    onClick: (e: any) => void
}

const SizeSelector:FC<selectorProps> = ({tag, active, onClick}):JSX.Element => {
    return (
        <div className='SizeSelector' onClick={() => onClick(tag)} style={active ? {backgroundColor: 'black', color: 'white'} : {} } >
            {tag}
        </div>
    );
}

export default SizeSelector;