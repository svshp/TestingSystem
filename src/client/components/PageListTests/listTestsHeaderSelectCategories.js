import React, { Component } from 'react';

class ListTestsHeaderSelectCategories extends Component {
    render() {
        return (
            <select className={this.props.className} onChange={(e) => this.props.onChangeFunction(this.props.thisContent, e)} defaultValue={0}>
                <option value='0'>{this.props.title}</option>
                {
                    this.props.testsCategories.map((item, i) => {
                        return <option key={i} value={item.cat_test_id}>{item.name}</option>
                    })
                }
            </select>
        )
    }
}

export default ListTestsHeaderSelectCategories;