import React, { Component } from 'react';
import axios  from 'axios';

import ListCategoriesTests from './listCategoriesTests';
import CategoryTest from './categoryTest';

import './pageCategoriesTests.scss';

class PageCategoriesTests extends Component {
    state = {
        list: []
    }

    componentDidMount () {
        /*
        axios.get('http://localhost:3000/api/categories-tests/')
            .then((response) => {
                this.setState({
                    list: response.data.rows
                })
            })
            .catch(function (error) {
                console.log(error);
            });
        */

        this.setState({
            list: this.prepareData(ListCategoriesTests)
        });
    }

    prepareData(list) {
        let newList = [];
        let prevCategory, curCategory;
    
        for (let i = 0; i < list.length; i++) {
            curCategory = list[i].category;
        
            if (curCategory !== prevCategory) {
                newList.push({category: curCategory, sub_category: []});
            
                prevCategory = curCategory;
            }

            newList[newList.length - 1].sub_category.push(list[i].sub_category);
        }

        return newList;
    }

    render() {
        return (
            <div className='page-test-categories'>
                <div className='page-contacts__title row'>
                    <h2>Категории тестов</h2>
                </div>
                <div className='page-test-categories__content row'>
                    {this.state.list.map((item, index) => (
                        <CategoryTest
                            key={index}
                            item={item}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default PageCategoriesTests ;