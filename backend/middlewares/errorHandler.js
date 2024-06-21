const errorHandler = async (error, req, res, next) => {
  console.log({ error });

  const status = error.status || 500;
  const message = error.message || "Ocurrió un error en el servidor";
  const details = error.details || null;
  const code = error.code || undefined;

  res.status(status).json({ message, details, code });
};

module.exports = errorHandler;
