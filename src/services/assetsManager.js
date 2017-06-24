class ImagesLoader {
    constructor() {
        //INIT PROPS
        this.weatherIcons = {};
        //Load Images
        this.loadWeatherIcons();
    }

    loadWeatherIcons(){
        const icon1 = require('../../assets/icons/1.png');
        const icon2 = require('../../assets/icons/2.png');
        const icon3 = require('../../assets/icons/3.png');
        const icon4 = require('../../assets/icons/4.png');
        const icon5 = require('../../assets/icons/5.png');
        const icon6 = require('../../assets/icons/6.png');
        const icon7 = require('../../assets/icons/7.png');
        const icon8 = require('../../assets/icons/8.png');
        const icon11 = require('../../assets/icons/11.png');
        const icon12 = require('../../assets/icons/12.png');
        const icon13 = require('../../assets/icons/13.png');
        const icon14 = require('../../assets/icons/14.png');
        const icon15 = require('../../assets/icons/15.png');
        const icon16 = require('../../assets/icons/16.png');
        const icon17 = require('../../assets/icons/17.png');
        const icon18 = require('../../assets/icons/18.png');
        const icon19 = require('../../assets/icons/19.png');
        const icon20 = require('../../assets/icons/20.png');
        const icon21 = require('../../assets/icons/21.png');
        const icon22 = require('../../assets/icons/22.png');
        const icon23 = require('../../assets/icons/23.png');
        const icon24 = require('../../assets/icons/24.png');
        const icon25 = require('../../assets/icons/25.png');
        const icon26 = require('../../assets/icons/26.png');
        const icon29 = require('../../assets/icons/29.png');
        const icon30 = require('../../assets/icons/30.png');
        const icon31 = require('../../assets/icons/31.png');
        const icon32 = require('../../assets/icons/32.png');
        const icon33 = require('../../assets/icons/33.png');
        const icon34 = require('../../assets/icons/34.png');
        const icon35 = require('../../assets/icons/35.png');
        const icon36 = require('../../assets/icons/36.png');
        const icon37 = require('../../assets/icons/37.png');
        const icon38 = require('../../assets/icons/38.png');
        const icon39 = require('../../assets/icons/39.png');
        const icon40 = require('../../assets/icons/40.png');
        const icon41 = require('../../assets/icons/41.png');
        const icon42 = require('../../assets/icons/42.png');
        const icon43 = require('../../assets/icons/43.png');
        const icon44 = require('../../assets/icons/44.png');

        this.weatherIcons = {
            icon1,
            icon2,
            icon3,
            icon4,
            icon5,
            icon6,
            icon7,
            icon8,
            icon11,
            icon12,
            icon13,
            icon14,
            icon15,
            icon16,
            icon17,
            icon18,
            icon19,
            icon20,
            icon21,
            icon22,
            icon23,
            icon24,
            icon25,
            icon26,
            icon29,
            icon30,
            icon31,
            icon32,
            icon33,
            icon34,
            icon35,
            icon36,
            icon37,
            icon38,
            icon39,
            icon40,
            icon41,
            icon42,
            icon43,
            icon44,
        }
    }
}

export default new ImagesLoader();