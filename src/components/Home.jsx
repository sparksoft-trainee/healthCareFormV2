import { Form } from "@formio/react";
import { Container } from "react-bootstrap";

const Home = () => {
  const onSubmitHandler = (submission) => {
    console.log(submission);
  };

  return (
    <>
      <Container className="mt-5">
        <div className="card p-3">
          <h5 className="card-title">Health Care Form</h5>
          <div className="card-body bg-light rounded-3">
            <Form
              src={"https://ycyicwfoujxdyym.form.io/axis"}
              onSubmit={onSubmitHandler}
            />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home