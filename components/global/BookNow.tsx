"use client";
import { Button } from "@/lib/shad_cn/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/lib/shad_cn/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/lib/shad_cn/components/ui/form";
import { Input } from "@/lib/shad_cn/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const formSchema = z.object({
    name: z.string().min(2, { message: "Please provide a valid name" }),
    email: z.email({ error: "Please provide a valid email address" }).optional(),
    phone: z.string().min(9, "Please provide a valid phone number")
});

export default function BookNow(props: { title: string }) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { name: "" },
    });
    const [isOpened, setIsOpened] = useState(false);

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        toast.success("Order Booked Successfully", {
            description: `Order for ${data.name} has been booked and our team will contact you shortly.`
        });

        setIsOpened(false);

    };

    return (
        <Dialog open={isOpened} onOpenChange={setIsOpened} >

            <Button className="flex-1" onClick={() => setIsOpened(true)}>
                <ShoppingCart />
                Book Now
            </Button>


            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{props.title}</DialogTitle>
                    <DialogDescription>
                        Fill out your details below to book now.
                    </DialogDescription>
                </DialogHeader>


                <Form {...form} >
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7 mt-5">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email(optional)</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number / Whatsapp</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full">
                            Book Now
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}