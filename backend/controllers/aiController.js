const axios = require("axios");

exports.getRecommendation = async (req, res) => {

  try {

    const employee = req.body;

    const prompt = `
    Employee Name: ${employee.name}
    Performance Score: ${employee.performanceScore}
    Skills: ${employee.skills}

    Give:
    1. Promotion Recommendation
    2. Training Suggestions
    3. Feedback
    `;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",

        messages: [
          {
            role: "user",
            content: prompt
          }
        ]
      },

      {
        headers: {
          Authorization:
          `Bearer ${process.env.OPENROUTER_API_KEY}`
        }
      }
    );

    res.json(response.data);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};