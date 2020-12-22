export interface Team {
  name: string;
  percentageOfAbsent: number[];
  members: User[];
}
interface User {
  name: string;
  vacations: Vacations[];
}
interface Vacations {
  startDate: string;
  endDate: string;
  type: string;
}
