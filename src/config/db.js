import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    console.log('Attempting to connect to MongoDB...');
    const conn = await mongoose.connect('mongodb+srv://adityasah57671:aditya%402004@aditya.4fxbbuu.mongodb.net/eventify', {
      // Ensure your IP (e.g., 103.120.31.178/32) is whitelisted in MongoDB Atlas Network Access settings
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });

    // Test the connection by creating a test document
    const TestModel = mongoose.model('Test', new mongoose.Schema({ name: String }));
    const testDoc = new TestModel({ name: 'test' });
    await testDoc.save();
    console.log('Test document saved successfully');
    await TestModel.deleteOne({ name: 'test' });
    console.log('Test document deleted successfully');

    console.log(`MongoDB Connected Successfully!`);
    console.log(`Database Name: ${conn.connection.name}`);
    console.log(`Host: ${conn.connection.host}`);
    
    // Add connection event listeners
    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected');
    });

    mongoose.connection.on('reconnected', () => {
      console.log('MongoDB reconnected');
    });

  } catch (error) {
    console.error('MongoDB Connection Error:', error.message);
    console.error('Full error:', error);
    process.exit(1);
  }
};

export default connectDB; 