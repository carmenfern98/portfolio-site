/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { useTranslation } from "react-i18next"

const ResumeLinkBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const StyledResumeLink = styled.a`
border-radius: 12px;
padding: .75em;
border: 2px solid #ccc;
margin: 1em;
width: 8em;
background-color: #f9f9f9;
color: #333;
`

export const Resume =()=>
{
    const {t, i18n} = useTranslation();
    const isEnglish = i18n.language === 'en'
   return(
        <ResumeLinkBox>
        <StyledResumeLink href= {isEnglish? '/Resume.pdf' : '/履歴書.pdf'} target='_blank' rel='noopener noreferrer' >{t('resume')}</StyledResumeLink>
        </ResumeLinkBox>
    )
}