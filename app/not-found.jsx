import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] px-4 text-center">
      <h1 className="text-6xl font-bold mb-4 glitch-effect">
        <span className="glitch-text" data-text="404">
          404
        </span>
      </h1>
      <h2 className="text-2xl font-semibold mb-4 glitch-effect">
        <span className="glitch-text" data-text="Page Not Found">
          Page Not Found
        </span>
      </h2>
      <p className="text-gray-600 mb-8">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been
        moved.
      </p>
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
