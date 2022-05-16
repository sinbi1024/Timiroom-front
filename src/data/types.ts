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
  userAddress: string;
  loginUser: "SINBI" | undefined | null;
}
