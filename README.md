
# 🎓 Quiz Application using MERN & Gemini AI

Welcome to the **Quiz Generator** — a smart and interactive quiz platform built using the **MERN stack** (MongoDB, Express, React, Node.js) with a powerful twist: it uses **Gemini AI** to automatically generate quiz questions from any given text!

Whether you're an **admin** creating engaging quizzes or a **user** testing your knowledge, this app makes learning fun and efficient.

---

## ✨ What’s Inside

### 👩‍🏫 Admin Portal

- Create and manage quizzes  
- Add, edit, or remove questions and answers  
- Generate quiz questions automatically using **Gemini AI** by just entering text  
- View detailed reports of user performance  

### 🙋‍♂️ User Portal

- Register and log in securely  
- Attempt quizzes assigned by the admin  
- View results instantly after submitting  
- Review correct answers and explanations  

---

## 🧠 AI-Powered Quiz Generation

One of the coolest features: Admins can paste **any paragraph or text**, and the system will use **Google’s Gemini API** to:
- Understand the content  
- Automatically generate MCQs  
- Add the questions directly to your quiz  

No manual question setting needed!

---

## 🛠 Tech Stack

- **Frontend**: React.js, Axios, Tailwind CSS / Bootstrap  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB Atlas / Local MongoDB  
- **AI Integration**: Gemini Pro API from Google  

---

## 🚀 Getting Started

Here’s how to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/BhavanaRangarao19/Quiz_Generator.git
cd Quiz_Generator
```

### 2. Setup the Backend

```bash
cd server
npm install
```

Create a `.env` file inside the `server/` folder with the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
```

Then run the backend:

```bash
npm run dev
```

### 3. Setup the Frontend

```bash
cd ../client
npm install
npm start
```
This will launch the React app at `http://localhost:3000`

---

## 🌐 App Access

- **Admin Portal**: `http://localhost:3000/admin`  
- **User Portal**: `http://localhost:3000/user`  

---

## 📸 Screenshots
![Screenshot 111](Quiz-Generator/images/Screenshot1.png)
![Screenshot 112](Quiz-Generator/images/Screenshot2.png)
![Screenshot 113](Quiz-Generator/images/Screenshot3.png)
![Screenshot 114](Quiz-Generator/images/Screenshot%28114%29.png)
![Screenshot 115](Quiz-Generator/images/Screenshot%28115%29.png)
![Screenshot 116](Quiz-Generator/images/Screenshot%28116%29.png)
![Screenshot 117](Quiz-Generator/images/Screenshot%28117%29.png)
![Screenshot 118](Quiz-Generator/images/Screenshot%28118%29.png)
![Screenshot 119](Quiz-Generator/images/Screenshot%28119%29.png)
![Screenshot 120](Quiz-Generator/images/Screenshot%28120%29.png)
![Screenshot 121](Quiz-Generator/images/Screenshot%28121%29.png)
![Screenshot 122](Quiz-Generator/images/Screenshot%28122%29.png)
![Screenshot 123](Quiz-Generator/images/Screenshot%28123%29.png)



---

## 🤝 Contributing
Found a bug or have a feature in mind? Feel free to fork the repo and submit a pull request.

---

## 👩‍💻 Author
**Bhavana Bellamkonda**  
GitHub: [@BhavanaRangarao19](https://github.com/BhavanaRangarao19)  
LinkedIn: [Bhavana Bellamkonda](https://www.linkedin.com/in/bhavana-bellamkonda-br89)
