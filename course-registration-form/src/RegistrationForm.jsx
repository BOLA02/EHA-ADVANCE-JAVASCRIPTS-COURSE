// RegistrationForm.jsx
import React, { useState } from 'react';
import './RegistrationForm.css';

function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!age) {
      newErrors.age = 'Age is required';
    } else if (parseInt(age) < 18) {
      newErrors.age = 'You must be 18 or older to register';
    }

    if (!course) {
      newErrors.course = 'Please select a course';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      setErrors({});
      
      setFirstName('');
      setLastName('');
      setEmail('');
      setAge('');
      setCourse('');
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } else {
      setErrors(validationErrors);
      setIsSubmitted(false);
    }
  };

  return (
    
      <div className="form-card">
        <h2 className="form-heading">Course Registration</h2>
        
        {isSubmitted && (
          <div className="success-message">
            ✓ Registration successful! Welcome aboard, {firstName}!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">
              First Name <span className="required">*</span>
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={`form-input ${errors.firstName ? 'input-error' : ''}`}
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <p className="error-text">{errors.firstName}</p>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">
              Last Name <span className="required">*</span>
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={`form-input ${errors.lastName ? 'input-error' : ''}`}
              placeholder="Enter your last name"
            />
            {errors.lastName && (
              <p className="error-text">{errors.lastName}</p>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">
              Email Address <span className="required">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`form-input ${errors.email ? 'input-error' : ''}`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="error-text">{errors.email}</p>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">
              Age <span className="required">*</span>
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className={`form-input ${errors.age ? 'input-error' : ''}`}
              placeholder="Enter your age"
              min="1"
            />
            {errors.age && (
              <p className="error-text">{errors.age}</p>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">
              Select Course <span className="required">*</span>
            </label>
            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className={`form-select ${errors.course ? 'input-error' : ''}`}
            >
              <option value="">-- Choose a course --</option>
              <option value="web-development">Web Development Fundamentals</option>
              <option value="react-advanced">Advanced React & JavaScript</option>
              <option value="data-science">Data Science with Python</option>
              <option value="ui-ux-design">UI/UX Design Masterclass</option>
              <option value="mobile-dev">Mobile App Development</option>
            </select>
            {errors.course && (
              <p className="error-text">{errors.course}</p>
            )}
          </div>

          <button type="submit" className="submit-button">
            Register Now
          </button>
        </form>
      </div>
  
  );
}

export default RegistrationForm;


