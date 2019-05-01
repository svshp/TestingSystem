import React, { Component } from 'react';

import './sliderOfPicturesSlide.scss';

class Slide extends Component {
    render() {
        const {
            src,
            active
        } = this.props;
    
        return (
            <li className={active ? 'slider__slides_slide slider__slides_slide-active' : 'slider__slides_slide'}>
                <img src={src} alt='' />
            </li>
        )
    }
}

export default Slide;
