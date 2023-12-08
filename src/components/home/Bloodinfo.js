import React, { useState } from 'react';
import './css/bloodinfo.css';

const BloodRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    units: '1',
    bloodGroup: 'O+',
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
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="units">Units:</label>
        <select id="units" name="units" value={formData.units} onChange={handleChange}>
          {[1, 2, 3, 4, 5].map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>

        <label htmlFor="bloodGroup">Blood Group:</label>
        <select id="bloodGroup" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange}>
          {['O+', 'O-', 'B+', 'B-', 'AB+', 'AB-'].map((group) => (
            <option key={group} value={group}>
              {group}
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

const BloodAvailabilityTable = () => {
  // Sample table data
  const tableData = [
    { bloodGroup: 'O+', unitsAvailable: 10, bloodBank: 'Sample Blood Bank 1' },
    { bloodGroup: 'B-', unitsAvailable: 5, bloodBank: 'Sample Blood Bank 2' },
    { bloodGroup: 'AB+', unitsAvailable: 15, bloodBank: 'Sample Blood Bank 3' },
  ];

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Blood Group</th>
            <th>Units Available</th>
            <th>Blood Bank</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.bloodGroup}</td>
              <td>{row.unitsAvailable}</td>
              <td>{row.bloodBank}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const BloodDonationApp = () => {
  const [activeTab, setActiveTab] = useState('bloodRequest');

  return (
    <div className="app-container">
      <div className="tabs">
        <button onClick={() => setActiveTab('bloodRequest')} className={activeTab === 'bloodRequest' ? 'active' : ''}>
          Blood Request
        </button>
        <button onClick={() => setActiveTab('bloodAvailability')} className={activeTab === 'bloodAvailability' ? 'active' : ''}>
          Blood Availability
        </button>
      </div>
      <div className="content-container">
        {activeTab === 'bloodRequest' ? <BloodRequestForm /> : <BloodAvailabilityTable />}
      </div>
    </div>
  );
};

export default BloodDonationApp;
