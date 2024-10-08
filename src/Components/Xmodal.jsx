import React, { useState } from "react";
import styles from "./Xmodal.module.css";
import "../CSS/Xmodal.css";

let Xmodal = ({ setOpenModal, setOpenModalBackground }) => {
    let [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: "",
        dob: "",
    });

    let handleFormDataChange = (e) => {
        let { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    let validationChecks = () => {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            window.alert("Invalid email. Please check your email address.");
            return;
        }

        if (formData.phone.length < 10) {
        window.alert(
            "Invalid phone number. Please enter a 10-digit phone number."
        );
        return;
        }

        let inputDate = new Date(formData.dob);
        let currentDate = new Date();
        if (inputDate > currentDate) {
            window.alert(
                "Invalid date of birth. Date of birth cannot be in the future."
            );
            return;
        }
    };

    return (
        <div
            className="modal"
            onClick={() => {
                setOpenModal(false);
                setOpenModalBackground(false);
                setFormData((prevData) => ({
                    ...prevData,
                    username: "",
                    email: "",
                    phone: "",
                    dob: "",
                }));
            }}
        >
            <div
                className="modal-content"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className={styles.modalHeader}>
                    <h1>Fill Details</h1>
                </div>
                <div className={styles.modalBody}>
                    <form onSubmit={validationChecks}>
                        <label htmlFor="username">
                            <h3>Username:</h3>
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={formData.username}
                            onChange={handleFormDataChange}
                            required
                        />
                        <label htmlFor="email">
                            <h3>Email Address:</h3>
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleFormDataChange}
                            required
                        />
                        <label htmlFor="phone">
                            <h3>Phone Number:</h3>
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            value={formData.phone}
                            onChange={handleFormDataChange}
                            required
                        />
                        <label htmlFor="dob">
                            <h3>Date of Birth:</h3>
                        </label>
                        <input
                            type="date"
                            id="dob"
                            value={formData.dob}
                            onChange={handleFormDataChange}
                            required
                        />
                        <div>
                            <button type="submit" className="submit-button">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Xmodal;