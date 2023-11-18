import React from "react";
import * as yup from "yup";
import { Formik, ErrorMessage, Form, Field } from 'formik'
import * as Components from "./components";
import axios from 'axios';

const Login = () => {
    const [signIn, toggle] = React.useState(true);

    const initialValues = {
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        password: '',
        confirmPassword: '',
        userType: ''
    }

    const validationSchema = yup.object().shape({
        firstName: yup.string().required("First name is required"),
        lastName: yup.string().required("Last name is required"),
        gender: yup.string().oneOf(["Male", "Female"], "Required").required("Gender is required"),
        email: yup.string().email("Email is invalid").required("Email is required"),
        password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
        confirmPassword: yup.string().oneOf([yup.ref('password')], "Password not matched").required("Password is required"),
        userType: yup.boolean().required().oneOf(["Customer", "Trainer"], 'Selecting user type is required')
    })

    const onSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            gender: this.state.gender,
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            userType: this.state.userType
        }

        axios.post('http://localhost:3000/login', newUser)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));


        this.setState({
            description: '',
            responsible: '',
            priority: '',
            isComplited: false
        })
    }

    // const onSubmit = (values, { resetForm, setSubmitting }) => {
    //     console.log(values);
    //     setTimeout(() => {
    //         resetForm();
    //         setSubmitting(false);
    //     }, 2000);
    // };

    return (
        <Components.Container>
            <Components.SignUpContainer signingIn={signIn}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {(props) => (
                        <Form>
                            <Components.Form>
                                <Components.Heading3>Create Account</Components.Heading3>
                                <Field as={Components.Input} type="text" name="firstName" placeholder="Enter your First Name" />
                                <ErrorMessage className="text-red-500 text-xs" name="firstName" component="div" />
                                <Field as={Components.Input} type="text" name="lastName" placeholder="Enter your Last Name" />
                                <ErrorMessage className="text-red-500 text-xs" name="lastName" component="div" />
                                <div className="flex items-center justify-items-stretch">
                                    <div className="col-auto">
                                        <Field as={Components.Paragraph2}>Gender</Field>
                                    </div>
                                    <div className="col-auto">
                                        <Components.Input type="radio" name="gender" value="Male" id="male" checked="checked" />
                                        <Components.Label htmlFor="male">Male</Components.Label>
                                    </div>
                                    <div className="col-auto">
                                        <Components.Input type="radio" name="gender" value="Female" id="female" />
                                        <Components.Label htmlFor="female">Female</Components.Label>
                                    </div>
                                </div>

                                <ErrorMessage className="text-red-500 text-xs" name="gender" component="div" />
                                <Field as={Components.Input} type="email" name="email" placeholder="Email" />
                                <ErrorMessage className="text-red-500 text-xs" name="email" component="div" />
                                <Field as={Components.Input} type="password" name="password" placeholder="Password" />
                                <ErrorMessage className="text-red-500 text-xs" name="password" component="div" />
                                <Field as={Components.Input} type="password" name="confirmPassword" placeholder="Confirm your password" />
                                <ErrorMessage className="text-red-500 text-xs" name="confirmPassword" component="div" />
                                <div className="flex items-center left-0">
                                    <div className="col-auto">
                                        <Components.Input type="radio" name='userType' value="Customer" id="Customer" checked="checked" />
                                        <Components.Label htmlFor="userType">Customer</Components.Label>
                                    </div>
                                    <div className="col-auto">
                                        <Components.Input type="radio" name='userType' value="Trainer" id="Trainer" />
                                        <Components.Label htmlFor="userType">Personal Trainer</Components.Label>
                                    </div>
                                </div>
                                <ErrorMessage className="text-red-500 text-xs" name="userType" component="div" />
                                <Components.Button type='submit' disabled={props.isSubmitting}>
                                    {props.isSubmitting ? "Loading" : "Sign up"}
                                </Components.Button>
                            </Components.Form>
                        </Form>
                    )}
                </Formik>
            </Components.SignUpContainer>
            <Components.SignInContainer signingIn={signIn}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}>
                    <Components.Form>
                        <Components.Title>Sign in</Components.Title>
                        <Field as={Components.Input} type="email" name="email" placeholder="Enter your email" />
                        <ErrorMessage className="text-red-500 text-xs" name="email" component="div" />
                        <Field as={Components.Input} type="password" name="password" placeholder="Enter your password" />
                        <ErrorMessage className="text-red-500 text-xs" name="password" component="div" />
                        <Components.Anchor href="#">Forgot your password?</Components.Anchor>
                        <Components.Button type='submit' >Sign In</Components.Button>
                    </Components.Form>
                </Formik>
            </Components.SignInContainer>
            <Components.OverlayContainer signingIn={signIn}>
                <Components.Overlay signingIn={signIn}>
                    <Components.LeftOverlayPanel signingIn={signIn}>
                        <Components.Title>Ready to crush your fitness goals?</Components.Title>
                        <Components.Paragraph>
                            Log in and let the journey start!
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(true)}>
                            Sign In
                        </Components.GhostButton>
                    </Components.LeftOverlayPanel>
                    <Components.RightOverlayPanel signingIn={signIn}>
                        <Components.Title>Hey there!</Components.Title>
                        <Components.Paragraph>
                            Enter your personal details and start journey with us
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(false)}>
                            Sign Up
                        </Components.GhostButton>
                    </Components.RightOverlayPanel>
                </Components.Overlay>
            </Components.OverlayContainer>
        </Components.Container>
    );
}

export default Login