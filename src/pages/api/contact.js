import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { phone, sender, text } = req.body;

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
      to: 'sincuva@naver.com',
      subject: `[홈페이지 문의]  ${sender} ${phone}`,
      text: `보내는 사람: ${sender}, 내용: ${text}`,
      html: `
        <div style="background:#f8f6f4;padding:32px 0;">
          <div style="max-width:480px;margin:0 auto;background:#fff;border-radius:12px;box-shadow:0 2px 8px #0001;padding:32px 24px;">
            <h2 style="color:#8c614a;margin-bottom:8px;">올리사랑 홈페이지 문의 접수</h2>
            <p style="color:#222;font-size:16px;margin-bottom:24px;">
              아래와 같이 문의가 접수되었습니다.<br>
              빠른 시일 내에 답변 부탁드립니다.
            </p>
            <table style="width:100%;border-collapse:collapse;font-size:15px;">
              <tr>
                <td style="padding:8px 0;font-weight:bold;width:80px;">성함</td>
                <td style="padding:8px 0;">${sender}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;font-weight:bold;">연락처</td>
                <td style="padding:8px 0;">${phone}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;font-weight:bold;">문의내용</td>
                <td style="padding:8px 0;white-space:pre-line;">${text}</td>
              </tr>
            </table>
            <div style="margin-top:32px;color:#aaa;font-size:13px;text-align:center;">
              올리사랑 홈페이지 문의 메일<br>
              <a href="https://ollylove.co.kr" style="color:#8c614a;text-decoration:none;">https://ollylove.co.kr</a>
            </div>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ message: 'Success: email was sent' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'COULD NOT SEND MESSAGE' });
  }
}
