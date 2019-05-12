import React from 'react';

import CategoryTestSub from './categoryTestSub';

const categoryTest = ({
    item
}) => (
    <div className='page-test-categories__content_block col-12 col-sm-6 col-md-4'>
        <h3>{item.category}</h3>
        {
            item.sub_category.map((subItem, index) => (
                <CategoryTestSub
                    key={index}
                    name={subItem}
                />
            ))
        }
    </div>
);

export default categoryTest;