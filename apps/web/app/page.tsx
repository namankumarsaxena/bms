
import { client } from "@repo/db/client";


export default async function Home() {
  const user = await client.user.findFirst();

  console.log(user);
  return (
    <div>
      name: 
      {user?.username}
      password: 
      {user?.password}
    </div>
  )
}
