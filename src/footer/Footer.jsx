import footer_icon from '../images/footer/tel_icon.svg';
import footer_mail from '../images/footer/mail_hraviratoms.svg';
import footer_facebook_icon from '../images/footer/facebook_icon.svg';
import footer_instagram_icon from '../images/footer/instagram_icon.svg';
import footer_tiktok_icon from '../images/footer/tik-tok.svg';
import footer_logo from '../images/footer/footer_logo.png';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer_main">
      <div className="container_1">
        <div className="footer_logo">
          <img src={footer_logo} alt="footer_logo" width="150px" height="150px"/>
        </div>
      </div>

      <p className="text_hraviratoms">hraviratoms.com</p>

      <div className="footer_number">
        <div className="footer_number_child">
          <img src={footer_icon} alt="footer_icon" width="24px" height="24px" />
          <p>+374 77 49 75 15</p>
        </div>
      </div>

      <div className="mail_hraviratoms">
        <img src={footer_mail} alt="footer_icon" width="24px" height="24px" className="mail_icon"/>
        <span>hraviratoms.com@gmail.com</span>
      </div>

      <div className="footer_divider">

      </div>

      <div className="contacts_hraviratoms">
        <img src={footer_facebook_icon} alt="facebook_icon" width="30px" height="30px" />
        <img src={footer_instagram_icon} alt="instagram_icon" width="30px" height="30px" />
        <img src={footer_tiktok_icon} alt="tiktok_icon" width="30px" height="30px" />
      </div>

    </div>
  )
}

export default Footer;