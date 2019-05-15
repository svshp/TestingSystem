function prepareDataTests(tests) {
    let newList = [];
    let flagFound;

    for (let i = 0; i < tests.categories.length; i++) {
        newList.push({category: tests.categories[i], type_sub_category: []});
        flagFound = false;
    
        for (let j = 0; j < tests.typeSubCategories.length; j++) {
            if (tests.typeSubCategories[j].cat_test_id === tests.categories[i].cat_test_id) {
                newList[newList.length - 1].type_sub_category.push(tests.typeSubCategories[j]);

                flagFound = true;
            } else if (flagFound) {
                break;
            }
        }
    }

    return newList;
}

module.exports = {
    prepareDataTests: prepareDataTests
}