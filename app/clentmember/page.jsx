"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
const CleintMember = () => {
  const { data: session } = useSession({
    require: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackurl=/member");
    },
    
  });

  return (
    <div>
      <h1>Member Client Session</h1>
      <p>{session?.user?.email}</p>
      <p>{session?.user?.role}</p>
    </div>
  );
};

export default CleintMember;
