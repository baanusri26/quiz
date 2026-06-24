# 👑 Prince Quiz — Mahesh Babu Edition

A fun and interactive React quiz app to test how well you know the Prince of Tollywood — **Mahesh Babu**!

---

## 🎬 About the Project

This is a beginner-friendly React project built to practice core React concepts like `useState`, `props`, component structure, and conditional rendering. The quiz features 10 questions about Mahesh Babu's movies, characters, dialogues, and career.

---

## 🚀 Features

- 10 questions about Mahesh Babu movies
- 4 answer options per question
- Score tracking
- Result screen at the end
- Restart quiz option
- Category tags (Characters, Dialogues, Plot, Career, Directors)

---

## 🛠️ Tech Stack

- **React** (with Hooks)
- **JavaScript (ES6+)**
- **CSS** (for styling)

---

## 📁 Project Structure

```
prince-quiz/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Question.jsx       # Displays current question
│   │   ├── Options.jsx        # Displays answer buttons
│   │   ├── ScoreCard.jsx      # Shows final score
│   │   └── ProgressBar.jsx    # Shows quiz progress
│   ├── data/
│   │   └── questions.js       # All 10 quiz questions array
│   ├── App.jsx                # Main app component
│   ├── App.css                # Styles
│   └── index.js               # Entry point
├── package.json
└── README.md
```

---

## 📦 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/prince-quiz.git
cd prince-quiz
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the app
```bash
npm start
```

The app will open at `http://localhost:3000`

---

## ❓ Sample Question Format

Questions are stored as an array of objects in `src/data/questions.js`:

```js
const questions = [
  {
    id: 1,
    question: "In which movie does Mahesh Babu play a cop named Vikram Reddy?",
    options: ["Pokiri", "Athadu", "Dookudu", "Srimanthudu"],
    answer: "Athadu",
    category: "Characters"
  },
  // ...more questions
];
```

---

## 🎯 Concepts Practiced

| Concept | Where Used |
|--------|------------|
| `useState` | Score, current question tracking |
| `props` | Passing question data to components |
| `.map()` | Rendering answer option buttons |
| Conditional Rendering | Showing result screen at end |
| Component Structure | Question, Options, ScoreCard components |
| Array of Objects | Storing quiz questions |

---

## 🙌 Acknowledgements

- Inspired by the legendary **Mahesh Babu** 🌟
- Built as a beginner React learning project

---

## 📄 License

This project is open source and free to use for learning purposes.

---



