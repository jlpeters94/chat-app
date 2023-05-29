# Chat Application (React, Firebase)

## System Requirements:

* Node.js
* Yarn

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
* If you haven't already, create a Firebase project at Firebase Console.
* In the Firebase console, create a new web app and copy the configuration object.

### 5. In the project's source code, locate the file firebase.js and open it for editing.
* Paste the Firebase configuration object into the appropriate location in the file.

### 6. Enable Firebase Authentication:
* In the Firebase console, go to the "Authentication" section and enable the "Email/Password" sign-in method.
* This will allow users to sign up and sign in to your application using email and password.

### 7. Enable Firestore:
* In the Firebase console, go to the "Firestore" section and create a new Firestore database.
* Choose the necessary location and security rules for your database.

### 8. Update project code for Firebase Authentication and Firestore:
* In your project's codebase, locate the files where authentication and Firestore operations are handled (e.g., user sign up, sign in, data retrieval, data modification).
* Update the code to utilize Firebase Authentication and Firestore APIs based on the Firebase SDK documentation.
* Make sure to import the necessary Firebase modules in your project's files.

### 9. Save the modified files with the updated Firebase authentication and Firestore code.

### 10. Once the dependencies, Firebase configuration, and code modifications are complete, start the project by running the following command:
```
yarn start
```
* This command will execute the script defined in the "package.json" file, typically named "start". It will start the development server and launch the project in a web browser.
