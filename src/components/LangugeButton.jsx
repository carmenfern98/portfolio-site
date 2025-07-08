/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import React, {useState, useEffect} from "react";
import { useTranslation } from "react-i18next";

const ButtonContainer = styled.div`
display: flex;
align-items: center;
gap: 0.5em;
cursor: pointer;
`

const SwitchWrapper = styled.div`
position: relative;
width: 5em;
height: 2em;
background-color: #0035FF80;
border-radius: 100px;
transition: background 0.3s ease;
`
const SwitchKnob =styled.div`
position: absolute;
top:0.5em;
left: ${props => props.checked ? '3em' : '0.5em'};
width: 1em;
height: 1em;
background: white;
border-radius: 50%;
transition: left 0.3s ease;
`
const HiddenCheckbox = styled.input`
display: none;`

const LanguageLabel = styled.span`
font-weight: bold;
font-size: 0.9rem`

const LanguageSwitcher = () => {
    const {i18n} = useTranslation();
    const [isEnglish, setIsEnglish] = useState(i18n.language==="en");

    useEffect(()=>{
        setIsEnglish(i18n.language === "en")}, [i18n.language]);

    const changeLanguage = () => {
        const newLang = isEnglish ? "ja" : "en";
        i18n.changeLanguage(newLang);
    };
return(
    <ButtonContainer onClick={changeLanguage}>
        <LanguageLabel>{isEnglish ? "JP":"EN"}</LanguageLabel>
        <SwitchWrapper>
        <HiddenCheckbox type="checkbox" checked={isEnglish}/>
        <SwitchKnob checked={isEnglish}/>
        </SwitchWrapper>
    </ButtonContainer>
)
};

export default LanguageSwitcher