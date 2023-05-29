# Chat Application (React, Firebase)

## System Requirements:

* Node.js (Recommended version: v18.16.0)
* Yarn (Recommended version: v3.5.1)

## Steps to Run the Project:

### 1. Clone the project repository from GitHub. You can do this by running the following command in your command prompt or terminal:
```
git clone https://github.com/jlpeters94/chat-app.git
```

### 2. Once the repository is cloned, navigate to the project's root directory using the command prompt or terminal.

### 3. Install project dependencies by running the following command:
```
yarn install
```
* This command will read the "package.json" file and install any remaining dependencies required by the project.

### 4. Set up Firebase configuration:
* Create a Firebase project at Firebase Console.
* In the Firebase console, create a new web app and copy the configuration object.

### 5. In the project's source code, locate the file firebase.js and open it for editing.
* Paste the Firebase configuration object into the appropriate location in the file.

### 6. Enable Firebase Authentication:
* In the Firebase console, go to the "Authentication" section and enable the "Email/Password" sign-in method.
* This will allow users to sign up and sign in to the application using email and password.

### 7. Enable Firestore:
* In the Firebase console, go to the "Firestore" section and create a new Firestore database.

### 8. Once the dependencies, Firebase configuration, and code modifications are complete, start the project by running the following command:
```
yarn start
```
* This command will execute the script defined in the "package.json" file, typically named "start". It will start the development server and launch the project in a web browser.
