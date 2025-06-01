import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { subject, sender, text } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_APP_ENV_GMAIL_ADDRESS,
      pass: process.env.NEXT_PUBLIC_APP_ENV_GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_APP_ENV_GMAIL_ADDRESS,
      to: 'jiumaker@naver.com',
      subject,
      text: `보내는 사람: ${sender}, 내용: ${text}`,
    });

    return res.status(200).json({ message: 'Success: email was sent' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'COULD NOT SEND MESSAGE' });
  }
}
