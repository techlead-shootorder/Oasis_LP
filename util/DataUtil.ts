export function convertTo12HourFormat(time24: string) {
    if (time24) {
        // Split the input time into hours and minutes
        const [hour24, minutes] = time24.split(':');

        // Convert the hour from a string to a number
        let hour12 = parseInt(hour24, 10);

        // Determine the period (AM or PM)
        const period = hour12 >= 12 ? 'PM' : 'AM';

        // Adjust the hour for 12-hour format
        hour12 = hour12 % 12 || 12; // Converts 0 to 12 for midnight and handles noon

        // Format the hour to be a two-digit string
        const formattedHour = hour12.toString().padStart(2, '0');

        // Return the formatted time in 12-hour format without seconds
        return `${formattedHour}:${minutes} ${period}`;
    } else {
        return ``;
    }
}

export function formatDateToYYYYMMDD(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

export function getFormattedDate(dateStr: Date) {
    const date = new Date(dateStr);

    const formattedDate = date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });

    return formattedDate;
}

export function getShortDayName(day: string): string {
    // Map of full weekday names to abbreviations
    const dayAbbreviations: { [key: string]: string } = {
        "Sunday": "Sun",
        "Monday": "Mon",
        "Tuesday": "Tue",
        "Wednesday": "Wed",
        "Thursday": "Thu",
        "Friday": "Fri",
        "Saturday": "Sat"
    };

    // Convert input day to title case
    const titleCaseDay = day.trim().charAt(0).toUpperCase() + day.trim().slice(1).toLowerCase();

    // Return the abbreviation based on the input day
    return dayAbbreviations[titleCaseDay] || "Invalid day";
}
