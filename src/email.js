// // # ------------------
// // # Create a campaign\
// // # ------------------
// // # Include the Sendinblue library\
// var SibApiV3Sdk = require('sib-api-v3-sdk');
// var defaultClient = SibApiV3Sdk.ApiClient.instance;
// // # Instantiate the client\
// var apiKey = defaultClient.authentications['api-key'];
// apiKey.apiKey = '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';
// var apiInstance = new SibApiV3Sdk.EmailCampaignsApi();
// var emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign();
// // # Define the campaign settings\
// emailCampaigns.name = "Campaign sent via the API";
// emailCampaigns.subject = "My subject";
// emailCampaigns.sender = {"name": "From name", "email":"patriciopato117@gmail.com"};
// emailCampaigns.type = "classic";

// // # Content that will be sent\
// content = {
// htmlContent: 'Congratulations! You successfully sent this example campaign via the Sendinblue API.',
// // # Select the recipients\
// recipients: {listIds: [2, 7]},
// // # Schedule the sending in one hour\
// scheduledAt: '2018-01-01 00:00:01'
// }


// // # Make the call to the client\
// apiInstance.createEmailCampaign(emailCampaigns).then(function(data) {
// console.log('API called successfully. Returned data: ' + data);
// }, function(error) {
// console.error(error);
// });


const sendEmail = async(message, receiver="pgarcia@talentpath.com") =>
{
    // const SibApiV3Sdk = require('sib-api-v3-sdk');
    // let defaultClient = SibApiV3Sdk.ApiClient.instance;

    // let apiKey = defaultClient.authentications['api-key'];
    // apiKey.apiKey = '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';

    // let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    // let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    // sendSmtpEmail.subject = "My {{params.subject}}";
    // sendSmtpEmail.htmlContent = message;
    // sendSmtpEmail.sender = {"name":"John Doe","email":"example@example.com"};
    // sendSmtpEmail.to = [{"email":"patriciogm@live.com","name":"PG"}];
    // sendSmtpEmail.cc = [{"email":"example2@example2.com","name":"Janice Doe"}];
    // sendSmtpEmail.bcc = [{"email":"John Doe","name":"example@example.com"}];
    // sendSmtpEmail.replyTo = {"email":"replyto@domain.com","name":"John Doe"};
    // sendSmtpEmail.headers = {"Some-Custom-Name":"unique-id-1234"};
    // sendSmtpEmail.params = {"parameter":"My param value","subject":"New Subject"};

    // apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
    // console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    // }, function(error) {
    // console.error(error);
    // });

    // using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// javascript
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: receiver, // Change to your recipient
  from: 'patriciopato117@gmail.com', // Change to your verified sender
  subject: 'Bot Receipt',
  text: message,
  html: message,
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent!')
  })
  .catch((error) => {
    console.error(error)
  })
}

module.exports = { sendEmail}