/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { useState } from "react"
import { useTranslation } from "react-i18next";

const NameEmailContainer = styled.div`
`
const InputFormContainer = styled.div`
display:flex;
flex-direction: column;
background-color: #f9fafb;
border-radius: 12px;
margin: 2rem;
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
max-width: 600px;
width:90%;

@media (max-width:768px) {
width:95%;
}
`

const MessageContainer = styled.div`
`

const NameInput = styled.input`
font-family: "Inter", sans-serif;
font-optical-sizing: auto;
font-weight: 400;
font-style: normal;
border-radius: 4px;
margin:1rem;
padding:1rem;
border: 1px solid #ccc;`

const EmailInput = styled.input`
font-family: "Inter", sans-serif;
font-optical-sizing: auto;
font-weight: 400;
font-style: normal;
border-radius: 4px;
margin:1rem;
padding: 1rem;
border: 1px solid #ccc;
`
const MessageInput = styled.textarea`
font-family: "Inter", sans-serif;
font-optical-sizing: auto;
font-weight: 400;
font-style: normal;
border-radius: 4px;
width: 30rem;
height: 15rem;
white-space: pre-wrap;
word-wrap:break-word;
line-height: 1.5;
border: 1px solid #ccc;

@media (max-width:768px) {
width:100%;
max-width:100%;
}
`
const ContactTitle = styled.h2`
`
const SubmitButton = styled.button`
border-radius: 12px;
border: 2px solid #ccc;
font-family: "Inter", sans-serif;
font-optical-sizing: auto;
font-weight: 400;
font-style: normal;
`

const FormWrapper = styled.div`
display: flex;
justify-content:center;
padding-top: 4rem;`

export const ContactForm = () => {
    const {t} = useTranslation();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const handleChange = (e) => {
        const{name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();

        try{
            const res = await fetch('http://localhost:8000/api/contact',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(formData)
                });

        if(res.ok){
            setFormData({name:'', email:'', message:''})
        }}
        catch(err){
            console.error('Client error sending form', err);
        }
        }

  return(
    <FormWrapper>
        <form onSubmit={handleSubmit}>
        <InputFormContainer>
        <ContactTitle>{t('contact-title')}</ContactTitle>
        <NameEmailContainer>
        <NameInput 
        type='text'
        name='name'
        placeholder={t('name-entry')}
        value = {formData.name}
        onChange = {handleChange}/>
        <EmailInput type='text'
        name ='email'
        placeholder ={t('email-entry')}
        value = {formData.email}
        onChange = {handleChange}/>
        </NameEmailContainer>
        <MessageContainer>
        <MessageInput type='text'
        name= 'message'
        placeholder = {t('message-entry')}
        value = {formData.message}
        onChange = {handleChange}/>
        </MessageContainer>
        </InputFormContainer>
        <SubmitButton type='submit'>{t('send')}</SubmitButton>
        </form>
    </FormWrapper>
  )
}