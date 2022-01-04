import * as React from "react";
import * as footer from "../css/modules/footer.module.css";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer>
      <div className={footer.navigation}>
        <Link to="/font-index">
          <span>Index A-Z</span>
          <span>102</span>
        </Link>
        <Link to="/navigator">
          <span>Navigator</span>
          <span>103</span>
        </Link>
        <Link to="/fonts/index">
          <span>Fonts</span>
          <span>201</span>
        </Link>
        <Link to="/projects">
          <span>Projects</span>
          <span>401</span>
        </Link>

        <Link to="/journal">
          <span>Journal</span>
          <span>501</span>
        </Link>
        <Link to="/custom">
          <span>Custom</span>
          <span>601</span>
        </Link>
        <Link to="/license">
          <span>License</span>
          <span>602</span>
        </Link>
        <Link to="/about">
          <span>Fonts</span>
          <span>701</span>
        </Link>

        <Link to="/imprint">
          <span>Imprint</span>
          <span>702</span>
        </Link>
        <Link to="/privacy-policy">
          <span>Privacy Policy</span>
          <span>703</span>
        </Link>
        <Link to="/terms-condition">
          <span>Terms &amp; Conditions</span>
          <span>704</span>
        </Link>
      </div>
      <div className={footer.bottom}>
        <div className={footer.links}>
          <a
            className={footer.twitter}
            href="https://twitter.com/hubfex"
            target="_blank"
            aria-label="Twitter"
          ></a>
          <a
            className={footer.instagram}
            href="https://twitter.com/hubfex"
            target="_blank"
            aria-label="Twitter"
          ></a>
          <a
            className={footer.behance}
            href="https://twitter.com/hubfex"
            target="_blank"
            aria-label="Twitter"
          ></a>
          <a
            className={footer.dribble}
            href="https://twitter.com/hubfex"
            target="_blank"
            aria-label="Twitter"
          ></a>
        </div>
        <div>Copyright &copy; {new Date().getFullYear()}</div>
      </div>
    </footer>
  );
};

export default Footer;
