import { toast } from "sonner";
import { GeoBlockError } from "@drift-labs/common";

/**
 * Handles error display with special handling for GeoBlockError
 * @param error - The error to handle
 * @param fallbackMessage - Message to show for non-GeoBlockError cases
 */
export function handleErrorToast(error: unknown, fallbackMessage: string) {
  console.error("Operation failed:", error);

  if (error instanceof GeoBlockError) {
    toast.error("Geographic Restriction", {
      description:
        "This feature is not available in your region due to regulatory restrictions.",
      duration: 5000,
    });
  } else {
    toast.error(fallbackMessage);
  }
}
