const mailgun = require('mailgun-js');

const sgMail = {
    setApiKey(apiKey, domain) {
        this.mailgun = mailgun({ apiKey, domain });
    },
    async send(message) {
        if (!this.mailgun) {
            throw new Error('API key or domain not set. Please call setApiKey().');
        }

        const emailData = {
            from: message.from,
            to: message.to,
            subject: message.subject,
            text: message.text,
        };

        try {
            const response = await this.mailgun.messages().send(emailData);
            console.log('Email sent successfully:', response);
        } catch (error) {
            console.error('Error sending email:', error.message || error);
            throw error;
        }
    }
};

module.exports = sgMail;