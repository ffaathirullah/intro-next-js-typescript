import { useEffect } from "react";
import { useRouter } from "next/router";

function Custom404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  });
  return (
    <div>
      <p>404 not found</p>
    </div>
  );
}

export default Custom404;
