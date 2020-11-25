export interface Message {
  message: string;
}

export interface Calendar {
  id: string;
  name: string;
  description: string;
  nextEvent: Date;
}
