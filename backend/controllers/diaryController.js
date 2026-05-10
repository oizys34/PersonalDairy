const Diary = require('../models/Diary');
 
 
// CREATE
const createDiary = async (req, res) => {
    try {
 
        const diaryData = { ...req.body };
        if (req.user) {
            diaryData.user = req.user._id || req.user.id; // Attach the logged-in user's ID
        }
        const diary = await Diary.create(diaryData);
 
        res.status(201).json(diary);
 
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
 
 
// READ ALL
const getDiaries = async (req, res) => {
    try {
 
        const query = {};
        if (req.user) {
            query.user = req.user._id || req.user.id; // Fetch only this user's diaries
        }
        const diaries = await Diary.find(query);
 
        res.json(diaries);
 
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
 
 
// READ SINGLE
const getDiaryById = async (req, res) => {
    try {
 
        const diary = await Diary.findById(req.params.id);
 
        if (!diary) {
            return res.status(404).json({
                message: 'Diary not found'
            });
        }
 
        res.json(diary);
 
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
 
 
// UPDATE
const updateDiary = async (req, res) => {
    try {
 
        const diary = await Diary.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
 
        if (!diary) {
            return res.status(404).json({
                message: 'Diary not found'
            });
        }
 
        res.json(diary);
 
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
 
 
// DELETE
const deleteDiary = async (req, res) => {
    try {
 
        const diary = await Diary.findByIdAndDelete(req.params.id);
 
        if (!diary) {
            return res.status(404).json({
                message: 'Diary not found'
            });
        }
 
        res.json({
            message: 'Diary deleted successfully'
        });
 
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
 
 
module.exports = {
    createDiary,
    getDiaries,
    getDiaryById,
    updateDiary,
    deleteDiary
};