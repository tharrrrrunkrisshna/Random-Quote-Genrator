import * as React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Footer.css';

const Footer =()=>
{
    return(
    <footer>
        <div className='footer'>
        <center className='icon'>
        <FacebookIcon style={{marginLeft:"20px"}}/>
        <InstagramIcon style={{marginLeft:"20px"}}/>
        <TwitterIcon style={{marginLeft:"20px"}}/>
        <h6>Contact Details : 0481- 265 7483</h6>
        </center>
        </div>
    </footer>
    )
}
export default Footer