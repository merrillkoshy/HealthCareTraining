import Layout from "../components/layouts/Layout";
import { Form, Button, Col, Container, InputGroup } from "react-bootstrap";
import PageHeaders from "../components/header/PageHeaders";

const SignUp = () => {
  return (
    <Layout>
      <PageHeaders title={"Sign Up"} />
      <Container className="mx-auto mt-5">
        <Form className="mx-auto my-5">
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue="John"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Doe"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form.Row>
          {/* Company Identity */}
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="cpname">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Great Health"
                defaultValue="Great Health"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="cptitle">
              <Form.Label>Occupation Title</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Manager"
                defaultValue="Manager"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="cpdept">
              <Form.Label>Department</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Department"
                  aria-describedby="Department"
                  required
                />
              </InputGroup>
            </Form.Group>
          </Form.Row>
          {/* End */}
          {/* Address Group */}
          <Form.Row>
            <Form.Group as={Col} controlId="atype">
              <Form.Label>Address Type</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>Office</option>
                <option>Home</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="atype">
              <Form.Label>Address Type</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>Office</option>
                <option>Home</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button className="k2w-button" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </Layout>
  );
};
export default SignUp;
