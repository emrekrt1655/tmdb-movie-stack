import React from "react";
import { TextField, Button, Grid, Container } from "@material-ui/core";
import { styles } from "./Signin.style";
import { Formik } from "formik";
import firebase from "../../firebase/firebase.utils";

const handleGoogleButtonClick = () => {
  firebase.useGoogleProvider();
};

const initialValues = {
  email: "",
  password: "",
};

const handleFormikSubmit = (values) => {
  alert(JSON.stringify(values, null, 2));
};

const Signin = () => {
  const Styles = styles();

  return (
    <Container maxWidth="sm" className={Styles.wrapper}>
      <Formik initialValues={initialValues} onSubmit={handleFormikSubmit}>
        {({ handleSubmit, values, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  value={values.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  value={values.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Sign In
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleGoogleButtonClick}
                >
                  Sign In with Google
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default Signin;
