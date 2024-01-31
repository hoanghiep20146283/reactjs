export function isFormInvalid(errors: any): boolean {
	return Object.keys(errors).length > 0;
}

export function findInputError(errors, name): Record<string, any> {
	const filtered = Object.keys(errors)
		.filter((key) => key.includes(name))
		.reduce((cur, key) => Object.assign(cur, { error: errors[key] }), {});
	return filtered;
}

export function convertToHoursAndMinutes(number: number): string {
	if (number < 0) {
		return "Invalid input";
	}

	const hours = Math.floor(number);
	const minutes = Math.round((number - hours) * 60);

	if (hours === 0 && minutes === 0) {
		return "PT0S";
	}

	let result = "";

	if (hours > 0) {
		result += `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
	}

	if (minutes > 0) {
		result += `${result.length > 0 ? ' ' : ''}${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`;
	}

	return result.trim();
}

export function convertDateFormat(inputDate: string): string {
    const parts = inputDate.split('/');
    
    if (parts.length !== 3) {
        return "NaN";
    }

    const [day, month, year] = parts.map(Number);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        return "PT0S";
    }

    const formattedDate = `${day < 10 ? '0' : ''}${day}.${month < 10 ? '0' : ''}${month}.${year}`;

    return formattedDate;
}