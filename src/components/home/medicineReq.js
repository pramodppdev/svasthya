import React, { useState } from 'react';
import './css/bloodinfo.css';

const MedicineRequestForm = () => {
  const [formData, setFormData] = useState({
    medicineName: '',
    medicineComposition: '',
    quantitiesRequired: '1',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="app-container-land">
      <form onSubmit={handleSubmit}>
        <label htmlFor="medicineName">Medicine Name:</label>
        <input type="text" id="medicineName" name="medicineName" value={formData.medicineName} onChange={handleChange} required />

        <label htmlFor="medicineComposition">Medicine Composition:</label>
        <input type="text" id="medicineComposition" name="medicineComposition" value={formData.medicineComposition} onChange={handleChange} required />

        <label htmlFor="medicineComposition">Prescibed  Doctor Name:</label>
        <input type="text" id="medicineComposition" name="medicineComposition" value={formData.medicineComposition} onChange={handleChange} required />

        <label htmlFor="quantitiesRequired">Quantities Required:</label>
        <select id="quantitiesRequired" name="quantitiesRequired" value={formData.quantitiesRequired} onChange={handleChange}>
          {Array.from({ length: 20 }, (_, index) => index + 1).map((quantity) => (
            <option key={quantity} value={quantity}>
              {quantity}
            </option>
          ))}
        </select>

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MedicineRequestForm;
