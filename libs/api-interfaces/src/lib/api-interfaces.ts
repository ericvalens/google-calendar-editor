export interface Message {
  message: string;
}

export interface Calendar {
  id: string;
  name: string;
  monitor: boolean;
}

export interface Configuration {
  originalText: string;
  replacementText: string;
  updatePeriodValue: number;
  updatePeriodUnit: string;
  queryPeriodValue: number;
  queryPeriodUnit: string;
}

export interface Log {
  info: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  picture: string;
  accessToken: string;
}
