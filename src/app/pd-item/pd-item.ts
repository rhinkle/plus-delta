export enum FeedbackTypes {
  Plus = 'Plus',
  Delta = 'Delta'
}

export class PdItem {
  public id: number;
  public message: string;
  public feedbackType: FeedbackTypes;
}
