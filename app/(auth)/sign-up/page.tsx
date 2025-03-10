"use client";

import React from "react";
import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validations";

const Page = () => (
  <AuthForm
    type="SIGN_UP"
    schema={signUpSchema}
    defaultValues={{
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      avatar: "",
    }}
    onSubmit={() => {}}
  />
);
export default Page;
