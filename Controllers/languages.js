// controllers/languages.js
const Language = require("../models/Language");

const getLanguages = async (req, res) => {
  try {
    const languages = await Language.find();

    if (!languages.length) {
      return res
        .status(404)
        .json({ success: false, msg: "No languages found" });
    }

    res.status(200).json({ success: true, data: languages });
  } catch (error) {
    console.error("Error fetching languages:", error);
    res
      .status(500)
      .json({ success: false, msg: "Server Error", error: error.message });
  }
};

const createLanguage = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({
      success: false,
      msg: "Language name is required",
    });
  }

  try {
    const language = new Language({ name });
    await language.save();
    res.status(201).json({ success: true, data: language });
  } catch (error) {
    res.status(500).json({ success: false, msg: "Server Error" });
  }
};

const updateLanguage = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const language = await Language.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    if (!language) {
      return res
        .status(404)
        .json({ success: false, msg: `Language not found with id: ${id}` });
    }
    res.status(200).json({ success: true, data: language });
  } catch (error) {
    res.status(500).json({ success: false, msg: "Server Error" });
  }
};

const deleteLanguage = async (req, res) => {
  const { id } = req.params;

  try {
    const language = await Language.findByIdAndDelete(id);
    if (!language) {
      return res
        .status(404)
        .json({ success: false, msg: `Language not found with id: ${id}` });
    }
    res.status(200).json({ success: true, msg: "Language deleted" });
  } catch (error) {
    res.status(500).json({ success: false, msg: "Server Error" });
  }
};

module.exports = {
  getLanguages,
  createLanguage,
  updateLanguage,
  deleteLanguage,
};
