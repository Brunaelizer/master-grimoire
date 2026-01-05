import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import AuthForm from '@/components/AuthForm'
import Link from "next/link";

function SignupPage() {
  return (
    <div className="mt-20 flex flex-1 flex-col items-center">
      <Card className='w-full max-w-md'>
        <CardHeader className='mb-4'>
          <CardTitle>Create to your account</CardTitle>
          <CardDescription>Enter your email and password</CardDescription>
          <CardAction>
            <Button variant="link" asChild><Link href="/">Go back</Link></Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <AuthForm type="signup" />
        </CardContent>
      </Card>
    </div>
  )
}

export default SignupPage