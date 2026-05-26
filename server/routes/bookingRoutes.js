// const Stripe = require("stripe");
// const stripe = Stripe(
//     "sk_test_51Q1WBGDc5J7nS49CPbObkenbONHRmg9uAB5iiJsXtSuepXUPw50CvCV500q7NpLYJcuP6H6m0NEBrmOwaFBmMt3k00lIZasvkD"
// );

const bookingModel = require("../models/bookingModel");
const showModel = require("../models/showModel");


const authMiddleware = require("../middlewares/authMiddleware");

const router = require("express").Router();
const {
    makePayment,
    bookNewShow,
    getAllBookingsByUser,

} = require("../controllers/bookingController");


router.post("/make-payment", makePayment);
router.post("/book-show", bookNewShow);
router.get("/all-booking-by-user", authMiddleware, getAllBookingsByUser);

module.exports = router;