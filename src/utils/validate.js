const validate = async (dataToValidate, schema) => {
	return schema.validateAsync(dataToValidate);
};

export default validate;
