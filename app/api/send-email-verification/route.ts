import { NextRequest, NextResponse } from "next/server";
import { SendSmtpEmail, TransactionalEmailsApi, TransactionalEmailsApiApiKeys } from "@getbrevo/brevo";
// import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest, res: NextResponse) {
   const emailToken = await req.json();
   const apiKey = "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";
   // const token: string = uuidv4();

   console.log(emailToken);

   const apiInstance = new TransactionalEmailsApi();
   const sendSmtpEmail = new SendSmtpEmail();

   apiInstance.setApiKey(TransactionalEmailsApiApiKeys.apiKey, apiKey);

   sendSmtpEmail.templateId = 1;
   sendSmtpEmail.subject = "My {{params.token}}";
   sendSmtpEmail.sender = { name: "Patchi Katcha", email: "patchikatcha@gmail.com" };
   sendSmtpEmail.to = [{ email: "vaizard500@gmail.com", name: "sample-name" }];
   sendSmtpEmail.replyTo = { email: "example@brevo.com", name: "sample-name" };
   sendSmtpEmail.headers = { "Some-Custom-Name": "unique-id-1234" };
   sendSmtpEmail.params = { parameter: "My param value", subject: "Verify your account!", token: emailToken };

   apiInstance.sendTransacEmail(sendSmtpEmail);

   return NextResponse.json("Email sent");
}
