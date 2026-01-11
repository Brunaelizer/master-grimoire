'use client';
import React, { useTransition } from 'react'
import { CardContent } from './ui/card';
import { Field, FieldDescription, FieldGroup, FieldLabel } from './ui/field';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useRouter } from 'next/router';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { addCampaign, updateCampaign } from '@/actions/campaigns';

type Props = {
    type: "new" | "edit";
}

function CampaignForm({ type }: Props) {
    const isNewForm = type === "new";

    const router = useRouter();

    const [isPending, startTransition] = useTransition();

    const handleSubmit = (formData: FormData) => {
        startTransition(async () => {
            const email = formData.get("campaign-name") as string;

            let errorMessage, title, description;

            if (isNewForm) {
                errorMessage = (await addCampaign(email)).errorMessage;
                title = "Campaign";
                description = "Campaign created successfully";
            } else {
                errorMessage = (await updateCampaign(email)).errorMessage;
                title = "Campaign";
                description = "Campaign edited successfully";
            }

            if (!errorMessage) {
                toast.success(title, {
                    description
                });
                router.replace("/");
            } else {
                toast.error("Error", { description: errorMessage });
            }
        })
    };

    return (
        <form action={handleSubmit}>
            <CardContent>
                <FieldGroup>
                    {isNewForm ?
                        <Field>
                            <FieldLabel htmlFor="campaign-id">Campaign id</FieldLabel>
                            <Input
                                id="campaign-id"
                                type="text"
                                name="campaign-id"
                                disabled
                                readOnly
                            />
                        </Field>
                        : ("")}
                    <Field>
                        <FieldLabel htmlFor="campaign-name">Campaign name</FieldLabel>
                        <Input
                            id="campaign-name"
                            type="text"
                            name="campaign-name"
                            required
                        />
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="campaign-role">Role</FieldLabel>
                        <Input
                            id="campaign-role"
                            type="text"
                            name="campaign-role"
                            disabled
                            readOnly
                            defaultValue="Game master"
                        />
                    </Field>
                    <Field>
                        <Button type="submit">
                            Create
                        </Button>
                    </Field>
                </FieldGroup>
            </CardContent>
        </form>
    )
}

export default CampaignForm