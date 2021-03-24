import React from "react";
import {
  TextField,
  Button,
  Grid,
  Container,
  Avatar,
  Typography,
} from "@material-ui/core";
import { styles } from "./ForgetPassword.style";
import { Formik } from "formik";
import firebase from "../../firebase/firebase.utils";
import * as Yup from "yup";
import LockOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import { useHistory } from "react-router-dom";

const initialValues = {
  email: "",
};

const signInVaildationSchema = Yup.object().shape({
  email: Yup.string().email("Invaiid Email").required("Email is requierd!"),
});



const ForgetPassword = () => {
  const Styles = styles();
  const history = useHistory();

  const handleFormikSubmit = (values) => {
    firebase.forgetPassword(values.email);
    history.push("/");
  };
  
  return (
    <Container maxWidth="sm" className={Styles.wrapper}>
      <Avatar className={Styles.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography variant="h4" component="h4" className={Styles.text}>
        {" "}
        Forget Password{" "}
      </Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={handleFormikSubmit}
        validationSchema={signInVaildationSchema}
      >
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
                  error={errors.email}
                  helperText={errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default ForgetPassword;
