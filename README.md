# NewsWave 📰

A dynamic and responsive news web application that fetches and displays real-time news headlines across various categories. Stay informed with the latest updates in technology, business, entertainment, health, sports, and more.

![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?logo=vercel)
![License](https://img.shields.io/badge/license-MIT-blue)

## 🌐 Live Demo

Check out the live application: **[NewsWave Live](https://newsapp-by-shahid.vercel.app/)**

## ✨ Features

- **📰 Real-time News Updates**: Integrated with news API for live headline fetching
- **📱 Fully Responsive Design**: Seamless experience across mobile, tablet, and desktop devices
- **🔍 Category Filtering**: Browse news by Technology, Business, Entertainment, Health, Sports, and more
- **⚡ Fast & Optimized UI**: Built with React for lightning-fast performance
- **🎨 Modern Design**: Sleek and minimal interface powered by Tailwind CSS
- **🌍 Global Coverage**: News from various international sources
- **📦 Easily Customizable**: Clean codebase for easy extension and modification
- **🔄 Dynamic Updates**: Fresh content loaded on-demand

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React** | Frontend framework for building UI |
| **JavaScript (ES6+)** | Core programming language |
| **Tailwind CSS** | Utility-first CSS framework for styling |
| **News API** | Real-time news data integration |
| **HTML5** | Semantic markup structure |
| **Vercel** | Cloud platform for deployment |

## 📋 Prerequisites

Before you begin, ensure you have:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager
- **News API Key** - Get your free API key from [NewsAPI.org](https://newsapi.org/)

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/shahidansari310/newsapp.git
cd newsapp
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure API Key

Create a `.env` file in the root directory and add your News API key:

```env
REACT_APP_NEWS_API_KEY=your_api_key_here
```

**Note**: Get your free API key from [NewsAPI.org](https://newsapi.org/register)

### 4. Run the Application

```bash
npm start
# or
yarn start
```

The application will open at `http://localhost:3000`

## 📁 Project Structure

```
newsapp/
│
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── Navbar.js          # Navigation component
│   │   ├── NewsCard.js        # Individual news item
│   │   ├── NewsGrid.js        # News display grid
│   │   └── CategoryFilter.js  # Category selection
│   │
│   ├── services/
│   │   └── newsService.js     # API integration
│   │
│   ├── utils/
│   │   └── helpers.js         # Helper functions
│   │
│   ├── App.js                 # Main app component
│   ├── index.js               # Entry point
│   └── index.css              # Tailwind directives
│
├── .env                       # Environment variables
├── tailwind.config.js         # Tailwind configuration
├── package.json
└── README.md
```

## 🎯 Available News Categories

- 🖥️ **Technology** - Latest tech news and innovations
- 💼 **Business** - Market updates and business insights
- 🎬 **Entertainment** - Celebrity news and entertainment updates
- 🏥 **Health** - Health tips and medical breakthroughs
- ⚽ **Sports** - Sports highlights and match updates
- 🌍 **General** - Top headlines from around the world
- 🔬 **Science** - Scientific discoveries and research

## 🌐 Deployment

This application is deployed on Vercel. To deploy your own version:

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables (REACT_APP_NEWS_API_KEY)
4. Deploy!

```bash
# Or use Vercel CLI
npm install -g vercel
vercel
```

## 🔧 Configuration

### Tailwind CSS Setup

Tailwind is configured in `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### API Configuration

The News API integration can be customized in `src/services/newsService.js`:

```javascript
const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';
```

## 📱 Responsive Design

NewsWave is fully responsive with breakpoints for:
- 📱 Mobile: < 640px
- 📱 Tablet: 640px - 1024px
- 🖥️ Desktop: > 1024px

## 🎨 Customization

### Change Color Scheme

Edit your `tailwind.config.js` to customize colors:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    }
  }
}
```

### Modify News Sources

Update the API parameters in `newsService.js` to change news sources or countries.

## 🚧 Future Enhancements

- [ ] **Search Functionality**: Search for specific news topics
- [ ] **Bookmarks**: Save favorite articles for later reading
- [ ] **Dark Mode**: Toggle between light and dark themes
- [ ] **Pagination**: Load more articles with infinite scroll
- [ ] **Share Options**: Share articles on social media
- [ ] **Language Support**: Multi-language news support
- [ ] **Personalization**: Customize news preferences
- [ ] **Offline Mode**: Cache articles for offline reading
- [ ] **Push Notifications**: Get notified about breaking news

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Known Issues

- News API has a rate limit on the free tier (100 requests/day)
- Some news sources may not provide images for all articles

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Shahid Ansari**
- GitHub: [@shahidansari310](https://github.com/shahidansari310)
- Live Demo: [NewsWave](https://newsapp-by-shahid.vercel.app/)

## 🙏 Acknowledgments

- [NewsAPI.org](https://newsapi.org/) for providing the news data
- [Tailwind CSS](https://tailwindcss.com/) for the amazing utility framework
- [React](https://reactjs.org/) community for excellent documentation
- [Vercel](https://vercel.com/) for seamless deployment

## 📞 Support

If you encounter any issues or have questions:
- Open an issue on [GitHub Issues](https://github.com/shahidansari310/newsapp/issues)
- Contact the maintainer

## 🌟 Show Your Support

Give a ⭐️ if you like this project and found it helpful!

---

**Built with ❤️ by Shahid Ansari**
