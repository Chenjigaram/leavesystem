
import { Role } from './roleBean';
import { Team } from './teamBean';
export class User {
  
  empId: number;
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
  accountStatus: string;
  role: Role;
  teams: Team[];
  
  
}
