const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncError");
const jwt = require("jsonwebtoken");
const User = require("../model/user");
// const Shop = require("../model/shop");

exports.isAuthenticated = catchAsyncErrors(async (req, res, next) => {
	const { token } = req.cookies;

	if (!token) {
		return next(new ErrorHandler("Please login to continue", 401));
	}

	const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

	req.user = await User.findById(decoded.id);

	next();
});
