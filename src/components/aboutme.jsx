/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { useTranslation } from "react-i18next";
import Headshot from '../assets/IMG_1440.JPG';

const StyledHeadshot = styled.img`
width: 40%;
height: auto;
object-fit: cover;
flex-shrink: 0;
border-radius: 8px;

@media (max-width:768px) {
width: 100%;
margin-top: 1rem}
`
const AboutMeContainer = styled.div`
display: flex;

@media (max-width: 768px) {
flex-direction: column;}
`
const AboutMeText = styled.div`
display: flex;
flex-direction: column;
font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  padding: 1em;

@media (max-width:768px) {
padding:0;}
  `
export const AboutMe =() =>{
    const {t} = useTranslation();

       const renderParagraphs = (text) =>
        text.split('\n').map((para,i)=>
        (<p key={i} style={{marginBottom:'1em'}}>
        {para}
        </p>))

    return(
        <div>
        <h2>{t('about-me')}</h2>
        <AboutMeContainer>
        <StyledHeadshot src={Headshot} alt='My headshot'/>
        <AboutMeText>
        {renderParagraphs(t('about-me-text'))}
        </AboutMeText>
        </AboutMeContainer>   
        </div>
    )
}