"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {Form} from "../ui/form";
import { Input } from "../ui/input";
import CustomFormField from "../ui/CustomFormField";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const Patients = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
            <h1 className="header">Hi There 👋 </h1>
            <p className="text-dark-700">Schedule your first appointment</p>
        </section>
        <CustomFormField 
        control= {form.control}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default Patients;
