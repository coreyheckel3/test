
import Link from "next/link";
export default function FourOFour() {
  return (
    <div>
      <h1>You have reached the end of the internet.. go back or parish!</h1>
      <p>
        <Link href="/">
          Go back to Home
        </Link>
      </p>
    </div>
  );
}