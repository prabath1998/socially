import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export function ButtonDemo() {
  return <Button>Button</Button>;
}

export default function Home() {
  return (
    <div className="mt-4">
     <h1>Home </h1>
    </div>
  );
}
