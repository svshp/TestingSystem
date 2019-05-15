import React from 'react';

import TypeCategoryTestSub from './typeCategoryTestSub';

const categoryTest = ({
    item
}) => (
    <div className='page-categories-tests__content_block col-12 my-col-md-6 my-col-lg-4 my-col-xl-3'>
        <h3>{item.category.name}</h3>
        {
            item.type_sub_category.map((subItem, index) => (
                <TypeCategoryTestSub
                    key={index}
                    subItem={subItem}
                />
            ))
        }
    </div>
);

export default categoryTest;