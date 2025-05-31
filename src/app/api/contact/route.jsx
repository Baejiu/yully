import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import '../../../../envConfig.ts';

const email = process.env.NEXT_PUBLIC_APP_ENV_GMAIL_ADDRESS;
const pass = process.env.NEXT_PUBLIC_APP_ENV_GMAIL_PASS;

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass,
  },
});

const mailOptions = {
  from: email,
  to: 'jiumaker@naver.com',
};

export async function POST(request) {
  const data = await request.json();

  const fixTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `[${fixTime}] ${data.subject}`,
      text: `보내는 사람: ${data.sender}, 내용: ${data.text} `,
    });

    return NextResponse.json({ message: 'Success: email was sent' });
  } catch (error) {
    console.log(error);
    NextResponse.status(500).json({ message: 'COULD NOT SEND MESSAGE' });
  }
}
