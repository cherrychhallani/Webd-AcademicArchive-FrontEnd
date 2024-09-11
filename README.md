# Webd-AcademicArchive-FrontEnd

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Overview
**Webd-AcademicArchive-FrontEnd** is a platform designed to help students share academic resources like notes, previous year question papers, and other useful documents with fellow students. The main functionality includes:

- **Student Login via LDAP Credentials**: Students can log in securely using their college LDAP credentials, ensuring that only authenticated users can access the platform.
  
- **File Upload System**: Once logged in, students can upload any academic file they believe may be helpful for other users. However, before the file appears in the public database, an admin must review and approve the content.

- **Admin Approval**: Uploaded files are sent for admin approval. The admin has the ability to either approve or disapprove the file. Only after approval will the file become available to all users.

- **Public Access to Approved Files**: Once the file is approved, it will be visible in the user’s database and accessible to all students, ensuring that only verified content is shared across the platform.

This platform is designed with simplicity in mind and provides an efficient way for students to collaborate and share useful resources.

---

## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

### `npm run eject`
**Note: this is a one-way operation. Once you eject, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project and give you full control over the configurations.

---

## How to Run the Project

### 1. Clone the Repository
To get a copy of the project on your local machine, clone the repository using Git:

```bash
git clone https://github.com/cherrychhallani/Webd-AcademicArchive-FrontEnd.git
cd Webd-AcademicArchive-FrontEnd
```

### 2. Install Dependencies
Make sure you have Node.js installed on your system. Then, install the necessary dependencies by running:

```bash
npm install
```

### 3. Run the Project Locally
To run the app in development mode, execute:

```bash
npm start
```

This will open the project in your browser at [http://localhost:3000](http://localhost:3000).  
The app will automatically reload if you make any edits to the code.

### 4. Build the Project for Production
To create an optimized production build, run:

```bash
npm run build
```

The build files will be generated in the `build` folder. You can then deploy these files to any static site hosting platform.

---

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
