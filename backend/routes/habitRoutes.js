const express = require('express');
const router = express.Router();
const Habit = require('../models/Habit');

// GET all habits
router.get('/', async (req, res) => {
  try {
    const habits = await Habit.find();
    res.json(habits);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch habits' });
  }
});

// // POST a new habit
// router.post('/', async (req, res) => {
//   try {
//     const { title, frequency } = req.body;
//     const newHabit = new Habit({ title, frequency });
//     await newHabit.save();
//     res.status(201).json(newHabit);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to create habit' });
//   }
// });

module.exports = router;
