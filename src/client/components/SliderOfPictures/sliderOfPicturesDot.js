import React, { Component } from 'react';

import './sliderOfPicturesDot.scss';

class Dot extends Component {
    render() {
        const {
            active,
            onClick,
            indx,
            activeDotColor,
            dotColor
        } = this.props;

        return (
            <li className="slider__dots_dot"
                onClick={() => onClick(indx)}
                style={{ background: active ? activeDotColor : dotColor }}
            />
        )
    }

}

export default Dot;
