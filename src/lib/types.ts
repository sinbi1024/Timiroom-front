export interface userInfo {
  userEmail: string;
  userPasswd: string;
}

export interface joinInfo {
  userName: string;
  userEmail: string;
  userType: string;
  userPhone: string;
  userAddress: string;
  userPasswd: string;
}

export interface userTypeInterface {
  userName: string;
  userEmail: string;
  userType: string;
  userPhone: string;
  userAddress: string;
}

export interface qnaData {
  keyNum: number;
  title: string;
  contents: string;
  date: string;
  email: string;
}
