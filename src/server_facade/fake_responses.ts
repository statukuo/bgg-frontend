const api: { [key: string]: any } = {
    "api/users": [
        {
            name: "David",
            surname: "Barbero",
            email: "test@test.com",
            randomAnimal: "duck"
        },
        {
            name: "Marta",
            surname: "Tejada",
            email: "test2@test.com",
            randomAnimal: "horse"
        }
    ],
    "api/bookings": [
        {
            date: new Date(),
            duration: 2,
            title: "New event",
            description: "This is an event",
            maxAttendees: 5,
            attendeesList: [],
            owner: {
                name: "David",
                surname: "Barbero",
                email: "test@test.com",
                randomAnimal: "duck"
            }
        }
    ]
};

export default api;
