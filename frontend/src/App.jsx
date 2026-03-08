import { SignInButton } from "@clerk/clerk-react";
import { SignOutButton } from "@clerk/clerk-react";
import { SignedOut } from "@clerk/clerk-react";
import { SignedIn } from "@clerk/clerk-react";
import { UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ProblemsPage from "./pages/ProblemsPage.jsx"; 
import { Toaster } from "react-hot-toast"; 
function App() {
   const {isSignedIn}=useUser();
  return (
    <>
    <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/about" element={<AboutPage />} />
     <Route path="/problems" element={isSignedIn ? <ProblemsPage /> : <HomePage />} />
    </Routes>
    
    <Toaster/>
    </>
  );
    
//   <h1>Welcome to the app</h1>

// <button className="btn btn-primary">Click me </button>


//   <SignedOut>
//     <SignInButton mode="modal">
//       <button>Log in</button>
//     </SignInButton>
//   </SignedOut>

//   <SignedIn>
//     <SignOutButton />
//     </SignedIn>
    
//      <UserButton />
    //  </routes>

 


   
}
export default App;
