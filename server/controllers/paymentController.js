import Payments from "../models/paymentModel.js";
import Users from "../models/userModel.js";

const paymentController = {
  getPayments: async (req, res) => {
    try {
      const payments = await Payments.find();
      res.json(payments);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createPayment: async (req, res) => {
    try {
      console.log(req.user);
      const user = await Users.findById(req.user.id).select("name email");
      if (!user) return res.status(400).json({ msg: "User does not exist." });

      const { cart, total, address } = req.body;

      const { _id, email } = user;

      const newPayment = new Payments({
        id: _id,

        email,
        address,
        total,
        cart,
      });

      await newPayment.save();
      res.json({ msg: "Payment Succes!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

export default paymentController;
