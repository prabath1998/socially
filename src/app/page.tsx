import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";


export function ButtonDemo() {
  return <Button>Button</Button>
}

export default function Home() {
  return (
    <div className="mt-4">
      <SignedOut>
        <SignInButton mode="modal">
          <Button>Sign In</Button>
          
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>

      <ModeToggle/>
    </div>
  );
}
