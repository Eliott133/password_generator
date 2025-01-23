# Password Generator

![Aperçu de l'application](https://raw.githubusercontent.com/Eliott133/password_generator/refs/heads/main/screen/screen_app.png)  

## Description
This project is a web application for generating personalized passwords based on various criteria. Thanks to a user-friendly interface, the user can choose the length of the password and select the types of characters to include (lowercase letters, uppercase letters, numbers and special characters).

## Features
- **Password length :** Select a length between 6 and 50 characters.
- **Inclusion of custom characters :**
  - Lower-case letters.
  - Upper-case letters.
  - Number.
  - Special characters.
- **Random generation :**  Generate a unique password based on chosen criteria.
- **Easy copy :**  Copy the generated password to the clipboard in one click..
- **Responsive, modern interface :** Simple, pleasant design for intuitive, high-performance use.

## Technologies Used
- **Frontend :**
  - React.js
  - Tailwind CSS with DaisyUI
- **Icons :** React-icons

## Prerequisites
Before you start, make sure you have the following items installed on your machine:
- Node.js (version 14 or higher)
- npm ou yarn

## Installation
To run the project locally :

1. Clone the project :
   ```bash
   git clone https://github.com/Eliott133/password_generator.git
   ```

2. Access the project file :
   ```bash
   cd password-generator
   ```

3. Install dependencies :
   ```bash
   npm install
   # or with Yarn
   yarn install
   ```

4. Start the development server :
   ```bash
   npm run dev
   # or with Yarn
   yarn run dev
   ```

5. Open your browser at the following address :
   ```
   http://localhost:5173/
   ```

## Use
1. Select password length using the slider.
2. Choose the type of characters to include (lowercase, uppercase, numbers, special characters).
3. Click on “Generate Password” to create a password.
4. Click on the copy icon to copy the password to the clipboard.

## Project structure
- **App.js :** Main component managing states for customization options.
- **Generator.js :** Component responsible for password generation and display.

