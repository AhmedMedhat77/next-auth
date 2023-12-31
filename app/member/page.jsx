import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";

const Member = async () => {
  const session = await getServerSession(options);
  return (
    <div>
      <h1>Member Server Session</h1>
      <p>
        {session?.user?.email}
      
      </p>
      <p>
      {session?.user?.role}
      </p>
    </div>
  );
};

export default Member;
