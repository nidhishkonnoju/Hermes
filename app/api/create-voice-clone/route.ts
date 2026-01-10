import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";
import { NextRequest, NextResponse } from "next/server";
import { isUrl } from "@/lib/image-utils";

const elevenlabs = new ElevenLabsClient({
    apiKey: process.env.ELEVENLABS_API_KEY,
});

// ============================================
// REQUEST TYPE
// ============================================

type CreateVoiceCloneRequest = {
    characterId: string;
    characterName: string;
    voiceSampleUrl: string;
};

/**
 * Extract base64 data from a data URL
 */
function extractBase64(dataUrl: string): string {
    const matches = dataUrl.match(/^data:[^;]+;base64,(.+)$/);
    if (matches && matches[1]) {
        return matches[1];
    }
    return dataUrl;
}

/**
 * Convert audio source (URL or base64) to Buffer
 */
async function toAudioBuffer(audioData: string): Promise<Buffer> {
    if (isUrl(audioData)) {
        const response = await fetch(audioData);
        const arrayBuffer = await response.arrayBuffer();
        return Buffer.from(arrayBuffer);
    }

    const base64 = extractBase64(audioData);
    return Buffer.from(base64, "base64");
}

// ============================================
// MAIN ENDPOINT
// ============================================

export async function POST(request: NextRequest) {
    try {
        const body: CreateVoiceCloneRequest = await request.json();
        const { characterId, characterName, voiceSampleUrl } = body;

        if (!voiceSampleUrl) {
            return NextResponse.json(
                { error: "Voice sample is required" },
                { status: 400 }
            );
        }

        console.log("=== VOICE CLONE CREATION ===");
        console.log("Character:", characterName);

        // Convert URL or base64 to buffer
        const buffer = await toAudioBuffer(voiceSampleUrl);

        // Create a Blob from the buffer
        const blob = new Blob([new Uint8Array(buffer)], { type: "audio/mpeg" });

        // Create voice clone with Eleven Labs
        const voice = await elevenlabs.voices.ivc.create({
            name: `${characterName} - AI Video Clone`,
            files: [blob],
        });

        console.log("Voice clone created:", voice.voiceId);

        return NextResponse.json({
            characterId,
            voiceCloneId: voice.voiceId,
        });
    } catch (error) {
        console.error("Error creating voice clone:", error);
        return NextResponse.json(
            { error: "Failed to create voice clone" },
            { status: 500 }
        );
    }
}
