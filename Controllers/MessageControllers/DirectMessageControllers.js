const mongoose = require('mongoose');

const Message = require("../../Models/DirectMessageModel/DirectMessageModel");


// start of the adding the message to the database

module.exports.addMessage = async (req, res) => {
    const { from, to, message } = req.body;
    console.log(from, to, message);

    try {
        const response = await Message.create({
            from: from,
            to: to,
            message: message
        });
        console.log(response)
        if (response) {
            res.json({
                response: response,
                message: "your message is sent successfully",
                status: true
            })
        }
    } catch (err) {
        console.log(err);
    }
}

// end of the adding the message to the database




// start of the getting  the message from the database

module.exports.getAllMessage = async (req, res) => {
    const { from, to } = req.body;
    // console.log(from, to);

    try {
        const response = await Message.find({
            $or: [
                { from: from, to: to },
                { from: to, to: from }, // Consider messages from 'to' to 'from' as well
            ],
        });
        // console.log(response)
        if (response) {
            res.json({
                response: response,
                status: true
            })
        }
    } catch (err) {
        console.log(err);
    }
}

// end of the getting  the message from the database



// edit messages start
module.exports.editMessage = async (req, res) => {
    const { msgId, newMessage } = req.body;
    // console.log(msgId, newMessage);

    try {
        const response = await Message.findByIdAndUpdate(msgId, {
            message: newMessage,
        },
            {
                new: true
            },
        );
        // console.log(response)
        if (response) {
            res.json({
                response: response
            });
        }

    } catch (err) {
        console.log(err);
    }
}
// edit messages ends



// delete messages starts
module.exports.deleteMessage = async (req, res) => {
    const { msgId } = req.body;
    console.log(msgId)

    try {
        const response = await Message.findByIdAndDelete({ _id: msgId })
        console.log(response);
        if (response) {
            res.json({
                response: response,
                status: true,
            });
        }
    } catch (err) {
        console.log(err);
    }
}
// delete messages ends