import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGlobe,
    faEnvelope,
    faPhone,
    faMapMarker
} from "@fortawesome/free-solid-svg-icons";

import { API_KEY_GOOGLE_MAP } from '../../data/Constants/constants';

import './pageContacts.scss';

class PageContacts extends Component {
    initMap = () => {
        let map = new window.google.maps.Map(
            document.querySelector('.page-contacts__content_map'),
            {
                center: {
                    lat: 50.9125, lng: 34.803
                },
                zoom: 16,
                backgroundColor: '#3f6789'
            }
        );

        let marker = new window.google.maps.Marker({
            position: new window.google.maps.LatLng(50.9122, 34.8029),
            map: map
          });
    };
   

    componentDidMount() {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY_GOOGLE_MAP}`;
        script.async = true;
        script.defer = true;
        script.setAttribute = ('name', '');
        script.addEventListener('load', () => {
            this.initMap();
        });
    
        document.body.appendChild(script);
    }

    render() {
        return (
            <div className='page-contacts'>
                <div className='page-contacts__title row'>
                    <h2>Контакты</h2>
                </div>
                <div className='page-contacts__content row'>
                    <div className='page-contacts__content_links col6'>
                        <div className='page-contacts__content_links-item'>
                            <FontAwesomeIcon icon={faGlobe} />
                            <a href='http://www.maliugin.com.ua/' target='_blank' rel='nofollow noopener noreferrer'>www.maliugin.com.ua</a>
                        </div>
                        <div className='page-contacts__content_links-item'>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <a href='mailto:svs_hp@i.ua'>svs_hp@i.ua</a>
                        </div>
                        <div className='page-contacts__content_links-item'>
                            <FontAwesomeIcon icon={faPhone} />
                            <a href='tel:+380675408267'>+380(67)540-82-67</a>
                        </div>
                        <div className='page-contacts__content_links-item'>
                            <FontAwesomeIcon icon={faMapMarker} />
                            Nezalezhnosti Square, 2, Sumy, Ukraine, 40000
                        </div>
                    </div>
                    <div className='page-contacts__content_map col-6'>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageContacts;