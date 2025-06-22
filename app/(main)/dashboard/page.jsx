import { getIndustryInsights } from "@/actions/dashboard";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";
import DashboardView from "./_component/dashboard_view";

export default async function DashboardPage() {
  const { isOnboarded } = await getUserOnboardingStatus();

  // If not onboarded, redirect to onboarding page
  // Skip this check if already on the onboarding page
  if (!isOnboarded) {
    redirect("/onboarding");
  }

  const insights = await getIndustryInsights();

  return (
    <div data-color-mode="light" className="space-y-4 mx-4">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-4xl md:text-6xl font-bold glitch-effect space-y-6">
          <span className="glitch-text" data-text="Industry Insights">
            Industry Insights
          </span>
        </h1>
      </div>
      <div className="space-y-10">
        <DashboardView insights={insights} />
      </div>
    </div>
  );
}
