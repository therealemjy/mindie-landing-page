export interface AppError {
  name: string;
  statusCode: number;
  message: string;
  error?: any;
}
