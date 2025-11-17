# AI-Powered Code Reviewer

A full-stack web application that enables developers to submit code and receive intelligent, AI-powered code reviews with suggestions for improvements, bug detection, and best practices.

## 🎯 Features

- **Code Submission UI**: Clean, intuitive interface for pasting or uploading code
- **Syntax Highlighting**: Professional code display using PrismJS with support for multiple languages
- **AI-Powered Analysis**: Integrates with Google Generative AI to provide intelligent code review
- **Markdown Rendering**: Beautiful formatted output for AI suggestions and recommendations
- **Real-time Feedback**: Instant analysis with loading states for better UX
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Error Handling**: Graceful fallbacks and user-friendly error messages

## 🛠 Tech Stack

### Frontend
- **React.js** (Vite) - Modern UI framework with fast bundling
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **PrismJS** - Syntax highlighting for code blocks
- **Markdown Rendering** - Display formatted AI responses

### Backend
- **Node.js** - Server runtime
- **Express.js** - Lightweight web framework
- **Google Generative AI API** - LLM integration for code analysis
- **CORS** - Cross-origin resource sharing for secure API calls

## 📋 Prerequisites

Before running this project, ensure you have:

- Node.js (v16 or higher)
- npm or yarn
- Google Generative AI API key ([Get it here](https://makersuite.google.com/app/apikey))

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/code-reviewer.git
cd code-reviewer
```

### 2. Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env.local` file:

```
VITE_BACKEND_URL=http://localhost:5000
```

Run the frontend:

```bash
npm run dev
```

Frontend will be available at `http://localhost:5173`

### 3. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```
GOOGLE_API_KEY=your_google_generative_ai_key_here
PORT=5000
NODE_ENV=development
```

Run the backend:

```bash
npm start
```

Backend will be available at `http://localhost:5000`

## 📝 How to Use

1. **Open the Application**: Navigate to `http://localhost:5173` in your browser
2. **Paste Code**: Enter or paste the code you want to review in the code editor
3. **Select Language**: Choose the programming language for accurate syntax highlighting
4. **Submit for Review**: Click the "Review Code" button
5. **Get AI Feedback**: Wait for the AI analysis and view recommendations
6. **Copy or Export**: Copy the review feedback as needed

## 🔄 API Endpoints

### POST `/api/review`

Submit code for AI-powered review.

**Request:**
```json
{
  "code": "function hello() { console.log('hello'); }",
  "language": "javascript"
}
```

**Response:**
```json
{
  "review": "# Code Review\n\n## Issues Found:\n- ...",
  "suggestions": "...",
  "bestPractices": "..."
}
```

## 🎨 Project Structure

```
code-reviewer/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CodeEditor.jsx
│   │   │   ├── ReviewDisplay.jsx
│   │   │   └── LoadingState.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── vite.config.js
├── backend/
│   ├── routes/
│   │   └── review.js
│   ├── controllers/
│   │   └── reviewController.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── server.js
│   └── .env.example
└── README.md
```

## 🧠 How the AI Review Works

1. **Prompt Engineering**: Structured system prompts guide the AI to focus on code quality, security, and best practices
2. **Code Analysis**: AI analyzes for:
   - Syntax errors and potential bugs
   - Performance improvements
   - Code style and readability
   - Security vulnerabilities
   - Best practices compliance
3. **Formatted Output**: Results are returned as Markdown for easy reading

## ⚡ Performance Optimization

- **Code Splitting**: Frontend bundles are optimized with Vite
- **Lazy Loading**: Components load on demand
- **API Caching**: Repeated reviews are cached (optional)
- **Error Boundaries**: Graceful error handling prevents full app crashes

## 🔐 Security Features

- **CORS Configuration**: Prevents unauthorized cross-origin requests
- **API Key Protection**: Google API key stored securely in backend environment variables
- **Input Validation**: Code input is validated before sending to AI
- **Error Handling**: Sensitive error details are not exposed to frontend

## 🐛 Troubleshooting

### "Cannot find module" errors
```bash
npm install
```

### API Key not working
- Verify your Google Generative AI key is correct
- Ensure the key has access to the Generative API
- Check that your `.env` file is in the backend root directory

### CORS errors
- Ensure backend is running on `http://localhost:5000`
- Check that `VITE_BACKEND_URL` in frontend `.env.local` matches backend URL
- Verify backend CORS configuration allows frontend origin

### Syntax highlighting not working
- Ensure PrismJS CSS is imported in your main component
- Check that the language parameter is correctly set

## 📚 Learning Outcomes

This project demonstrates:

- ✅ Full-stack application development (React + Node.js)
- ✅ Integration with external AI APIs (Google Generative AI)
- ✅ Prompt engineering for consistent AI behavior
- ✅ Real-time data display with streaming responses
- ✅ Modern frontend patterns (hooks, context, component composition)
- ✅ Backend API design and error handling
- ✅ Production-grade code practices

## 🚀 Future Enhancements

- [ ] Support for multiple AI models (Claude, OpenAI GPT, etc.)
- [ ] Code review history and comparison
- [ ] Customizable review criteria
- [ ] Integration with GitHub for PR reviews
- [ ] Team collaboration features
- [ ] Custom rule sets for organizations
- [ ] Performance metrics dashboard

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 💡 Tips for Recruiters

This project showcases:

- **React Mastery**: Complex state management, component lifecycle
- **Full-Stack Skills**: Frontend UI + backend API integration
- **AI Integration**: Working knowledge of LLM APIs and prompt engineering
- **Code Quality**: Clean code, error handling, security practices
- **UX Focus**: Intuitive interface, loading states, error messages
- **Problem Solving**: Handling streaming responses, real-time updates

## 📧 Contact

For questions or feedback, reach out at: hitesh.parshar2016@gmail.com

---

**Happy Coding! 🎉**
