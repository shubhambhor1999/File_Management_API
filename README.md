Certainly! It looks like there might be some formatting issues in your README. Let me help you correct those:

```markdown
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
   UPLOADS_DIRECTORY=./uploads
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
