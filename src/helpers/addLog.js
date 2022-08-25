async function addLog({ logs, user_id, balance, description, system_description }) {
  try {
    await logs.create({
      user_id,
      balance,
      description,
      date: new Date(),
      system_description,
    });
  } catch (err) {
    throw new Error('Something went wrong while saving the logs');
  }
}

module.exports = addLog;