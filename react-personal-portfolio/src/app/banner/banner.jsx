import "./banner.css";
import device from '../Responses/breakpoints.jsx';

const banner_media = `

    @media ${device.desktopL} {

    }

    @media ${device.desktop}{

    }

    @media ${device.laptopL}{

    }
    @media ${device.laptop}{

    }

    @media ${device.tablet}{

    }
    
    @media ${device.mobileL}{

    }
    
    @media ${device.mobileM}{

    }
    @media ${device.mobileS}{

    }

`;

export default function Banner(){
    return (
        <banner_media/> 
    )

};