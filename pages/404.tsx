import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import React from "react";
const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/shortcuts");
    }, 3000);
  }, []);
  return (
    <div className="not-found absolute top-1/4 left-1/3">
      <h1>Ooops.....</h1>
      <h2>That page is not exist</h2>
      <p>
        Go back to the <Link href="/shortcuts">Homepage</Link>
      </p>
    </div>
  );
};
export default NotFound;
