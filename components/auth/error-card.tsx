import { TriangleAlertIcon } from "lucide-react";
import { CardWrapper } from "@/components/auth/card-wrapper";

export function ErrorCard() {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex justify-center items-center">
        <TriangleAlertIcon className="text-destructive" />
      </div>
    </CardWrapper>
  );
}
