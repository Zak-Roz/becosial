const { HttpResponse, throwError } = require('../helpers');

async function getLogs({ logs, page, limit, sortBy, user_id }) {
  try {
    const item =  await logs.findOne({ user_id });
    if (!item) {
      throwError(404, 'User not found');
    }
    limit = limit || 10;
    let skip = page ? Number((page - 1) * limit) : 0;

    if (sortBy && sortBy?.date) {
      sortBy.date = sortBy.date === 'DESC' ? -1 : 1;
    }
    if (sortBy && sortBy?.balance) {
      sortBy.balance = sortBy.balance === 'DESC' ? -1 : 1;
    }
    if (!sortBy || Object.keys(sortBy).length === 0) {
      sortBy.date = -1;
    }

    const items = await logs
        .find(user_id ? { user_id } : {})
        .sort(sortBy)
        .skip(skip)
        .limit(limit),
      total = await logs.countDocuments(user_id ? { user_id } : {});

    return new HttpResponse(items, { totalCount: total });
  } catch (errors) {
    throw errors;
  }
}

module.exports = getLogs;