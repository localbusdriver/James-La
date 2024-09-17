import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

const MailResponse = ({
  status,
  className,
}: {
  status: number;
  className?: string;
}) => {
  return (
    <Alert className={cn("fixed right-[50px] bottom-10 z-10 max-w-max flex flex-row gap-4 transition-transform", className)}>
      <h1 className="text-3xl">{status === 200 ? "👍" : "🙀"}</h1>
      <div className="space-y-2">
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          {status === 200
            ? "Email sent successfully."
            : "An error occured. Please try again."}
        </AlertDescription>
      </div>
    </Alert>
  );
};

export default MailResponse;
