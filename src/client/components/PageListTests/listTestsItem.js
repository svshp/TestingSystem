import React from 'react';

import './listTestsItem.scss';

const itemTests = ({
    item
}) => (
    <div className='page-list-tests__container_item'>
        {item.name}
    </div>
);

export default itemTests;