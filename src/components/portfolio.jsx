/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { useTranslation } from "react-i18next"
import Inspiration from '../assets/inspiration.png'
import Jammming from '../assets/jammming.png'
import Cafe from '../assets/cafe.png'

const StyledPortfolioPic = styled.img`
width: 40%;
height: auto;
object-fit: contain;
flex-shrink: 0;
border-radius: 8px;

@media (max-width:768px) {
width: 100%;
margin-top: 1rem;
}
`
const PortfolioContainer = styled.div`
display: flex;
align-items: flex-start;
justify-content: space-between;

@media (max-width:768px) {
flex-direction:column;
}

`
const PortfolioText = styled.div`
display: flex;
flex-direction: column;
padding: 1em;

@media (max-width:768px) {
padding:0;
}
`

export const Portfolio = () =>{
    const {t} = useTranslation();

    const renderParagraphs = (text) =>
        text.split('\n').map((para,i)=>
        (<p key={i} style={{marginBottom:'1em'}}>
        {para}
        </p>))
    return(
        <div>
            <h2>{t('portfolio')}</h2>
            <div>
            <h3>{t('project-1')}</h3>
            <PortfolioContainer>
                <PortfolioText>
                {renderParagraphs(t('project-1-description'))}
                 <a href= 'https://inspirationcarmen.netlify.app/'  target='_blank' rel='noopener noreferrer'> {t('portfolio-view')}</a>
                </PortfolioText>
                <StyledPortfolioPic src={Inspiration}/>
            </PortfolioContainer>
            </div>
            <div>
            <h3>{t('project-2')}</h3>
            <PortfolioContainer>
                 <StyledPortfolioPic src={Jammming}/>
                 <PortfolioText>
                {renderParagraphs(t('project-2-description'))}
                  <a href= 'https://carmenfern98.github.io/jammming/'  target='_blank' rel='noopener noreferrer'> {t('portfolio-view')}</a>
                </PortfolioText>
            </PortfolioContainer>
            </div>
            <div>
            <h3>{t('project-3')}</h3>
            <PortfolioContainer>
                <PortfolioText>
                {renderParagraphs(t('project-3-description'))}
                <a href= 'https://carmenfern98.github.io/Cafe-Favorites/'  target='_blank' rel='noopener noreferrer'> {t('portfolio-view')}</a>
                </PortfolioText>
                <StyledPortfolioPic src={Cafe}/>
            </PortfolioContainer>
            </div>
        </div>
    )
}