"use client";

import { useState } from "react";
import Link from "next/link";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import VantaBackground from "@/components/vanta-background";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Login attempt with:", { email, password });
      setIsLoading(false);
      // Redirect would happen here in a real app
    }, 1500);
  };

  return (
    <Layout>
      <VantaBackground
        effect="dots"
        options={{
          color: "#5000ca",
          color2: "#ff8c00",
          backgroundColor: "#ffffff",
        }}
      >
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <Card className="w-full max-w-md">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">
                {" "}
                Welcome back{" "}
              </CardTitle>{" "}
              <CardDescription className="text-center">
                {" "}
                Sign in to your account to continue{" "}
              </CardDescription>{" "}
            </CardHeader>{" "}
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email{" "}
                  </label>{" "}
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>{" "}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Password{" "}
                    </label>{" "}
                    <Link
                      href="/forgot-password"
                      className="text-sm text-primary hover:underline"
                    >
                      Forgot password ?
                    </Link>{" "}
                  </div>{" "}
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>{" "}
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {" "}
                  {isLoading ? "Signing in..." : "Sign in"}{" "}
                </Button>{" "}
              </form>{" "}
              <div className="mt-4 relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"> </div>{" "}
                </div>{" "}
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    {" "}
                    Or continue with{" "}
                  </span>{" "}
                </div>{" "}
              </div>{" "}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <Button variant="outline" type="button" className="w-full">
                  Google{" "}
                </Button>{" "}
                <Button variant="outline" type="button" className="w-full">
                  Facebook{" "}
                </Button>{" "}
              </div>{" "}
            </CardContent>{" "}
            <CardFooter className="flex flex-col">
              <p className="text-center text-sm text-gray-600 mt-2">
                Dont have an account ?{" "}
                <Link href="/signup" className="text-primary hover:underline">
                  Sign up{" "}
                </Link>{" "}
              </p>{" "}
            </CardFooter>{" "}
          </Card>{" "}
        </div>{" "}
      </VantaBackground>{" "}
    </Layout>
  );
}
