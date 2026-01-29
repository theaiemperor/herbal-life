'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/lib/shad_cn/components/ui/card";
import { useEffect } from 'react';


interface Props {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function Error({ error, reset }: Props) {


    useEffect(() => {

        // Report error to error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Something went wrong!</CardTitle>
                    <CardDescription>An unexpected error occurred.</CardDescription>
                </CardHeader>
            </Card>
        </div>
    );
}
