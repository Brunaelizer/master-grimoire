"use client";
import React, { useTransition } from 'react';
import { useRouter } from "next/navigation";
import { CardContent } from './ui/card';
import { Field, FieldDescription, FieldGroup, FieldLabel } from './ui/field';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
import LoginForm from './LoginForm';
import { toast } from 'sonner';
import { loginAction, signupAction } from '@/actions/users';

type Props = {
  type: "login" | "signup"
};

function AuthForm({ type }: Props) {
  const isLoginForm = type === "login";

  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      const email = formData.get("email") as string;
      console.log(isLoginForm);
      const password = formData.get("password") as string;


      let errorMessage, title, description;

      if (isLoginForm) {
        errorMessage = (await loginAction(email, password)).errorMessage;
        title = "Logged in";
        description = "Logged in successfully";
      } else {
        errorMessage = (await signupAction(email, password)).errorMessage;
        title = "Signed Up";
        description = "Account created";
      }

      if (!errorMessage) {
        toast.success(title, {
          description
        });
        router.replace("/");
      } else {
        toast.error("Error", { description: errorMessage });
      }

    });
  };

  return (
    <form action={handleSubmit}>
      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="m@example.com"
              required
              disabled={isPending}
            />
          </Field>
          <Field>
            <div className="flex items-center">
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <a
                href="#"
                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
              >
                {isLoginForm ? ("Forgot your password?") : ("")}
              </a>
            </div>
            <Input id="password" type="password" name="password" required disabled={isPending} />
          </Field>
          <Field>
            <Button type="submit">{isPending ?
              (<Loader2 className="animate-spin" />) :
              (isLoginForm ? ("Login") : ("Signup"))}
            </Button>
            {isLoginForm ? (<Button variant="outline" type="button">
              Login with Google
            </Button>) : ("")}
            <FieldDescription className="text-center">
              {isLoginForm ? ("Don't have an account? ") : ("Already have an account? ")}
              {isLoginForm ? (<a href="/signup">Sign Up</a>) : (<a href="/login">Login</a>)}
            </FieldDescription>
          </Field>
        </FieldGroup>
      </CardContent>
    </form>
  )
}

export default AuthForm