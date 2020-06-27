export const required = value => {
    if (value) return undefined;
    return "Field is required";
}

export const maxLengthCreator = (maxLengthNumber) => (value) => {
    if (value.length > maxLengthNumber) return `Max length is ${maxLengthNumber} symbols`;
    return undefined;
}