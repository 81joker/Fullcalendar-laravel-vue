import toMoment from "@fullcalendar/moment";

export default function (start) {
    let date = toMoment(start);

    return date.format("YYYY-MM-DD HH:mm:ss ");
}
