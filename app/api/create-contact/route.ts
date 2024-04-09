import { AddContactToList, ContactsApi, ContactsApiApiKeys, CreateContact } from "@getbrevo/brevo";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
   const { email } = await req.json();
   const apiKey = "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";

   const apiInstance = new ContactsApi();
   apiInstance.setApiKey(ContactsApiApiKeys.apiKey, apiKey);

   const createContact = new CreateContact();

   createContact.email = email;

   await apiInstance.createContact(createContact);

   return NextResponse.json("Email created");
}
