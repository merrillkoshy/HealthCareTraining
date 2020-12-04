import { Modal, Button } from "react-bootstrap";
import Link from "next/link";

function LoginModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Total Medical Training Solutions | Knowledge to Wisdom
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <section className="login-area ptb-100">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="login-image">
                  <img src="/images/login-background.png" alt="image" />
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="login-form">
                  <h3>Welcome Back!</h3>
                  <p>Please login to your account.</p>
                  <form>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="checkme"
                          />
                          <label className="form-check-label" htmlFor="checkme">
                            Keep me Login
                          </label>
                        </div>
                      </div>

                      <div className="col-lg-6 text-right">
                        <p className="forgot-password">
                          <Link href="#">
                            <a>Forgot Password?</a>
                          </Link>
                        </p>
                      </div>

                      <div className="col-lg-12">
                        <button
                          type="submit"
                          className="k2w-button btn btn-primary"
                        >
                          Login Now!
                        </button>
                        <br />
                        <span>
                          New User?{" "}
                          <Link href="/signup">
                            <a className="sign-up">Sign Up!</a>
                          </Link>
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginModal;
