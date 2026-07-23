import { Github, Linkedin, Download } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__col">
          <h3 className="footer__heading">Location</h3>
          <p>Oklahoma City, OK</p>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Connect</h3>
          <div className="footer__social">
            <a
              href="https://www.linkedin.com/in/stephentannersmith"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://github.com/stephentannersmith"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
          </div>
        </div>

        <div className="footer__col">
          <a
            className="btn btn--outline"
            href="/assets/Tanner Smith Resume 2023.pdf"
            download="Tanner_Smith_Resume"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </div>

      <p className="footer__copy container">
        &copy; {new Date().getFullYear()} Tanner Smith
      </p>
    </footer>
  );
}
