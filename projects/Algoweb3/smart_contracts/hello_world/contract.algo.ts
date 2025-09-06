import { Contract, GlobalState } from "@algorandfoundation/algorand-typescript";

export class ComplaintBox extends Contract {
  // A global state to store the latest complaint
  latestComplaint = GlobalState<string>({
    key: "complaint",
    initialValue: "No complaints yet"
  });

  // Function to submit a complaint
  SubmitComplaint(title: string, description: string): string {
    // Store the complaint in global state
    this.latestComplaint.value = title + ": " + description;

    // Return the title as a confirmation
    return title;
  }
}
