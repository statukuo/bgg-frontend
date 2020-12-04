import { Booking } from "../models/booking";
import { User } from "../models/user";
import fakeResponses from "./fake_responses";

class ServerFacade {
    private real: boolean;

    public constructor() {
        this.real = true;
    }

    public init(search: string): void {
        this.real = new URLSearchParams(search).get("real") === "true";
    }

    private makeRequest(path: string): any[] {
        console.log("not real");
        return fakeResponses[path];
    }

    public getUSers(): User[] {
        const users = this.makeRequest("api/users");
        console.log(users);

        return users;
    }

    public getBookings(): Booking[] {
        const events = this.makeRequest("api/bookings");
        console.log(events);

        return events;
    }
}

export default ServerFacade;
