export default function NoteDate({ date }){
    const dateCreated = new Date(date);

    const formattedDate = (date) => `${date}`.padStart(2, "0");

    const getTime = (hours, mins) => {
        const formattedHours = formattedDate(hours);
        const formattedMins = formattedDate(mins);
        return `${formattedHours}:${formattedMins}`;
    };

    const weekDay = () => ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dateCreated.getDay()];
    const fullDate = () => `${formattedDate(dateCreated.getDate())}.` + `${formattedDate(dateCreated.getMonth() + 1)}.` + `${dateCreated.getFullYear()}`;

    return (
        <div className="d-flex flex-row align-items-center">
            <div className="p-1">{weekDay()}</div>
            <div className="p-1">{fullDate()}</div>
            <div className="p-1">{getTime(dateCreated.getHours(), dateCreated.getMinutes())}</div>
        </div>
    );
}