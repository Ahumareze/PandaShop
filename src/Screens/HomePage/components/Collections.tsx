import React from 'react';
import CItem from './CItem';

function Collections() {
    return (
        <div className='Collections'>
            <p className="pageTitle">Collections</p>
            <div className="pageTitleLine"></div>
            <div className='Collections_list'>
                <CItem />
                <CItem />
                <CItem />
                <CItem />
            </div>
        </div>
    );
}

export default Collections;