import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import CoverLetterGenerator from "../_components/cover-letter-generator";

export default function NewCoverLetterPage() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col mx-4">
        <Link href="/cover-letter">
          <Button variant="link" className="gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Back to Cover Letters
          </Button>
        </Link>

        <div className="pb-6">
          <h1 className="font-bold text-4xl md:text-6xl glitch-effect">
            <span className="glitch-text" data-text="Create Cover Letter">
              Create Cover Letter
            </span>
          </h1>
          <p className="text-muted-foreground mt-2">
            Generate a tailored cover letter for your job application
          </p>
        </div>
        <hr className="bg-primary/95" />
      </div>

      <CoverLetterGenerator />
    </div>
  );
}
