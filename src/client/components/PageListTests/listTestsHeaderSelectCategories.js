import React, { Component } from 'react';

class ListTestsHeaderSelectCategories extends Component {
    render() {
        return (
            <select className={this.props.className} onChange={(e) => this.props.onChangeFunction(this, e)} defaultValue={0}>
                <option value='0'>{this.props.title}</option>
                {
                    this.props.testsCategories.map((item, i) => {
                        return <option key={i} value={item[this.props.fieldId]}>{item.name}</option>
                    })
                }
            </select>
        )
    }
}

export default ListTestsHeaderSelectCategories;