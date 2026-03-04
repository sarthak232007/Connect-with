import { useEffect, useState } from "react";
import "./App.css";
import { SignInButton } from "@clerk/clerk-react";
import { SignOutButton } from "@clerk/clerk-react";
import { SignedOut } from "@clerk/clerk-react";
import { SignedIn } from "@clerk/clerk-react";
import { UserButton } from "@clerk/clerk-react";
function App() {
  
  return (
    
    <>
  <h1>Welcome to the app</h1>

  <SignedOut>
    <SignInButton mode="modal">
      <button>Log in</button>
    </SignInButton>
  </SignedOut>

  <SignedIn>
    <SignOutButton />
    <UserButton />
  </SignedIn>
</>

  );
}
export default App;
