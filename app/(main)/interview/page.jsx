import { getAssessments } from "@/actions/interview";
import StatsCards from "./_components/stats-chart";
import PerformanceChart from "./_components/performance-chart";
import QuizList from "./_components/quiz-list";

export default async function InterviewPrepPage() {
  const assessments = await getAssessments();

  return (
    <div data-color-mode="light" className="space-y-4 mx-4">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-4xl md:text-6xl font-bold glitch-effect space-y-6">
          <span className="glitch-text" data-text="Interview Preparation">
            Interview Preparation
          </span>
        </h1>
      </div>
      <div className="space-y-10">
        <StatsCards assessments={assessments} />
        <PerformanceChart assessments={assessments} />
        <QuizList assessments={assessments} />
      </div>
    </div>
  );
}
