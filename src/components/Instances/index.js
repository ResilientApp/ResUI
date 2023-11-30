// Instances.js
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import '../../styles/Instances.css';

const Instances = () => {
  const [instancesData, setInstancesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5500/api/instances'); // Replace with your server's address
        const data = await response.json();
        console.log(data);
        setInstancesData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <h2>Instances</h2>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Number of Running Resdb Instances</th>
              <th>Number of Running SDK Instances</th>
            </tr>
          </thead>
          <tbody>
            {instancesData.map((instance, index) => (
              <tr key={index}>
                <td>{instance.user}</td>
                <td>{instance.resdb}</td>
                <td>{instance.sdk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Instances;