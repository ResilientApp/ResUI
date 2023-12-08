# ResUI

Welcome to ResUI, the user-friendly interface for ResilientDB. This project aims to enhance the user experience of ResilientDB by providing a streamlined and intuitive graphical user interface (GUI). The ResUI project includes features such as SignUp and Login functionality, an Instances page, and a monitoring dashboard. This README file will guide you through the installation, setup, and usage of ResUI.

## Project Overview

ResilientDB is a groundbreaking blockchain technology developed at the ExpoLab at UC Davis. It utilizes innovative consensus protocols like GeoBFT, Proof Of Execution, RCC, Spotless, among others. ResilientDB offers a wide range of interfaces, including Key-Value store and Python SDK, making it a versatile system. The project not only enables decentralized and democratized transactions but also supports Grafana for plotting monitoring data.

## ResUI Features

- **User-Friendly Interface:** ResUI simplifies navigation for first-time users by presenting ResilientDB's features in a systematic manner, reducing on-screen clutter.
- **Authentication:** SignUp and Login functionality to secure user access and interactions.
- **Instances Page:** Authenticated users can view the number of ResDB and SDK instances they are running.
- **Monitoring Dashboard:** Provides a graphical representation of metrics associated with ResDB instances.
- **resdb-cli:** Command-line interface for interacting with ResilientDB, compatible with macOS and Linux.

## Getting Started

Follow the steps below to get ResUI up and running on your local machine.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

### Installation

1. Clone the ResUI repository:

   ```bash
   git clone https://github.com/gopuman/ResUI.git
    ```

2. Navigate to the project directory:

   ```bash
    cd ResUI
    ```

3. Install dependencies and start the server:
   ```bash
    npm install
    cd server
    node server.js
    ```

4. Run the frontend component:
   ```bash
    npm start
    ```

5. Open your browser and go to http://localhost:3000 to access ResUI.