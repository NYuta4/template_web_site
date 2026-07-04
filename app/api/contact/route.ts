import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, message } = body;

    const data = await resend.emails.send({
      from: "お問い合わせ <onboarding@resend.dev>",
      to: "kuroko.tetukun@gmail.com",
      subject: "ホームページからお問い合わせ",
      html: `
        <h2>お問い合わせが届きました</h2>

        <p><strong>名前</strong></p>
        <p>${name}</p>

        <p><strong>メールアドレス</strong></p>
        <p>${email}</p>

        <p><strong>お問い合わせ内容</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json(data);

  } catch (error) {
  console.error(error);

  return Response.json(
    { error: "送信失敗" },
    { status: 500 }
  );
}
}