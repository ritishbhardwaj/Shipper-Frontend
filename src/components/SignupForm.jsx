import { Form } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

import styles from "./LoginForm.module.css";

import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  return (
    <>
      <div className="flex flex-col gap-6 w-full max-w-lg   mx-auto mt-40 mb-40">
      <h2 className="text-2xl font-bold text-center">
          Signup to your account
        </h2>
        <Card>
          <CardContent>
            <Form method="post" action="/signup" >
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="input-field-username">
                    Username
                  </FieldLabel>
                  <FieldDescription>Enter your email address.</FieldDescription>
                  <Input
                    id="input-field-username"
                    type="email"
                    placeholder="Enter your username"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="input-field-password">
                    Password
                  </FieldLabel>
                  <FieldDescription>Enter password.</FieldDescription>
                  <Input
                    id="input-field-password"
                    type="password"
                    placeholder="Enter your password"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="input-field-password">
                    Confirm Password
                  </FieldLabel>
                  <FieldDescription>Confirm your password.</FieldDescription>
                  <Input
                    id="input-field-password"
                    type="password"
                    placeholder="Enter your password"
                  />
                </Field>

                <Field>
                    <FieldLabel htmlFor="input-field-dateofbirth">
                    Date of Birth <div className="text-sm text-muted-foreground">
                        (optional)
                      </div>
                    </FieldLabel>
                    <FieldDescription>Enter your date of birth.</FieldDescription>
                    <Input
                    id="input-field-dateofbirth"
                    type="date"
                    placeholder="Enter your date of birth"
                  />

                </Field>


                <Field>
                    <Button className="cursor-pointer">
                        Signup
                    </Button>
                </Field>
              </FieldGroup>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};


export const homeAction = () =>{

        console.log("home action");
    
    }



export default SignupForm;
