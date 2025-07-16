import  "react"
import {SignIn, SignUp, SignedOut, SignedIn} from "@clerk/clerk-react";

export function AuthenticationPage(){
    return <div className="auth-container">
        <SignedOut>
            <SignIn routing="path" path="/sign-in"/>
            <SignUp routing="path" path="/sign-up"/>
        </SignedOut>
        <SignedIn>
            <div className="rediret-message">
                <p> You are already singed in.</p>
            </div>
        </SignedIn>
    </div>
}