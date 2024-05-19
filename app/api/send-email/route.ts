import { SendSmtpEmail, TransactionalEmailsApi, TransactionalEmailsApiApiKeys } from "@getbrevo/brevo";
import { NextRequest, NextResponse } from "next/server";
import { toast } from "sonner";

export async function POST(req: NextRequest, res: NextResponse) {
   const { userEmail, subject, content } = await req.json();

   const apiKey = "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";

   const apiInstance = new TransactionalEmailsApi();
   const sendSmtpEmail = new SendSmtpEmail();

   apiInstance.setApiKey(TransactionalEmailsApiApiKeys.apiKey, apiKey);

   sendSmtpEmail.subject = subject;
   sendSmtpEmail.sender = { name: userEmail, email: userEmail };
   sendSmtpEmail.htmlContent = `<p>${userEmail} | ${subject} | ${content}</p>`;
   sendSmtpEmail.to = [{ email: "patchikatcha@gmail.com", name: "sample-name" }];
   sendSmtpEmail.replyTo = { email: "example@brevo.com", name: "sample-name" };
   sendSmtpEmail.headers = { "Some-Custom-Name": "unique-id-1234" };

   await apiInstance.sendTransacEmail(sendSmtpEmail);

   return NextResponse.json("Email sent");
}
