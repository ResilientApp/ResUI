import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import '../../styles/Instances.css';
import { jwtDecode } from "jwt-decode";

const Instances = () => {
  const [instancesData, setInstancesData] = useState([]);
  const userToken = localStorage.getItem('userToken');

  useEffect(() => {
    const fetchData = async () => {
      try {
        let decoded = jwtDecode(userToken);

        const response = await fetch(`http://localhost:5500/api/instances?userEmail=${decoded.email}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`,
          },
        }); 

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setInstancesData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [userToken]);

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