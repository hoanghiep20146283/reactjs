export function isFormInvalid(errors: any): boolean {
	return Object.keys(errors).length > 0;
}

export function findInputError(errors, name): Record<string, any> {
	const filtered = Object.keys(errors)
		.filter((key) => key.includes(name))
		.reduce((cur, key) => Object.assign(cur, { error: errors[key] }), {});
	return filtered;
}
