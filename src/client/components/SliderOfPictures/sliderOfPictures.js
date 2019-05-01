import React, { Component } from 'react';
//import PropTypes from 'prop-types';

import Slide from './sliderOfPicturesSlide';
import Dot from './sliderOfPicturesDot';

import './sliderOfPictures.scss';

class SliderOfPictures extends Component {
    static defaultProps = {
        data: [],
        height: 200,
        activeDotColor: "#e8784e",
        interval: 5000,
        dotColor: "#909192",
        showDots: true,
        posDots: 0
    };

    state = {
        currentSlide: Math.round(Math.random() * this.props.data.length)
    };

    componentDidMount() {
        this.setState(
            {
                slideInterval: setInterval(this.nextSlide, this.props.interval)
            }
        );
    }

    goToSlide = (indx) => {
        this.setState({
            currentSlide: indx
        });

        this.resetInterval();
      };

    nextSlide = () => {
        if (this.state.currentSlide === this.props.data.length - 1) {
            this.setState({
                currentSlide: 0
            });

            return;
        }

        this.setState({
            currentSlide: this.state.currentSlide + 1
        });

        this.resetInterval();
    };
    
    prevSlide = () => {
        if (this.state.currentSlide === 0) {
            this.setState({
                currentSlide: this.props.data.length - 1
            });

            return;
        }

        this.setState({
            currentSlide: this.state.currentSlide - 1
        });

        this.resetInterval();
    };

    resetInterval = () => {
        clearInterval(this.state.slideInterval);

        this.setState({
            slideInterval: setInterval(this.nextSlide, this.props.interval)
        });
    };

    render() {
        const {
            data,
            height,
            activeDotColor,
            dotColor,
            showDots,
            posDots
        } = this.props;

        return (
            <div className='slider'>
                <ul className='slider__slides' style={{ height: height }}>
                    {
                        data.map((item, i) => (
                            <Slide
                            active={i === this.state.currentSlide}
                                src={item.src}
                                key={item.id}
                            />
                        ))
                    }
                </ul>
                {showDots ? (
                    <ul className='slider__dots'  style={{ top: posDots }}>
                        {
                            data.map((item, i) => (
                                <Dot
                                    activeDotColor={activeDotColor}
                                    dotColor={dotColor}
                                    key={i}
                                    active={i === this.state.currentSlide}
                                    onClick={this.goToSlide}
                                    indx={i}
                                />
                            ))
                        }
                    </ul>
                ) : (
                    ""
                )}
            </div>
        )
    }
}

export default SliderOfPictures;