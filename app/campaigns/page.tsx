import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function Campaigns() {
    return (
        <div>
            <div>Campaigns</div>
            <Button asChild><Link href="campaigns/new">New</Link></Button>
        </div>
    )
}

export default Campaigns