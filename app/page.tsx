import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="container min-w-full flex min-h-screen flex-col items-center justify-center gap-[2rem]">
      <h1 className="font-extrabold text-4xl md:text-6xl">Todo App</h1>
      <div className="flex flex-col">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="email" placeholder="Email" />
          <Button type="submit">Subscribe</Button>
        </div>
      </div>
    </main>
  );
}
