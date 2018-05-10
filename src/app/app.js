

const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');



var transporter = nodemailer.createTransport({
    service: 'gmail',
    host:'smtp.gmail.com',
    auth:{
        // xoauth2: xoauth2.createXOAuth2Generator({
            type:'OAuth2',
            user:'asprontopal@gmail.com',
            pass:'aspronto-pal2018!!',
            clientId: '939762553003-qcc1c3o15t255kc4lbcgpbvkutr2dnar.apps.googleusercontent.com',
            clientSecret: 'Zrkh2cdzmR0G8exYpVkjrqMH',
            refreshToken:'1/tW6XLX2lDs26QthSzkvFn4in4Tyu5mwWcu4ZpsHw75E'
        // })
    }
})

var mailOptions = {
    from: 'Asthma Pal <asprontopal@gmail.com>',
    to: 'jlyjialin@gmail.com',
    subject: 'Asthma Risk Level',
    text: 'Take care today, the asthma risk level is beyond normal level.'
}

transporter.sendMail(mailOptions, function(err, res){
    if(err){
        console.log('Error');
        console.log(err);
        console.log(res);
    } else{
        console.log('Email sent');
    }
});

// const nodemailer = require('nodemailer');

// const gmailEmail = 'asprontopal@gmail.com';
// const gmailPassword = 'aspronto-pal2018!!';

// const mailTransport = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//   user: gmailEmail,
//   password: gmailPassword
// }
// });

// const APP_NAME = 'Aspronto'

// exports.salonCreatedAccount = functions.database.instance('abc-in').ref('/abc/{def}').onCreate(event => {
// const snapshot = event.data;
// const val = snapshot.val()
// console.log(val);

// const email = val.email;
// const displayname = val.name;

// return sendconfirmationEmail(email, displayname);
// });

// function sendconfirmationEmail(email, displayName){
// const mailOptions = {
//   from: `${APP_NAME} <abc.in@gmail.com>`,
//   to: email
// };

// mailOptions.subject = `${APP_NAME} Asthma Risk level!`;
// mailOptions.text = `Take care`;
// return mailTransport.sendMail(mailOptions).then(() => {
//   console.log(`New welcome mail sent to ${email}`);
// });
// }