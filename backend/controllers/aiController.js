const axios = require("axios");

exports.getRecommendation = async (req, res) => {

  try {

    const employee = req.body;

    const prompt = `
    Employee Name: ${employee.name}
    Department: ${employee.department}
    Performance Score: ${employee.performanceScore}
    Skills: ${employee.skills}
    Experience: ${employee.experience}

    Give:
    1. Promotion Recommendation
    2. Training Suggestions
    3. Employee Feedback
    `;

    const response = await axios.post(

      "https://openrouter.ai/api/v1/chat/completions",

      {
        model: "mistralai/mistral-7b-instruct:free",

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
          `Bearer ${process.env.OPENROUTER_API_KEY}`,

          "Content-Type": "application/json",

          "HTTP-Referer":
          "https://emp-manage-1-rtxx.onrender.com",

          "X-Title":
          "Emp Manage"
        }
      }
    );

    res.json({
      recommendation:
      response.data.choices[0].message.content
    });

  } catch (error) {

    console.log(
      error.response?.data || error.message
    );

    res.status(500).json({
      message:
      error.response?.data || error.message
    });
  }
};