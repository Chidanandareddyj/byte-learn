import {main} from '@app/lib/gemini';
import {getpromptbyID,saveScript} from '@/lib/database';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
    try {
        const { promptId } = req.body;
        if (!promptId) {
            return res.status(400).json({ error: 'Missing promptId' });
        }

        const prompt= await getpromptbyID(promptId);
        if (!prompt) {
            return res.status(404).json({ error: 'Prompt not found' });
        }

        const script=await main(prompt.prompt_text);
        if (!script) {
            return res.status(500).json({ error: 'Failed to generate script' });
        }
        console.log("Generated script:", script);
        
        const savedscript = await saveScript(promptId, script)


    } catch (error) {
        console.error("Error generating script:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
