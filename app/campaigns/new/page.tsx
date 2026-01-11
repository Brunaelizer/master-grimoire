import CampaignForm from '@/components/CampaignForm'
import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'

function NewCampaign() {
    return (
        <div>
            <div>New</div>
            <div className="mt-20 flex flex-1 flex-col items-center">
                <Card className='w-full max-w-md'>
                    <CardHeader className='mb-4'>
                        <CardTitle>Create a new campaign</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CampaignForm />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default NewCampaign