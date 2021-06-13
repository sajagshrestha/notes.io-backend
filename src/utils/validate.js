export const validate = async (dataToValidate, schema) => {
	return schema.validateAsync(dataToValidate);
};
