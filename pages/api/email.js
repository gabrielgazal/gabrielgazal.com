import { Resend } from 'resend';
import EmailTemplate from '../../components/EmailTemplate.js';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendEmail(req, res) {
  try {
    const data = req.body;

    const response = await resend.emails.send({
      from: 'website@gabrielgazal.com',
      to: process.env.RESEND_DESTINATION_EMAIL,
      reply_to: data.email,
      subject: `${data.name} - via gabrielgazal.com`,
      react: <EmailTemplate {...data} />,
    });

    res.status(200).json({ message: 'Email sent', response });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
}
