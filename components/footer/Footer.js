import Link from "next/link";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-area ptb-100 pb-0 bg-image">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <Link href="#">
                  <a className="logo">
                    <img src="/images/logo2.png" alt="logo2" />
                  </a>
                </Link>
                <p>
                  Providing total medical training solutions for best
                  opportunities to update knowledge, skills and practices of
                  health professionals & achieve health certifications under the
                  supervision of International faculty.
                </p>

                <ul className="social-list">
                  <li>
                    <Link href="#">
                      <a>
                        <i className="icofont-facebook"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>
                        <i className="icofont-twitter"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>
                        <i className="icofont-instagram"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>
                        <i className="icofont-linkedin"></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget pl-5">
                <h3>Courses</h3>

                <ul className="list">
                  <li>
                    <Link href="#">
                      <a>Search Courses</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Download Brochure</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Course Registration & Payment</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Access</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Media</h3>

                <ul className="list">
                  <li>
                    <Link href="#">
                      <a> Research</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Industry updates</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Blogs</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a> Features Talks</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>About Us</h3>

                <ul className="list">
                  <li>
                    <Link href="#">
                      <a>Location</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Accreditations</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Certifications</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Partners</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-6">
                <p>Copyright @2020 Knowledge To Wisdom. All rights reserved</p>
              </div>

              <div className="col-lg-6 col-md-6">
                <ul>
                  <li>
                    <Link href="#">
                      <a>Terms & Conditions</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
