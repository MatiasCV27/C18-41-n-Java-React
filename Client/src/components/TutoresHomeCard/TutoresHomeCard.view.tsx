import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="black"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-accent ml-1"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-briefcase-business"
    >
      <path d="M12 12h.01" fill="yellow" />
      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="black" />
      <path d="M22 13a18.15 18.15 0 0 1-20 0" stroke="black" />
      <rect width="20" height="14" x="2" y="6" rx="2" stroke="black" />
    </svg>
  );
}

function TutoresHomeCardView() {
  return (
    <Card className="w-[212px] h-[329px] rounded-lg">
      <CardContent className="flex flex-col gap-4">
        <img
          src="https://via.placeholder.com/40"
          alt="Card Image"
          className="w-[182px] h-auto rounded-lg"
        />
        <div className="inline-flex items-center justify-between">
          <CardTitle className="text-base font-medium text-muted leading-6">
            Card Title
          </CardTitle>
          <span className="flex items-center">
            5.0
            <StarIcon />
          </span>
        </div>
        <CardDescription className="flex items-center">
          <BriefcaseIcon />
          <span className="ml-2">Card Description</span>
        </CardDescription>
        <CardDescription className="flex items-center">
          <BriefcaseIcon />
          <span className="ml-2">Card Description</span>
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export default TutoresHomeCardView;
