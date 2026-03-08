import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/clerk-react";
import { toast } from "react-hot-toast";
function HomePage() {

  
  return (
    <div>
      <button className="btn btn-seconday" onClick={ () => toast.success("This is success toast")}>Click me</button>
      <SignedOut>
        <SignInButton mode="modal">
          <button>Log in</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton>
          <button>Log out</button>
        </SignOutButton>
        <UserButton />
      </SignedIn>
    </div>
  );
}

export default HomePage;
