import React from "react";
import { TextField, Button, Grid, Container, Avatar, Typography } from "@material-ui/core";
import { styles } from "./Signin.style";
import { Formik } from "formik";
import firebase from "../../firebase/firebase.utils";
import * as Yup from 'yup';
import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined'
import {useHistory} from 'react-router-dom'

const handleGoogleButtonClick = () => {
  firebase.useGoogleProvider();
};

const initialValues = {
  email: "",
  password: "",
};

const signInVaildationSchema = Yup.object().shape({
  email: Yup.string().email('Invaiid Email').required('Email is requierd!'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should me 8 chars minimum. '),
});

const handleFormikSubmit = values => {
  firebase.login(values.email, values.password)
};

const Signin = () => {
  const Styles = styles();
  const history = useHistory();
  const handleClick = () => {
    history.push('/signup')
  }

  return (
    <Container maxWidth="sm" className={Styles.wrapper}>
       <Avatar className={Styles.avatar}><LockOutlinedIcon/></Avatar>
       <Typography variant='h4' component='h4' className={Styles.text}> Sign In </Typography>
      <Formik initialValues={initialValues} onSubmit={handleFormikSubmit} validationSchema={signInVaildationSchema}>
        {({ handleSubmit, values, handleChange, errors }) => (
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
                  error = {errors.email}
                  helperText={errors.email}
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
                  error = {errors.password}
                  helperText={errors.password}
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
      <Typography className={Styles.history}>
              If you have already an acoount please <span className={Styles.span} onClick={handleClick} >Sign Up</span>
      </Typography>
    </Container>
  );
};

export default Signin;
