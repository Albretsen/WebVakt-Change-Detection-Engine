const catchAsync = require('../utils/catchAsync');

const healthPing = catchAsync(async (req, res) => {
  res.status(200).send({ "message": "Status OK" });
});

module.exports = {
    healthPing,
};
