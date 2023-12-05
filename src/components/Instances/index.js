import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import "../../styles/Instances.css";
import Modal from "react-modal";
import ReactMarkdown from "react-markdown";

const Instances = () => {
  const [instancesData, setInstancesData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userToken = localStorage.getItem("userToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("userToken");

        const response = await fetch(
          `http://localhost:5500/api/instances?userEmail=${token}`,
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

  To use \`resdb-cli\`, you can download the binary from the [Releases](https://github.com/gopuman/resdb-cli/releases) page on GitHub.

  1. Go to the [Releases](https://github.com/gopuman/resdb-cli/releases) page.
  2. Download the latest release for your operating system (e.g., \`resdb-cli-linux\` for Linux).
  3. Make the downloaded binary executable:
  
      \`\`\`bash
      chmod +x resdb-cli
      \`\`\`  

  ### Log in to your account

  \`\`\`bash
  resdb-cli login
  \`\`\`

  ### Create ResDB instance

  \`\`\`bash
  resdb create instance
  \`\`\`

  ### Create SDK instance

  \`\`\`bash
  resdb create sdk
  \`\`\`
  `;

  return (
    <>
      <Navbar />
      <div className="instances-container">
        <h1 className="instances-h1">Instances</h1>
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
