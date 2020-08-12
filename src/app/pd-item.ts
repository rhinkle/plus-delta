export enum FeedbackTypes {
  Plus,
  Delta
}

export class PdItem {
  public id: number;
  public message: string;
  public feedbackType: FeedbackTypes;
}
