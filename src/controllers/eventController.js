import Event from '../models/Event.js';

// Get all events
export const getEvents = async (req, res) => {
  try {
    console.log('Fetching all events...');
    const events = await Event.find().sort({ date: 1 });
    console.log(`Found ${events.length} events`);
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ 
      message: 'Error fetching events',
      error: error.message 
    });
  }
};

// Get single event
export const getEvent = async (req, res) => {
  try {
    console.log(`Fetching event with ID: ${req.params.id}`);
    const event = await Event.findById(req.params.id);
    if (!event) {
      console.log('Event not found');
      return res.status(404).json({ message: 'Event not found' });
    }
    console.log('Event found:', event);
    res.json(event);
  } catch (error) {
    console.error('Error fetching event:', error);
    res.status(500).json({ 
      message: 'Error fetching event',
      error: error.message 
    });
  }
};

// Create event
export const createEvent = async (req, res) => {
  try {
    console.log('Creating new event with data:', req.body);
    
    // Validate required fields
    const requiredFields = ['title', 'description', 'date', 'location', 'coordinates', 'organizer', 'category'];
    const missingFields = requiredFields.filter(field => !req.body[field]);
    
    if (missingFields.length > 0) {
      return res.status(400).json({
        message: 'Missing required fields',
        fields: missingFields
      });
    }

    // Create new event
    const event = new Event(req.body);
    
    // Validate the event
    const validationError = event.validateSync();
    if (validationError) {
      console.error('Validation error:', validationError);
      return res.status(400).json({
        message: 'Validation error',
        errors: validationError.errors
      });
    }

    // Save the event
    const savedEvent = await event.save();
    console.log('Event created successfully:', savedEvent);
    
    res.status(201).json({
      message: 'Event created successfully',
      event: savedEvent
    });
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(400).json({ 
      message: 'Error creating event',
      error: error.message 
    });
  }
};

// Update event
export const updateEvent = async (req, res) => {
  try {
    console.log(`Updating event with ID: ${req.params.id}`);
    console.log('Update data:', req.body);

    const event = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { 
        new: true, 
        runValidators: true,
        context: 'query'
      }
    );

    if (!event) {
      console.log('Event not found for update');
      return res.status(404).json({ message: 'Event not found' });
    }

    console.log('Event updated successfully:', event);
    res.json({
      message: 'Event updated successfully',
      event: event
    });
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(400).json({ 
      message: 'Error updating event',
      error: error.message 
    });
  }
};

// Delete event
export const deleteEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    if (!eventId) {
      return res.status(400).json({ message: 'Event ID is required' });
    }

    console.log(`Attempting to delete event with ID: ${eventId}`);
    
    // First check if the event exists
    const existingEvent = await Event.findById(eventId);
    if (!existingEvent) {
      console.log('Event not found for deletion');
      return res.status(404).json({ message: 'Event not found' });
    }

    // Delete the event
    const deletedEvent = await Event.findByIdAndDelete(eventId);
    if (!deletedEvent) {
      console.log('Failed to delete event');
      return res.status(500).json({ message: 'Failed to delete event' });
    }
    
    console.log('Event deleted successfully');
    res.json({ 
      message: 'Event deleted successfully',
      deletedEvent
    });
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ 
      message: 'Error deleting event',
      error: error.message 
    });
  }
}; 