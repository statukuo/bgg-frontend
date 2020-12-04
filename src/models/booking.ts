import { User } from "./user";

export interface Booking {
    date: Date;
    duration: number;
    title: string;
    description: string;
    maxAttendees: number;
    attendeesList: User[];
    owner: User;
}
