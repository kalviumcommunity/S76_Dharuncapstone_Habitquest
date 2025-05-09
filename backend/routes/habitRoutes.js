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

// POST a new habit
router.post('/', async (req, res) => {
  try {
    const { title, frequency } = req.body;
    const newHabit = new Habit({ title, frequency });
    await newHabit.save();
    res.status(201).json(newHabit);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create habit' });
  }
});

// PUT update a habit

router.put('/:id', async (req, res) => {
  try {
    const habitId = req.params.id;
    const { title, frequency } = req.body;

    const updatedHabit = await Habit.findByIdAndUpdate(
      habitId,
      { title, frequency },
      { new: true } // return the updated habit
    );

    if (!updatedHabit) {
      return res.status(404).json({ error: 'Habit not found' });
    }

    res.json(updatedHabit);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update habit' });
  }
});


module.exports = router;
