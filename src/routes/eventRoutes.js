import express from 'express';
import {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent
} from '../controllers/eventController.js';
import { authenticateToken } from '../middleware/auth.js';
import { validateEvent } from '../middleware/validation.js';

const router = express.Router();

// Public routes
router.get('/', getEvents);
router.get('/:id', getEvent);

// Protected routes
router.post('/', authenticateToken, validateEvent, createEvent);
router.put('/:id', authenticateToken, validateEvent, updateEvent);
router.delete('/:id', authenticateToken, deleteEvent);

export default router; 