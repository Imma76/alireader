const handleError = (err, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    return res.status(500).send({ message: false, body: err.message });
  }
  return res.status(500).send({ message: false, body: `something is wrong ${err.message}` });
};
export default handleError;
