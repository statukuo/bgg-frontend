import { Component, h, VNode } from "preact";
import * as style from "./style.css";
import moment from "moment";
import { Booking } from "../../models/booking";

interface Props {
    bookings: Booking[];
    today: Date;
}

class Calendar extends Component<Props> {
    private get calendar(): VNode[] {
        const currentDate = moment(this.props.today)
            .date(1)
            .day("Monday");

        return new Array(6).fill("").map((row, rowIndex) => {
            return (
                <tr key={rowIndex}>
                    {new Array(7).fill("").map((column, columnIndex) => {
                        const currentMonth =
                            moment().month() === currentDate.month()
                                ? style.current
                                : style.other;

                        const currentDay = (
                            <td key={columnIndex} class={currentMonth}>
                                <p class={this.todayClass(currentDate)}>
                                    {currentDate.date()}
                                </p>
                                {this.renderDay(
                                    currentDate.date(),
                                    currentDate.month(),
                                    currentDate.year()
                                )}
                            </td>
                        );

                        currentDate.add(1, "day");

                        return currentDay;
                    })}
                </tr>
            );
        });
    }

    private todayClass(currentDate: moment.Moment): string {
        const today = this.isToday(
            currentDate.date(),
            currentDate.month(),
            currentDate.year()
        )
            ? "today"
            : "";

        return "day " + today;
    }

    private isToday(day: number, month: number, year: number): boolean {
        return (
            this.props.today.getDate() === day &&
            this.props.today.getMonth() === month &&
            this.props.today.getFullYear() === year
        );
    }

    private renderDay(day: number, month: number, year: number): VNode[] {
        const todayBookings = this.props.bookings.filter(booking => {
            return (
                booking.date.getDate() === day &&
                booking.date.getMonth() === month &&
                booking.date.getFullYear() === year
            );
        });

        return todayBookings.map((booking, index) => {
            return <p key={index}>{booking.title}</p>;
        });
    }

    public render() {
        return <table class={style.calendar}>{this.calendar}</table>;
    }
}

export default Calendar;
