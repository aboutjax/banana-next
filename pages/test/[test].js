import Router, { useRouter } from "next/router";
import Link from "next/link";

function Test() {
  const router = useRouter();
  const { test } = router.query;
  return (
    <div>
      <h1>{test}</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/stats">
        <a>Stats</a>
      </Link>
    </div>
  );
}

export default Test;
