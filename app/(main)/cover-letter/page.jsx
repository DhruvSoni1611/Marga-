import { getCoverLetters } from "@/actions/cover-letter";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import CoverLetterList from "./_components/cover-letter-list";

export default async function CoverLetterPage() {
  const coverLetters = await getCoverLetters();

  return (
    <div data-color-mode="light" className="space-y-4 mx-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-2">
        <h1 className="font-bold text-4xl md:text-6xl glitch-effect">
          <span className="glitch-text" data-text="My Cover Letters">
            My Cover Letters
          </span>
        </h1>
        <div className="space-x-2 mt-4">
          <Link href="/cover-letter/new">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create New
            </Button>
          </Link>
        </div>
      </div>

      <hr className="bg-primary/95" />
      <CoverLetterList coverLetters={coverLetters} />
    </div>
  );
}
