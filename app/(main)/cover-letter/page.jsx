import { getCoverLetters } from "@/actions/cover-letter";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import CoverLetterList from "./_components/cover-letter-list";

export default async function CoverLetterPage() {
  const coverLetters = await getCoverLetters();

  return (
    <div>
      <div className="container mx-auto py-6">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between space-y-10">
          <h1 className="text-6xl font-bold glitch-effect">
            <span className="glitch-text" data-text="My Cover Letters">
              My Cover Letters
            </span>
          </h1>
          <Link href="/cover-letter/new">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create New
            </Button>
          </Link>
        </div>
        <hr className="bg-primary/95 mb-10" />
        <CoverLetterList coverLetters={coverLetters} />
      </div>
    </div>
  );
}
