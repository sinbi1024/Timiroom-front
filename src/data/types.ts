export interface userInfo {
  userEmail: string;
  userPassword: string;
}

export interface joinInfo {
  userName: string;
  userEmail: string;
  userType: string;
  userPhone: string;
  userPassword: string;
  loginUser: "SINBI" | undefined | null;
}

export interface qnaData {
  keyNum: number;
  title: string;
  date: string;
  user: string;
}
