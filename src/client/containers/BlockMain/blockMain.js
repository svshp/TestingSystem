import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import SliderOfPictures from '../../components/SliderOfPictures/sliderOfPictures';
import ArraySlides from '../../data/ArraySlides/arraySlides';
//import BlockFooter from '../BlockFooter/blockFooter';
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
                    posDots={-30}
                />
                <div className='block-main__content'>
                    <Switch className='block-main__content'>
                        {ListMenu.map((item) => (
                            item.component ? <Route key={item.path} exact path={item.path} component={item.component} /> : ''
                        ))}
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store) => ({
    menu: store.menu
})

export default connect(mapStateToProps)(BlockMain);