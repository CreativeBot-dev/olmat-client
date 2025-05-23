import { ISchool } from "./ISchool";

export interface IParticipant {
  id?: string;
  keplekId?: string;
  payment_id?: number;
  school_id?: number;
  school_name?: string;
  region?: string;
  name: string;
  gender: string;
  birth: string;
  degree?: string;
  status?: string;
  phone?: string;
  email?: string;
  img: any | undefined;
  attachment: any | undefined;
  school: ISchool;
}
