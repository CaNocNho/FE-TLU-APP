export interface MarkItem {
  subject: {
    subjectCode: string;
    subjectName: string;
    numberOfCredit: number;
  };
  mark: number;
  charMark?: string;
  details: {
    subjectExam: {
      code: string;
    };
    mark: number;
  }[];
  processMark?: number;
  examMark?: number;
}
