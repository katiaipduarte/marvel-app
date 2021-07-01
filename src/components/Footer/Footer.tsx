import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import SocialIcon from '../SocialIcon/SocialIcon';
import { FooterContainer } from './Footer.style';

const Footer = (): JSX.Element => {
  return (
    <FooterContainer>
      <div className="container">
        <div className="social-icons">
          <SocialIcon name="github" href="https://github.com/katiaipduarte" icon={faGithub} />
          <SocialIcon name="linkedin" href="https://www.linkedin.com/in/katiaipduarte/" icon={faLinkedin} />
        </div>
        <div className="general-information">
          <p tabIndex={0} aria-label="Made By Katia Duarte">
            Katia Duarte
          </p>
          <p>{` • `}</p>
          <p tabIndex={0}>{`© ${new Date().getFullYear()}`}</p>
          <p>{` • `}</p>
          <a href="https://github.com/katiaipduarte/marvel-app" aria-label="Link to project github repo">
            Marvel App
          </a>
        </div>
        <div className="api-info">
          <a href="hhttps://developer.marvel.com/" aria-label="Link to Marvel API used">
            Marvel API
          </a>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
