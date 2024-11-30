Profile Management Application
A React-based application for managing user profiles. The app allows users to create, update, and view their profile details. It includes form validation, API integration, routing, and error handling.

Features
Profile Form Page: Create or update your profile.
Profile Display Page: View your saved profile details.
Routing: Seamless navigation between pages using React Router.
Error Handling: Gracefully handle API and validation errors.
Data Persistence: Store data using Local Storage.
Global State Management: Powered by React Context API.
Environment Variables: Switch between development and production API endpoints.
Bonus Features:
Delete profile functionality.
Edit profile functionality with pre-filled data.
Fully responsive UI.
Technologies Used
React with TypeScript (.tsx components)
React Router for navigation
React Context API for global state management
Axios for API calls
json-server for a mock API
Local Storage for data persistence
Environment Variables via .env
Installation and Setup
Follow the steps below to run the project locally:

1. Prerequisites
Node.js (v16+)
npm or yarn
json-server
2. Clone the Repository
git clone https://github.com/your-username/profile-management-app.git
cd profile-management-app
3. Install Dependencies
Run the following command to install all required packages:

npm install
# or
yarn install
4. Start the Mock API Server
Make sure the db.json file is in the root directory. Start the JSON server:

npx json-server --watch db.json --port 3000
5. Run the Application
Start the React development server:

npm start
