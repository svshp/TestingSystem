import React, { Component } from 'react';

/*
const handleFacebook = (pUrl, pTitle, pImg, text) => {
    let url  = 'http://www.facebook.com/sharer.php?s=100';
    url += '&p[title]='     + encodeURIComponent(pTitle);
    url += '&p[summary]='   + encodeURIComponent(text);
    url += '&p[url]='       + encodeURIComponent(pUrl);
    url += '&p[images][0]=' + encodeURIComponent(pImg);

    window.open(url,'','toolbar=0,status=0,width=626,height=436');
}
*/

class Facebook extends Component {
    handleFacebook = (pUrl, pTitle, pImg, text) => {
        let url  = 'http://www.facebook.com/sharer.php?s=100';
        url += '&p[title]='     + encodeURIComponent(pTitle);
        url += '&p[summary]='   + encodeURIComponent(text);
        url += '&p[url]='       + encodeURIComponent(pUrl);
        url += '&p[images][0]=' + encodeURIComponent(pImg);
    
        window.open(url,'','toolbar=0,status=0,width=626,height=436');
    }

    render() {
        return (
            <div className='facebook'>
                <a onClick={this.handleFacebook("URL", "TITLE", "IMG_PATH", "DESC")}>
                    Facebook
                </a>
            </div>
        )
    }
}

export default Facebook;