export interface userInfo {
  userEmail: string;
  userPassword: string;
}

export interface userTypeInterface {
  userName: string;
  userEmail: string;
  userType: string;
  userPhone: string;
  userAddress: string;
}

export interface joinInfo {
  userName: string;
  userEmail: string;
  userType: string;
  userPhone: string;
  userAddress: string;
  userPassword: string;
}

export interface qnaData {
  keyNum: number;
  title: string;
  contents: string;
  date: string;
  user: string;
}
