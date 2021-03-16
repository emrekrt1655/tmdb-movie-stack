import React from "react";
import { TextField, Button, Grid, Container } from "@material-ui/core";
import { styles } from "./Signup.style";
import { useFormik } from "formik";
import firebase from '../../firebase/firebase.utils'
import * as Yup from 'yup';

const handleGoogleButtonClick = () => {
  firebase.useGoogleProvider();
}

const signUpVaildationSchema = Yup.object().shape({
  displayName: Yup.string().required('Display Name is requierd!'),
  email: Yup.string().email('Invaiid Email').required('Email is requierd!'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should me 8 chars minimum. '),
});

const Signup = () => {
  const Styles = styles();
  
  const formik = useFormik({
    initialValues: {
      displayName: "",
      email: "",
      password: "",
    },
    validationSchema: signUpVaildationSchema, 

     onSubmit: values => {
        firebase.register(values.displayName, values.email,values.password);        
        },
  });
  return (
    <Container maxWidth="sm" className={Styles.wrapper}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              name="displayName"
              id="outlined-basic"
              label="Display Name"
              variant="outlined"
              fullWidth
              value={formik.values.displayName}
              onChange={formik.handleChange}
              error = {formik.errors.displayName}
              helperText={formik.errors.displayName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error = {formik.errors.email}
              helperText={formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              fullWidth
              value={formik.values.password}
              onChange={formik.handleChange}
              error = {formik.errors.password}
              helperText={formik.errors.password}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign Up
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth onClick={handleGoogleButtonClick}>
              Sign Up with Google
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Signup;
