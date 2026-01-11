'use client';
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';


export default function Campaign() {
    const { id } = useParams();
    return <div>Campaign: {id}</div>;
}