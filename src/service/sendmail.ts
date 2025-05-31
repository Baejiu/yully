export type MailType = {
  subject: string;
  sender: string;
  text: string;
};

export async function sendContactEmail(emailForm: MailType) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(emailForm),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  console.log(data);
  if (!response.ok) {
    throw new Error(data.message || '서버 요청에 실패함');
  }

  return data;
}
