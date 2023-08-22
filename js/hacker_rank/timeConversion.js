function timeConversion(s) {
    let [hours, minutes, seconds] = s.split(":");
    hours = Number(hours);
     
    if (seconds.includes("PM")) {
        hours = hours < 12 ? hours + 12 : hours;
    } else {
        hours = hours === 12 ? 0 : hours;
    }

    return `${String(hours).padStart(2, "0")}:${minutes}:${seconds.replace(/\D+/g, "")}`;
}

