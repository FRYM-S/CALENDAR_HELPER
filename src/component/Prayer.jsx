export default function Prayer({ name, time }) {
    // Add prayer to Google Calendar
    const addToCalendar = () => {
        const today = new Date();

        // Set start time for the prayer
        const startTime = new Date(today);
        const [hours, minutes] = time.split(":");
        startTime.setHours(hours);
        startTime.setMinutes(minutes);

        // Calculate end time assuming each prayer lasts for 45 minutes
        const endTime = new Date(startTime);
        endTime.setMinutes(endTime.getMinutes() + 45);

        // Format event name
        let eventName = name === "Sunrise" ? `${name}` : `${name} prayer`;

        // Construct event details for Google Calendar URL
        const eventDetails = {
            text: eventName,
            dates: `${startTime
                .toISOString()
                .replace(/-|:|\.\d+/g, "")}/${endTime
                .toISOString()
                .replace(/-|:|\.\d+/g, "")}`,
        };

        // Construct Google Calendar URL
        const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
            eventDetails.text
        )}&dates=${eventDetails.dates}`;

        // Open Google Calendar URL in a new tab
        window.open(calendarUrl, "_blank");
    };

    return (
        <div
            onClick={addToCalendar}
            className="flex flex-col items-center justify-center gap-3 w-28 h-32 p-5 transition-all duration-500 hover:border-teal-600 hover:shadow-lg hover:shadow-teal-200 border-2 hover:border-4 border-gray-200 rounded-lg text-gray-300 bg-gray-800 hover:bg-gray-700"
        >
            <div className="text-lg font-semibold">{name}</div>
            <div className="text-3xl">{time}</div>
        </div>
    );
}
