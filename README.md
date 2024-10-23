# CivilBuddy

Civilbuddy is a Flask web application that allows users to upload an image, generates a Word document (`.docx`) containing the uploaded image, and provides a download link for it. Both the image and the Word document are stored in MongoDB using GridFS. The application is containerized using Docker and orchestrated with `docker-compose`.

## Features

- **Image Upload**: Users can upload images in common formats (JPEG, PNG, etc.).
- **Word Document Generation**: Automatically generates a `.docx` file containing the uploaded image.
- **Storage**: Stores images and documents in MongoDB using GridFS.
- **Dockerized**: Easy deployment with Docker and `docker-compose`.

## Technologies Used

- **Backend**: Flask
- **Database**: MongoDB with GridFS
- **Document Conversion**: pypandoc and Pandoc
- **Image Processing**: Pillow
- **Containerization**: Docker and Docker Compose

## Getting Started

### Prerequisites

- **Docker** installed on your machine
- **Docker Compose** installed

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/civilbuddy.git
   cd civilbuddy
   ```

2. **Set Up Environment Variables**

   Create a `.env` file in the project root with the following content:

   ```env
   MONGO_INITDB_ROOT_USERNAME=admin
   MONGO_INITDB_ROOT_PASSWORD=secret
   ```

   *Replace `admin` and `secret` with your desired MongoDB username and password.*

3. **Build and Run the Application**

   ```bash
   docker-compose up --build
   ```

   This command builds the Docker images and starts the containers.

## Usage

1. **Access the Web App**

   Open your browser and navigate to:

   ```
   http://localhost:5000
   ```

2. **Upload an Image**

   - Click on the "Choose File" button and select an image.
   - Click "Upload" to submit the image.

3. **Download the Word Document**

   - After uploading, you'll be redirected to a page to download the generated `.docx` file containing your image.

## Project Structure

```
civilbuddy/
├── app/
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
├── docker-compose.yml
└── .env
```

- **app/**: Contains the Flask application and Dockerfile.
- **docker-compose.yml**: Defines services for the application and MongoDB.
- **.env**: Contains environment variables (not committed to version control).

## Environment Variables

- **MongoDB Credentials**: Set in the `.env` file.

  ```env
  MONGO_INITDB_ROOT_USERNAME=your_username
  MONGO_INITDB_ROOT_PASSWORD=your_password
  ```

## Notes

- Ensure that Docker and Docker Compose are properly installed before running the application.
- The application runs on port **5000** by default. Adjust the `docker-compose.yml` file if you need to use a different port.
- The MongoDB service runs on port **27017**.

## License

This project is licensed under the MIT License.

---

*Feel free to contribute or raise issues if you encounter any problems.*
