const express = require('express');
const router = express.Router();
const hotelstaff = require('./../models/hotelStaffs.js');

router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const hotelstaffs = new hotelstaff(data);

    const response = await hotelstaffs.save();
    console.log('Data saved');
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const data = await hotelstaff.find(); // corrected model name
    console.log('Data is fetched for menu items');
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Work type
router.get('/:worktype', async (req, res) => {
  try {
    const worktype = req.params.worktype; // corrected parameter name
    if (worktype === 'cleaning' || worktype === 'serving' || worktype === 'guard' || worktype === 'receptionist') { // corrected typo
      const response = await hotelstaff.find({ work: worktype }); // corrected model name and field name
      console.log('Response is fetched');
      res.status(200).json(response);
    } else {
      console.log({ Error: 'Invalid work type. Please enter a valid key' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// exports
module.exports = router;
