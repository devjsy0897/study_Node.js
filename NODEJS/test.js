const nodemailer = require('nodemailer');

const email = {
    
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "28255bf119c983",
          pass: "cd36e8fad21aea"
        }
    
};

const send = async(option)=>{
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
        if(error){
            console.log(error);
        }else {
            console.log(info);
            return info.response;
        }
    });
};

let email_data = {
    from: "devjsy0897@gamil.com",
    to: "devjsy0897@gmail.com",
    subject:"테스트 메일 입니다.",
    text:"node.js 한시간 만에 끝내보자."
}

send(email_data);
