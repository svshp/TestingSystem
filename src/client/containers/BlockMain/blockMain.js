import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import SliderOfPictures from '../../components/SliderOfPictures/sliderOfPictures';
import ArraySlides from '../../data/ArraySlides/arraySlides';
import ListMenu from '../../components/MainMenu/listMenu.js';

import './blockMain.scss';

class BlockMain extends Component {
    render() {
        return (
            <div className={this.props.menu.sideMenu ? 'block-main show-side-menu' : 'block-main'}>
                <SliderOfPictures
                    data={ArraySlides}
                    height={200}
                    interval={60000}
                    showDots={true}
                    posDots={-20}
                />
                <h2>Block-main</h2>
                <Switch>
                    {ListMenu.map((item) => (
                        item.component ? <Route key={item.path} exact path={item.path} component={item.component} /> : ''
                    ))}
                </Switch>



            </div>
        )
    }
}

const mapStateToProps = (store) => ({
    menu: store.menu
})

export default connect(mapStateToProps)(BlockMain);