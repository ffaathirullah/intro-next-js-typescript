import React from "react";
import { useRouter } from "next/router";

function Users() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <p>Users</p>
      {id}
    </div>
  );
}

export default Users;
