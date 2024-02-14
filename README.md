# File Management API using Node.js

## Introduction

The goal of this project is to create a simple file management API using Node.js. The API allows users to upload, list, and delete files. Additionally, it implements file categorization functionality.

## Installation and Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/file-management-api.git
   ```

2. Install dependencies:

   ```bash
   cd file-management-api
   npm install
   ```

3. Set up environment variables:

   Create a .env file and add the following variables:

   ```env
   PORT=3000
   UPLOADS_DIRECTORY=uploads
   SECRET_KEY=your_secret_key
   MONGO_URL=your_mongodb_uri
   ```

4. Run the application:

   ```bash
   npm start
   ```

   The API will be accessible at **http://localhost:3000**.

## API Usage

### For User

The API will be accessible at **http://localhost:3000/api/auth**

### For Files

The API will be accessible at **http://localhost:3000/api/files**

### Endpoints

1. **Register a New User**
   - **Route:** `/register`
   - **Method:** `POST`

2. **Login and Obtain Authentication Token**
   - **Route:** `/login`
   - **Method:** `POST`

3. **Upload a File**
   - **Route:** `/upload`
   - **Method:** `POST`
   - **Auth:** Required

4. **List All Files**
   - **Route:** `/allfiles`
   - **Method:** `GET`
   - **Auth:** Required

5. **Delete a File by ID**
   - **Route:** `/files/:id`
   - **Method:** `DELETE`
   - **Auth:** Required

6. **Secure File Upload**
   - **Route:** `/secure-upload`
   - **Method:** `POST`
   - **Auth:** Required

7. **Secure File Download**
   - **Route:** `/secure-download/:filePath`
   - **Method:** `GET`
   - **Auth:** Required

8. **Search Files**
   - **Route:** `/search/:keyword`
   - **Method:** `GET`
   - **Auth:** Required

9. **Get Predefined Categories**
   - **Route:** `/categories`
   - **Method:** `GET`

10. **Categorize a File**
    - **Route:** `/categorize`
    - **Method:** `POST`
    - **Auth:** Required

11. **Find Files by Category**
    - **Route:** `/category/:category`
    - **Method:** `GET`
    - **Auth:** Required

### File Categorization

Files can be categorized by making a POST request to the `/api/categorize` endpoint with the filename and desired category in the request body.

### Authentication

Authentication is required for certain endpoints. Obtain a token by logging in with valid credentials. Use the obtained token in the Authorization header for authenticated requests.

### PFA Screenshots
![image](https://github.com/shubhambhor1999/File_Management_API/assets/43696697/b831983e-de2c-49af-b2da-9dc61bc44318)

![image](https://github.com/shubhambhor1999/File_Management_API/assets/43696697/011bf0a4-2cd3-466b-814d-21bb6181ac94)

![image](https://github.com/shubhambhor1999/File_Management_API/assets/43696697/885a0d06-7bea-41c2-884f-8b2123465ee8)

![image](https://github.com/shubhambhor1999/File_Management_API/assets/43696697/27aa6f19-5afd-402f-8d8a-22274a79d5c3)

![image](https://github.com/shubhambhor1999/File_Management_API/assets/43696697/683eb300-4d12-41f2-a62a-d251ce6d268d)

![image](https://github.com/shubhambhor1999/File_Management_API/assets/43696697/af74d89e-a077-405e-9b31-3cc073e8c4bd)

![image](https://github.com/shubhambhor1999/File_Management_API/assets/43696697/11193616-4ce2-44fe-b0fd-79656b2520ef)

![image](https://github.com/shubhambhor1999/File_Management_API/assets/43696697/94854dde-3aae-4f31-8824-dc864b3abb16)

![image](https://github.com/shubhambhor1999/File_Management_API/assets/43696697/476bf4a2-d836-424b-ba86-b76dac2362ff)
