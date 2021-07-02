import express from "express";

//Import Item Model
import orders from "../models/orderSchema";

const router = express.Router();

//Get All Of The Data From The DataBase
router.route('/orders').get((req, res, next) => {
  orders.find().exec().then(items => {
      if (items.length < 1) {
        return res.status(404).json({
          message: `items not found...`
        });
      } else {
        return res.status(200).json(items);
      }
    })
    .catch(err => {
      return res.status(500).json(err);
    });
});


 



export default router;