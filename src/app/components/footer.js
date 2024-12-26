import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer"> {/* Add the class here */}
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="Facebook"
            width="32"
            height="32"
          />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
            width="32"
            height="32"
          />
        </a>
      </div>
      <div className="footer-contact">
        <p>MAXXGYM Ljubljana, Dunajska cesta 270, 1000 Ljubljana</p>
        <p>Telefon: 0590 41 900 | Email: info@maxxgym.si</p>
      </div>
    </footer>
  );
};

export default Footer;
