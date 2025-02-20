const nodemailer = require('nodemailer');
const async = require('async');

// Crear un transportador de correos con Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',  // Puede ser otro servicio como 'hotmail', 'yahoo', etc.
    auth: {
        user: 'trabajogerman64@gmail.com',  // Cambia por tu correo
        pass: 'lkrf okvf bjjc mjfg',        // Cambia por tu contraseña (si usas Gmail, es mejor usar una contraseña de aplicación)
    }
});

// Función para enviar un correo masivo
const sendMassEmail = async (recipients, subject, text) => {
    try {
        const info = await transporter.sendMail({
            from: '"Proyecto 4" <trabajogerman@hotmail.com>',  // Cambia el nombre y el correo
            to: recipients.join(','),  // Receptores de los correos separados por coma
            subject: subject,          // Asunto
            text: text,                // Contenido del correo
        });
        console.log('Correos enviados: ', info);
    } catch (error) {
        console.error('Error al enviar los correos:', error);
    }
};

// Simulamos una lista de 50 correos electrónicos
const emails = [];
for (let i = 1; i <= 10; i++) {
    emails.push(`trabajohecho${i}@ejemplo.com`);  // Simulamos direcciones de correos ficticios
}

// Función para enviar correos en lotes de 50
const sendBatchEmails = () => {
    async.eachLimit(emails, 10, async (email) => {
        const subject = 'AL FIN LO LOGREEEEEEEEE';  // Asunto para todos los correos
        const text = `Hola ${email},\n\nEste es un correo de prueba enviado a través de un sistema de correo masivo. ¡Gracias por ser parte de nuestra comunidad!`;  // Texto personalizado para cada correo
        await sendMassEmail([email], subject, text);  // Enviar el correo a un solo destinatario por vez
    });
};

// Llamamos a la función para enviar el lote
sendBatchEmails();
