# Personal Finance Frontend

Welcome to the Personal Finance Frontend repository! This frontend application is built using React.js and Redux for state management. It provides users with an intuitive user interface to manage their financial data, visualize expenses using React Google Charts, and interact with the Personal Finance Backend API for data retrieval and management.

**Note**: The main purpose of this project is for my own personal use and data management. However, a demo account is available for you to explore the application's features and functionality. Feel free to use the demo account to get a firsthand experience of what the application aims to achieve.

## Live Site

Check out the live version of the Personal Finance Frontend: [Live Site](https://brkwok.github.io/personal-finance-frontend/)

Please note that the backend API may take some time to wake up if it's been inactive. If you experience any delays or issues during the initial load, kindly wait a moment and try again. I appreciate your patience!

## Backend Repository

The backend API that powers this frontend is available in the [Personal Finance Backend GitHub Repository](https://github.com/brkwok/personal-finance-backend). You can explore the backend's code and documentation to learn more about its functionality.

## Features

- **User Authentication**: Secure login and registration system.
- **Dashboard**: The dashboard keeps track of the user's accounts and provides a user interface for connecting accounts through the Plaid API.
- **Transaction Page**: The transaction page aggregates all linked accounts to categorize and visualize financial data.

## Dashboard

![image](https://drive.google.com/uc?export=view&id=1ZBK7lP6F5uafbnwt5trmi3DwKE3p7MdL)

The dashboard serves as the main hub for managing financial accounts and connecting accounts through the Plaid API. Users can link their financial institution accounts to fetch transaction data and gain insights into their financial activities.

## Connecting Accounts

Users can connect their accounts using the Plaid API. The Plaid integration allows secure access to financial data and facilitates fetching transaction history for analysis.

## Transaction Page

![image](https://drive.google.com/uc?export=view&id=1PkAhDcQ6TozKOVOiDyOJLWcEkSyljJDc)

The transaction page aggregates data from all linked accounts to provide a comprehensive view of financial transactions. This page offers tools to categorize transactions and visualize expenses through the integration of `react-google-charts` and enhances the user experience by providing visualizations of financial data. Charts and graphs help users understand their spending patterns, identify trends, and make informed financial decisions.
