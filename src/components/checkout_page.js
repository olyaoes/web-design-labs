import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Navigation from "./navigation";
import Footer from "./footer";

const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required").max(20, "Max 20 characters"),
    lastName: Yup.string().required("Last name is required").max(20, "Max 20 characters"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
        .required("Phone is required"),
    address: Yup.string().required("Address is required").max(100, "Max 100 characters"),
});

function CheckoutPage() {
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        console.log("Submitted values:", values);
        navigate("/success");
    };

    const handleGoBack = () => {
        navigate("/catalog");
    };

    return (
        <div>
            <Navigation />
            <div className="content-container">
            <h1 className="checkout-title">Checkout</h1>
                <Formik
                    initialValues={{ firstName: "", lastName: "", email: "", phone: "", address: "" }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form className="checkout-form">
                        <div className="form-field">
                            <label htmlFor="firstName">First Name</label>
                            <Field type="text" id="firstName" name="firstName" />
                            <ErrorMessage name="firstName" component="div" className="error" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="lastName">Last Name</label>
                            <Field type="text" id="lastName" name="lastName" />
                            <ErrorMessage name="lastName" component="div" className="error" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="email">Email</label>
                            <Field type="email" id="email" name="email" />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="phone">Phone Number</label>
                            <Field type="text" id="phone" name="phone" />
                            <ErrorMessage name="phone" component="div" className="error" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="address">Shipping Address</label>
                            <Field type="text" id="address" name="address" />
                            <ErrorMessage name="address" component="div" className="error" />
                        </div>
                        <div className="checkout-buttons">
                            <button type="button" onClick={handleGoBack} className="back-btn">
                                Go Back
                            </button>
                            <button type="submit" className="continue-btn">Continue</button>
                        </div>
                    </Form>
                </Formik>
            </div>
            <Footer />
        </div>
    );
}

export default CheckoutPage;
