class HttpError {
  error = true;
  responseTimestamp = new Date();

  constructor(error) {
    if (typeof error === 'string') {
      this.statusCode = 500;
      this.message = error;
      this.name = 'InternalServerError';
    } else {
      if (error.name === 'ValidationError') {
        error.statusCode = 422;
      }

      let errorName = 'InternalServerError';

      switch (error.statusCode) {
        case 400:
          errorName = 'BadRequestError';
          break;
        case 422:
          errorName = 'ValidationError';
          break;
        case 404:
          errorName = 'NotFoundError';
          break;
        default:
          errorName = 'InternalServerError';
      }
      this.statusCode = error.statusCode || 500;
      this.message = error.message || 'Something wrong!';
      this.errors = error.errors;
      this.name = errorName;
    }
  }
}

module.exports = { HttpError };
