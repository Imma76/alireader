const validator = async (schema, body) => {
  const result = await schema.validateAsync(body);
  return result;
};
export default validator;
