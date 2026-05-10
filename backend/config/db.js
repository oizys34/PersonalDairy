const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const mongoUrl = process.env.MONGODB_URL || process.env.MONGO_URL;

        if (!mongoUrl) {
            throw new Error('Missing MongoDB URL in environment variables.');
        }

        console.log('Attempting to connect to MongoDB...');

        // Standard Mongoose connection (Works perfectly on Azure Linux)
        await mongoose.connect(mongoUrl, {
            serverSelectionTimeoutMS: 10000 // 10 seconds timeout
        });

        console.log('MongoDB Connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        // Important: Exit with failure so Azure knows the container crashed
        process.exit(1);
    }
};

module.exports = connectDB;