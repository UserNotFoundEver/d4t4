// path/filename: src/components/SubmitForm.jsx

import React, { useState } from 'react';
import './style.css'; // Importing CSS for styling

const SubmitForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Submitted:', formData);
        // Handle form submission (e.g., API call) here
    };

    return (
        <form className="submit-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                />
            </div>
            <button type="submit" className="submit-button">Submit</button>
        </form>
    );
};

export default SubmitForm;
