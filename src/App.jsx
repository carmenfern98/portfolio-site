/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { AboutMe } from './components/aboutme'
import { Portfolio } from './components/portfolio'
import { Resume } from './components/resume'
import { ContactForm } from './components/contactform'
import LanguageSwitcher from './components/LangugeButton'
import { useTranslation } from 'react-i18next'
import './App.css'
import './i18n'

const StyledName = styled.h1`
 font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;`

function App() {
  
  const {t} = useTranslation();
  return (
    <>
      <header>
        <LanguageSwitcher/>
      </header>
      <StyledName>{t('name')}</StyledName>
      <div className="card">
        <AboutMe/>
        <Portfolio/>
        <Resume/>
        <ContactForm/>
      </div>
    </>
  )
}

export default App
