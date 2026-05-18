import { useState } from "react";
import api from "../api";

function AIRecommendation() {

  const [response, setResponse] =
  useState("");

  const getRecommendation = async () => {

    try {

      const res = await api.post(
        "/ai/recommend",
        {
          name: "Aman Verma",
          performanceScore: 90,
          skills: [
            "React",
            "Node.js",
            "MongoDB"
          ]
        }
      );

      setResponse(
        JSON.stringify(res.data, null, 2)
      );

    } catch (error) {

      console.log(error);

      alert("AI Error");
    }
  };

  return (
    <div className="card">

      <h2>AI Recommendation</h2>

      <button onClick={getRecommendation}>
        Generate AI Recommendation
      </button>

      <pre>
        {response}
      </pre>

    </div>
  );
}

export default AIRecommendation;