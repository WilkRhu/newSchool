const nodemailer = require("nodemailer");

const user = "wilk.caetano@gmail.com";
const pass = "@Wilk2019#";

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user,
        pass
    }
});

const envMail = async (userMail, userName, userType) => {
    const pageStyle = `<h2> Olá ${userName}, você foi cadastrado(a) como ${userType === "admin" ? "Administrador" : ""} em nossa plataforma! </h2>
         <p> Plataforma de ensino a distância você terá acesso a cadastrar professores e estudantes </br> É a ... Cuidando sempre da educação do seus filhos(as) </p></br>
         <h5><i>&copy; Todos os direitos reservados a ...</i><h5>`;
    
    const envi = await  transporter.sendMail({
        from: user,
        to: userMail,
        replyto: "contato@wilkcaetano.com.br",
        subject: "Olá seja muito bem vindo",
        html: pageStyle
    });
    return envi;
};

module.exports= envMail;