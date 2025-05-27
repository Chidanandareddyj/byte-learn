import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function main(prompt: string) {
  const scriptPrompt = `
    Create a detailed video script for Remotion based on this user prompt: "${prompt}"
    
    The script should include:
    1. Scene descriptions with timing
    2. Text content for each scene
    3. Visual elements and transitions
    4. Duration for each segment
    5. Any animations or effects needed
    
    Format the response as a JSON object with this structure:
    {
      "title": "Video Title",
      "totalDuration": 30,
      "scenes": [
        {
          "id": 1,
          "startTime": 0,
          "endTime": 5,
          "text": "Scene text content",
          "description": "Visual description",
          "animation": "fade-in",
          "background": "color or image description"
        }
      ]
    }
    
    Keep the video duration between 15-60 seconds and make it engaging for social media.
    `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: scriptPrompt,
    });
    if (!response.candidates || response.candidates.length === 0) {
      throw new Error(`Error generating script: No response received`);
    }
    console.log(response.candidates?.[0]?.content?.parts?.[0]?.text);
    const text = response.candidates?.[0]?.content?.parts?.[0]?.text;

    try {
      if (!text) throw new Error("No text received");
      return JSON.parse(text);
    } catch {
      return { script: text, format: "text" };
    }
  } catch (error) {
    console.error("Error generating script:", error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    throw new Error(`Failed to generate script: ${errorMessage}`);
  }
}
//       />}
