# Hotels CRUD MERN App

## Overview
The **Hotels CRUD MERN App** is a full-stack web application built using the **MERN (Express.js, React.js, and Node.js) stack**. This application enables users to manage hotel records by performing **Create, Read, Update, and Delete (CRUD)** operations.

## Features
- **Add new users to hotels** with details such as name, location, price, and rating.
- **View all users in hotels** in a dynamic list.
- **Update users information** easily.
- **Delete users** when no longer needed.
- **User-friendly interface** for seamless interaction.

## Tech Stack
- **Frontend**: React.js with React Router for navigation
- **Backend**: Node.js with Express.js
- **Database**: Json data
- **Styling**: CSS (or styled-components if applicable)
- **API Handling**: Axios for making HTTP requests

## Installation & Setup
### Prerequisites
Ensure you have the following installed on your system:
- Node.js
- Git

### Steps to Run the Project
#### Clone the Repository
```sh
git clone https://github.com/Sanketdesai305/HotelsCrudMERNApp.git
cd HotelsCrudMERNApp
```

#### Install Dependencies
##### Main Directory
```sh
cd ./
npm install
```
##### Main Directory
```sh
cd ./
yarn
```

#### Start the Application
##### Start Backend Server
```sh
cd Backend
node server.js
```
##### Start Frontend Server in the Main Directory
```sh
cd ./
yarn start
```

#### Keep Backend and Frontend Running Simultaneously
Ensure both backend and frontend servers are running simultaneously for proper application functionality.

## GitHub Copilot Integration
### Enhancing Development with GitHub Copilot
If you want to explore additional features, you can utilize GitHub Copilot Agents:
- **@workspace**: Provides assistance related to the currently open workspace.
- **@terminal**: Specializes in CLI-related questions but does not have access to the codebase.
- **@vscode**: Offers guidance on VS Code features, such as installing extensions.

Try these commands in the Copilot chat to understand their functionality:
```sh
@terminal how to run the application
@vscode how to install an extension
```

### Understanding the Application
- Open GitHub Copilot chat and type:
  ```sh
  @workspace explain the Home.jsx
  ```
- Go to the `Home.jsx` file, place the cursor at the final `</div>` tag, press Enter, then press Tab to accept suggestions.

### Code Assistance
#### Refactoring Code
- Open `server.js` in the `Backend` folder, select a code snippet, and type:
  ```sh
  refactor the code
  ```
  This will generate an improved version of the selected code.

#### Exception Handling
- Select an API method in `server.js`, right-click, and choose **Editor Inline Chat** under the Copilot menu.
- Ask Copilot to handle all exceptions, and it will generate a method with proper error handling.

#### Code Generation
- Type:
  ```sh
  // Search a user by their ID
  ```
  Copilot will generate the corresponding method.

#### Auto Documentation
- Select a method, right-click, and choose **Copilot -> Generate Docs** to create inline documentation.
- To document the entire code, type:
  ```sh
  document all my code #selection with details
  ```
  This will generate comprehensive documentation across all sections.

### Few-Shot Prompting
This technique helps Copilot generate responses based on examples:
```sh
"This is awesome!" --> result --> Negative
"This is bad!" --> result --> Positive
```
If you provide a third sentence, Copilot will predict the correct result.

### API Calls from Frontend
To connect the frontend with the backend using Axios, Click "+" to clear chat and Type-in the following:
```sh
#selection Get the list of users from API endpoint http://localhost:3001/users/
```
This will generate the method to fetch data from the backend.

### Code Insertion
Use **Copilot Chat** to insert code directly:
- Click `Insert into new file` to create a new file with generated content.

### Accessibility Verification (WCAG Guidelines)
To verify if the UI meets **Web Content Accessibility Guidelines (WCAG)**, use:
```sh
#selection Does the UI meet the specified WCAG guidelines?
```
#### WCAG Principles (POUR):
1. **Perceivable**: Ensure content is visible with text alternatives and sufficient contrast.
2. **Operable**: Make UI navigable via keyboard and seizure-safe.
3. **Understandable**: Ensure clarity, readability, and predictable navigation.
4. **Robust**: Use clean HTML compatible with assistive technologies.

#### WCAG Compliance Levels:
- **A (Minimum)**: Basic accessibility requirements.
- **AA (Recommended)**: Addresses common barriers.
- **AAA (Highest)**: Ensures maximum accessibility compliance.

## Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License
This project is licensed under the **MIT License**.

## Contact
For any queries or issues, please reach out to **Sanket Desai** via GitHub: [Sanketdesai305](https://github.com/Sanketdesai305)

