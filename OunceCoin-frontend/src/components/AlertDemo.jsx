import { Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const AlertDemo = () => {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Hey!</AlertTitle>
      <AlertDescription>
        You need to connect your wallet first!
      </AlertDescription>
    </Alert>
  );
};
export default AlertDemo;
