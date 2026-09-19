const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  // Signs a new token with the user's ID
  // Make sure to add JWT_SECRET to your .env file!
  return jwt.sign({ id }, process.env.JWT_SECRET || 'fallback_secret_key', {
    expiresIn: '30d',
  });
};

module.exports = generateToken;
