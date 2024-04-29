"use client";
import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function Auth() {
   const [isLoginForm, setIsLoginForm] = useState(true);

   return <>{isLoginForm ? <LoginForm setIsLoginForm={setIsLoginForm}></LoginForm> : <RegisterForm setIsLoginForm={setIsLoginForm}></RegisterForm>}</>;
}
