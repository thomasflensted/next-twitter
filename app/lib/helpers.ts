export const constructGoogleMapsUrl = (place: string) => {
    const formattedString = place.replaceAll(" ", "+").replaceAll(",", "%2C");
    return `https://www.google.com/maps/search/?api=1&query=${formattedString}`;
}

export const escapeSingleQuotes = (str: string) => {
    return str.replaceAll("'", "''");
}