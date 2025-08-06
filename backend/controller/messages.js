const Message = require('../models/message')



exports.createMessages = async (req, res)=>{
     const { name, email, message } = req.body;

  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send message.' });
  }
} 


exports.getAllMessages = async (req, res)=>{

  try {
    const newMessage =await  Message.find();
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
} 
