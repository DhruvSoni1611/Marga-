import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Quiz from "../_components/quiz";

export default function MockInterviewPage() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col space-y-2 mx-4">
        <Link href="/interview">
          <Button variant="link" className="gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Back to Interview Preparation
          </Button>
        </Link>

        <div>
          <h1 className="text-4xl md:text-6xl font-bold">Mock Interview</h1>
          <p className="text-muted-foreground mt-2">
            Test your knowledge with industry-specific questions
          </p>
        </div>
        <hr className="bg-primary/95" />
      </div>
      <Quiz />
    </div>
  );
}
