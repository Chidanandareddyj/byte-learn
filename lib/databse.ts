import { supabase } from "@/lib/supabaseClient";

export async function getpromptbyID(promptID: string) {
  try {
    const { data, error } = await supabase
      .from("prompts")
      .select("*")
      .eq("id", promptID)
      .single();
    if (error) throw error;
    return data;
  } catch (error) {
    console.log(error);
  }
}

// Store generated script in database
interface ScriptData {
  prompt_id: string;
  script_text: string;
}

export async function saveScript(
  promptId: string,
  scriptText: string | object
): Promise<ScriptData | undefined> {
  try {
    const { data, error } = (await supabase
      .from("scripts")
      .insert({
        prompt_id: promptId,
        script_text:
          typeof scriptText === "object"
            ? JSON.stringify(scriptText)
            : scriptText,
      })
      .select()
      .single()) as any;

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error saving script:", error);
    throw error;
  }
}

// Get script by prompt ID
interface Script {
  id: number;
  prompt_id: string;
  script_text: string;
  created_at: string;
}

export async function getScriptByPromptId(
  promptId: string
): Promise<Script | null> {
  try {
    const { data, error } = await supabase
      .from("scripts")
      .select("*")
      .eq("prompt_id", promptId)
      .single();

    if (error) throw error;
    return data as Script;
  } catch (error) {
    console.error("Error fetching script:", error);
    throw error;
  }
}
