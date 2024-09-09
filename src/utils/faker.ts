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

export interface AuthContextType {
  token: string | null;
  setToken: (token: string) => void;
  login: (username: string, password: string, rememberMe: boolean) => Promise<void>;
  logout: () => void;
}