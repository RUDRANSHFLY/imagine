"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";

import { ConvexProviderWithClerk } from "convex/react-clerk";

import { AuthLoading, ConvexReactClient } from "convex/react";

import { SignInButton } from "@clerk/clerk-react";
import { Authenticated, Unauthenticated } from "convex/react";
import Loading from "@/components/auth/loading";

interface ConvexReactClientProviderProps {
  children: React.ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(convexUrl);

const ConvexClientProvider = ({ children }: ConvexReactClientProviderProps) => {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <Unauthenticated>
          <SignInButton />
        </Unauthenticated>
        <Authenticated>
    
          {children}
        </Authenticated>

        <AuthLoading>
          <Loading />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};

export default ConvexClientProvider;
