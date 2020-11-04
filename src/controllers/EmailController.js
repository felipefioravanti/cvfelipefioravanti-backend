const nodemailer = require('nodemailer');
const SMTP_CONFIG = require('../config/smtp');

const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass
    },
    tls: {
        rejectUnauthorized: false,
    },
});

async function run(name, email, title, message) {
    console.log(title);
    const mailSent = await transporter.sendMail({
        text: message,
        subject: title,
        from: `${name} < ${email} >`,
        to: 'felipefioravanti00@gmail.com'
    });
    console.log(mailSent);
}

exports.Teste = run;