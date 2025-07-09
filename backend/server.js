const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://carmenportfolio.netlify.app');
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json())



app.post('/api/contact', async(req,res)=>{
    const {name, email, message} = req.body;
    const gmail= process.env.GMAIL;
    const password = process.env.PASSWORD;

    try{
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth : {
             user: gmail,
             pass: password
            }
        });

        await transporter.sendMail({
            from: gmail,
            replyTo: email,
            to: 'carmenmfernandez98@gmail.com',
            subject: `New contact form submission from ${name}`,
            text: message
        });

        res.status(200).json({message: 'Email sent successfully'});}
        catch(error){console.error('Error sending email:', error);
        res.status(500).json({message:'Server error'});
        }
    });
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
