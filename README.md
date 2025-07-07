# 🚀 Goggl – Google Search Clone


<p align="center">
  <b>A modern, modular Google Search clone built with React</b><br/>
  <em>Web, News, Image, and Video search powered by the Google Search API on RapidAPI</em>
</p>

<p align="center">
  <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React-18.x-blue?logo=react" alt="React" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/TailwindCSS-3.x-38bdf8?logo=tailwindcss" alt="Tailwind CSS" /></a>
  <a href="https://rapidapi.com/apigeek/api/google-search3/"><img src="https://img.shields.io/badge/API-Google_Search3-4B8DF8?logo=google" alt="Google Search API" /></a>
  <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="MIT License" />
</p>

---

## ✨ Features

- 🔎 Web search, 📰 News search, 📸 Image search, 📺 Video search
- Modular, maintainable React component structure
- Responsive and accessible UI with [Tailwind CSS](https://tailwindcss.com/)
- 🌗 Dark mode toggle
- Loading and error handling
- [React Router v6](https://reactrouter.com/en/main) for navigation


---

## 🗂️ Project Structure

```
goggl/
  ├── public/
  ├── src/
  │   ├── components/
  │   │   ├── Footer.jsx
  │   │   ├── ImageResults.jsx
  │   │   ├── Links.jsx
  │   │   ├── Loading.jsx
  │   │   ├── Navbar.jsx
  │   │   ├── NewsResults.jsx
  │   │   ├── Results.jsx
  │   │   ├── RoutesComponent.jsx
  │   │   ├── Search.jsx
  │   │   ├── SearchResults.jsx
  │   │   └── VideoResults.jsx
  │   ├── contexts/
  │   │   └── StateContextProvider.js
  │   ├── App.js
  │   ├── App.css
  │   ├── index.js
  │   └── index.css
  ├── .env (not committed)
  ├── package.json
  └── README.md
```

---

## 🛠️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (v6 or later)

### Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/goggl.git
   cd goggl
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up your API key:**
   - Create a `.env` file in the root directory:
     ```sh
     touch .env
     ```
   - Add your RapidAPI key:
     ```env
     REACT_APP_API_KEY=your_rapidapi_key_here
     ```
   - [Get your API key from RapidAPI](https://rapidapi.com/apigeek/api/google-search3/)

### Running the App
```sh
npm start
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧑‍💻 Usage
- Use the search bar to search Google or type a URL.
- Switch between All, News, Images, and Videos using the navigation links.
- Toggle dark/light mode with the button in the navbar.

---

## 🩺 Troubleshooting
- **API Key Issues:** Ensure your `.env` file is set up and restart the dev server after changes.
- **CORS or Network Errors:** Check your API key and RapidAPI subscription status.
- **Rate Limiting:** The free tier of the API may have request limits. See the RapidAPI dashboard for usage.
- **Router Errors:** Only one `<Router>` should exist in the app. Routing is handled in `index.js` using React Router v6.

---

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Author

Made with 💖 by [Rishabh Dhawad](https://github.com/rishabh-dhawad)