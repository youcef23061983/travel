// filepath: /C:/Users/youcef/Documents/GitHub/travel/src/app/[locale]/auth/signout.js
import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <div>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}
