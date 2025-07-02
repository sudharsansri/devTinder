const mongoose = require('mongoose');

const connectDB= async () => {
    try {
        await mongoose.connect('mongodb+srv://sudharsanravi10:oRTtxNfU56Y29dfT@cluster0.uwltnu3.mongodb.net/', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit the process with failure
    }
}

module.exports = connectDB;
