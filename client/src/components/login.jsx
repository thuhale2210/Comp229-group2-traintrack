import React from "react";
import * as yup from "yup";
import { Formik, ErrorMessage } from 'formik'
import * as Components from "./components";

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

    const onSubmit = (values, props) => {
        console.log(values)
        console.log(props)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
    }

    return (
        <Components.Container>
            <Components.SignUpContainer signingIn={signIn}>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Components.Form>
                            <Components.Heading3>Create Account</Components.Heading3>
                            <Components.Input type="text" placeholder="Enter your First Name" helperText={<ErrorMessage name='name'/>}/>
                            <Components.Input type="text" placeholder="Enter your Last Name" />
                            <div className="row">
                                <div className="col-auto">
                                    <Components.Paragraph2>Your gender</Components.Paragraph2>
                                </div>
                                <div className="col-auto">
                                    <Components.Input type="radio" name="gender" value="Male" id="male" />
                                    <Components.Label htmlFor="male">Male</Components.Label>
                                </div>
                                <div className="col-auto">
                                    <Components.Input type="radio" name="gender" value="Female" id="female" />
                                    <Components.Label htmlFor="female">Female</Components.Label>
                                </div>

                            </div>
                            <Components.Input type="email" placeholder="Email" />
                            <Components.Input type="password" placeholder="Password" />
                            <Components.Input type="password" placeholder="Confirm your password" />
                            <div className="row">
                                <div className="col-auto">
                                    <Components.Input type="radio" name='userType' value="Customer" id="Customer" />
                                    <Components.Label htmlFor="userType">Customer</Components.Label>
                                </div>
                                <div className="col-auto">
                                    <Components.Input type="radio" name='userType' value="Trainer" id="Trainer" />
                                    <Components.Label htmlFor="userType">Personal Trainer</Components.Label>
                                </div>
                            </div>
                            <Components.Button>Sign Up</Components.Button>
                        </Components.Form>
                    )}
                </Formik>
            </Components.SignUpContainer>
            <Components.SignInContainer signingIn={signIn}>
                <Components.Form>
                    <Components.Title>Sign in</Components.Title>
                    <Components.Input type="email" placeholder="Enter your email" />
                    <Components.Input type="password" placeholder="Enter your password" />
                    <Components.Anchor href="#">Forgot your password?</Components.Anchor>
                    <Components.Button>Sign In</Components.Button>
                </Components.Form>
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