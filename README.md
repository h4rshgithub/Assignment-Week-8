# Assignment-Week-8
# 🌐 Advanced Express.js API

This project demonstrates advanced Express.js features including:

- ✅ File Upload using `multer`
- ✅ Centralized Error Handling
- ✅ Third-Party API Integration (OpenWeatherMap)

---

## 📁 Project Structure


---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/advanced-express-api.git
cd advanced-express-api
📦 API Endpoints
1. 🔼 Upload File
POST /upload

form-data body:

Key = file (type: File)

✅ Response:

json
Copy
Edit
{
  "message": "File uploaded successfully!",
  "file": {
    "originalname": "example.png",
    "filename": "timestamp-example.png",
    ...
  }
}
2. 🌤️ Get Weather Info
GET /weather/:city

Example:

bash
Copy
Edit
/weather/Delhi
✅ Response:

json
Copy
Edit
{
  "name": "Delhi",
  "main": {
    "temp": 33.5,
    "humidity": 45
  },
  ...
}
Uses OpenWeatherMap API – ensure your API key is valid in .env.

3. 🧪 Test Error Handling
GET /error-demo

✅ Response:

json
Copy
Edit
{
  "error": {
    "message": "Intentional error for testing."
  }
}
🧪 Testing with Postman
✅ File Upload
Method: POST

URL: http://localhost:3000/upload

Body: form-data

Key: file, Type: File, choose a file

✅ Weather API
Method: GET

URL: http://localhost:3000/weather/London

✅ Error Demo
Method: GET

URL: http://localhost:3000/error-demo

🛡️ Security & Best Practices
API key stored in .env (not committed to GitHub)

Uploaded files stored in uploads/ (ignored via .gitignore)

Centralized error handling middleware

Logs API key usage only for debug

📝 License
This project is open-source and available under the MIT License.

🤝 Contributions
Pull requests are welcome! Feel free to open issues or suggest improvements.
