"use client";
import Button from "@/components/Button";
import CustomInput from "@/components/Input";
import { PAGES } from "@/constants/links";
import { LoginFormSchema } from "@/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const rounter = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(LoginFormSchema),
    shouldFocusError: true,
  });
  console.log(errors);
  const onSubmitHandler = () => {
    rounter.push(PAGES.dashboard);
  };
  return (
    <div
      className="
            h-[calc(100vh-56px)] w-full 
            bg-[linear-gradient(154deg,white_50%,#1e40af_50%)]
            dark:bg-[linear-gradient(154deg,#0f172a_50%,#1e3a8a_50%)]
            flex items-center justify-center flex-col
          ">
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="
          bg-white/30 dark:bg-black/30
          backdrop-blur-md 
          border border-white/40 dark:border-white/10
          w-1/3 max-w-sm
          shadow-2xl rounded-2xl p-8
          flex flex-col gap-6
        ">
        <h2 className="text-3xl text-black dark:text-white text-center">
          Login
        </h2>
        <CustomInput
          register={register("email")}
          type="text"
          name="email"
          title="Email"
          className="w-full"
          errors={errors.email?.message}
          errorClassName="h-4"
        />
        <CustomInput
          register={register("password")}
          type="password"
          name="password"
          title="Password"
          className="w-full"
          errors={errors.password?.message}
          errorClassName="h-4"
        />

        <Button type="submit" classname="mt-6">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Login;
