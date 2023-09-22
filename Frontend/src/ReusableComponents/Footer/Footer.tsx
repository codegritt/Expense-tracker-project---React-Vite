const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center mt-10 text-xs text-secondary-heavy leading-5 tracking-wider">
      <div>
        Copyright &copy; {currentYear} Gokul's Money manager Pte Ltd | All
        Rights Reserved. Version 1.0
      </div>
      <div>
        <a target="_blank" rel="noreferrer">
          Privacy Policy
        </a>
        &bull;
        <a target="_blank" rel="noreferrer">
          Terms and Conditions
        </a>
        &bull;
        <a target="_blank" rel="noreferrer">
          FAQ
        </a>
      </div>
    </footer>
  );
};

export default Footer;
