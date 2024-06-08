import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import "../../styles/Instances.css";
import Modal from "react-modal";
import ReactMarkdown from "react-markdown";

const Instances = () => {
  const [instancesData, setInstancesData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userToken = localStorage.getItem("userToken");

  const [user, setUser] = useState(getUserFromToken()); // Set user state

  function getUserFromToken() {
    const token = localStorage.getItem("userToken");
    if (token) {
      try {
        return token; // Assuming your user information is stored in the 'user' field of the token
      } catch (error) {
        // Invalid token or expired, handle accordingly
        return null;
      }
    }
    return null;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("userToken");

        const response = await fetch(
          `https://resui-backend.resilientdb.com/api/instances?userEmail=${token}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const { success, resdb_count, sdk_count } = await response.json();

        if (success) {
          // Update the structure of instancesData based on the received data
          setInstancesData([{ user: userToken, resdb: resdb_count, sdk: sdk_count }]);
        } else {
          console.error("Error fetching data:", response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userToken]);

  useEffect(() => {
    // Add the class to the body when the component mounts
    document.body.classList.add("instances-body");

    // Remove the class when the component unmounts
    return () => {
      document.body.classList.remove("instances-body");
    };
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const instructions = `
  # Install resdb-cli

  \n\n

  To use \`resdb-cli\`, you can download the binary from the [Releases](https://github.com/gopuman/resdb-cli/releases) on the GitHub repo.


  ### Run the command appropriate for your operating system:

  \`\`\`bash
  wget https://github.com/gopuman/resdb-cli/releases/download/v1.0/resdb-cli-linux
  wget https://github.com/gopuman/resdb-cli/releases/download/v1.0/resdb-cli-mac
  \`\`\`  

  ### Make the downloaded binary executable:
  
  \`\`\`bash
  mv resdb-cli-mac resdb-cli
  chmod +x resdb-cli
  \`\`\`  

  ### Log in to your account. Enter email and password when prompted.

  \`\`\`bash
  ./resdb-cli login
  \`\`\`

  ### Create ResDB instance 

  \`\`\`bash
  ./resdb-cli create-instance resdb
  \`\`\`

  ### Create SDK instance

  \`\`\`bash
  ./resdb-cli create-instance sdk
  \`\`\`
  `;

  return (
    <>
      <Navbar />
      { user == "l" ? (
        <>
        <div className="iframe-container">
        <iframe
          src={"http://localhost:3000/d/a792ac8b-bfd6-494d-9259-902365b007b4/resilientdb?orgId=1&var-job=All&from=now-24h&to=now"} 
          title="Dashboard"
          className="dashboard-frame"
        />
        </div>
        </>
      ): (
          <>
          </>
        )}
      <div className="instances-container">
        <table className="instances-table">
          <thead>
            <tr>
              <th className="instances-th">User</th>
              <th className="instances-th">
                Number of Running Resdb Instances
              </th>
              <th className="instances-th">Number of Running SDK Instances</th>
            </tr>
          </thead>
          <tbody>
            {instancesData.map((instance, index) => (
              <tr className="instances-tr" key={index}>
                <td className="instances-td">{instance.user}</td>
                <td className="instances-td">{instance.resdb}</td>
                <td className="instances-td">{instance.sdk}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="add-instances-button" onClick={openModal}>
          Add Instances
        </button>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          <ReactMarkdown>{instructions}</ReactMarkdown>
          <button onClick={closeModal}>Close</button>
        </Modal>    
      </div>
    </>
  );
};

export default Instances;
