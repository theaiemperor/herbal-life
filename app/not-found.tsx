import { Button } from '@/lib/shad_cn/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/shad_cn/components/ui/card';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold">404 - Not Found</CardTitle>
                    <CardDescription>The page you are looking for does not exist.</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="mb-4">
                        It looks like you might have the wrong address.
                    </p>
                    <Link href="/" passHref>
                        <Button>Go back home</Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    );
}
