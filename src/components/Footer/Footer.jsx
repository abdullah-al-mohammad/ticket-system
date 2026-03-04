import email from '../../assets/email.png';
import facebook from '../../assets/facebook.png';
import linkdien from '../../assets/linkdien.png';
import twitter from '../../assets/twitter.png';
const Footer = () => {
  return (
    <div className="bg-neutral">
      <footer className="footer sm:footer-horizontal text-neutral-content p-10 mt-8 mx-w-[1200px] mx-auto">
        <nav>
          <h6 className="footer-title text-white">CS — Ticket System</h6>
          <p className="w-80">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Saled</a>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Products & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav>
          <h6 className="footer-title">Information</h6>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Join Us</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social Links</h6>

          <a className="link link-hover flex gap-2">
            <img src={twitter} alt="" />
            <span>@CS — Ticket System</span>
          </a>
          <a className="link link-hover flex gap-2">
            <img src={linkdien} alt="" />
            <span>@CS — Ticket System</span>
          </a>
          <a className="link link-hover flex gap-2">
            <img src={facebook} alt="" />
            <span>@CS — Ticket System</span>
          </a>
          <a className="link link-hover flex gap-2">
            <img src={email} alt="" />
            <span>support@cst.com</span>
          </a>
        </nav>
      </footer>
      <div className="border-t"></div>
      <footer className="footer sm:footer-horizontal footer-center bg-neutral text-white p-4">
        <aside>
          <p>© {new Date().getFullYear()} — Ticket System. All rights reserved.</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
