// components/Footer.js
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Importing social media icons

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="socials">
          <a href="https://github.com/aksashakeel" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/aqsa-shakeel-5a81142b5" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
}
