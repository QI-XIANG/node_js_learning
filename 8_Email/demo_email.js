var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your@gmail.com',
        pass: 'your app password' //要設定應用程式密碼，不然google會擋 (有開兩階段驗證的話)
    }
});

var mailOptions = {
    from: 'your@gmail.com',
    to: 'your@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!',
    html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});