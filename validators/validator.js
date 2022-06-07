const validator = (schema, source = 'body') => async (req, res, next) => {
  try {
    const result = await schema.validateAsync(req.body);
    if (source === 'body') {
      req._body = req.body;
      req.body = result;
    } else {
      req._query = req.query;
      req.query = result;
    }
    next();
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error.message
    });
  }
  // const result = await schema.validateAsync(req.body);
  // return result;
};
export default validator;
