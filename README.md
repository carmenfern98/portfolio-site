# Portfolio Site

A bilingual portfolio site for Carmen Fernandez, showcasing professional Salesforce development work, personal React projects, resume, and a contact form. Content is available in English and Japanese.

## About

This site highlights experience as a Salesforce Engineer (Flow, Apex, LWC, Batch Apex) alongside personal web development projects built with React. Visitors can switch between English and Japanese at any time.

## Tech Stack

**Frontend**

- React
- Vite
- Emotion (CSS-in-JS)
- i18next / react-i18next (multilingual support)

**Backend**

- Node.js
- Express (contact form API)



## Features

- About Me section with professional background
- Portfolio with Salesforce and React project descriptions
- Demo links for personal React projects (Jammming, Cafe Favorites)
- Resume download (English and Japanese PDFs)
- Contact form connected to Express backend
- Language switcher (EN / JA)
- Responsive layout for mobile and desktop



## Project Structure

```
locales/
  en/en.json    # English copy
  ja/ja.json    # Japanese copy
src/
  components/   # AboutMe, Portfolio, Resume, ContactForm, LanguageSwitcher
  i18n.js       # i18next configuration
backend/        # Express server for contact form
```



## Getting Started

```bash
# Install dependencies
npm install

# Run frontend dev server
npm run dev

# Run backend (from backend/)
node server.js
```

Set `VITE_API_URL` in a `.env` file to point the contact form at your backend.

## What I Learned

- Building a multilingual React app with i18next and locale-based content switching
- Structuring copy in JSON locale files for easy EN/JA maintenance
- Connecting a frontend contact form to an Express backend
- Responsive layout with Emotion styled components



## Future Improvements

- Add dark mode toggle
- Integrate a CMS for easier project updates
- Improve accessibility (alt text, form feedback messages)
- Add screenshots or architecture notes for Salesforce projects

