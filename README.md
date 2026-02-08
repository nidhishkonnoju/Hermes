# Hermes

**Hermes** is an AI-powered agentic video production and corporate learning platform. It leverages advanced AI agents to handle scripting, visuals, and editing, allowing users to create high-quality content with minimal effort.

## Features
-   **AI Director**: Orchestrates the entire video creation workflow.
-   **Script Generation**: AI agents generate and refine scripts based on user input.
-   **Character & Asset Generation**: Creates consistent characters and visual assets.
-   **Video Generation**: Generates video clips (powered by Veo 3) and stitches them together.
-   **Corporate Learning**: Intelligent syllabus generation and document analysis.

## Tech Stack

-   **Framework**: Next.js 16, React 19
-   **Styling**: Tailwind CSS 4
-   **State Management**: Zustand
-   **AI Models**: Google Gemini, OpenAI
-   **Media Services**: Google Veo 3
-   **Processing**: FFmpeg, Sharp
-   **Storage**: UploadThing

## Getting Started

### Prerequisites

-   Node.js 18+
-   API Keys for Google GenAI and UploadThing.

### Installation

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/nidhishkonnoju/Hermes.git
    cd hermes
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Set up environment variables**:
    Create a `.env.local` file and add the required API keys:
    ```
    NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_key
    NEXT_PUBLIC_OPENAI_API_KEY=your_openai_key
    UPLOADTHING_SECRET=your_uploadthing_secret
    ```

4.  **Run the development server**:

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. **Create a Project**: Start by creating a new video project.
2. **Define Your Script**: Use the AI Director to generate or customize your script.
3. **Generate Assets**: Let the AI create characters and visual assets.
4. **Generate Video**: Create video clips and let the system stitch them together.
5. **Download**: Export your final video.

## License

License

This project is based on neuroflix-gemini-hack by Antoine K. Lee. The original project is licensed under the PolyForm Noncommercial License 1.0.0.This repository contains modified versions of the original code and remains subject to the same license.Non-commercial use, modification, and redistribution are permitted under the terms of the license.
Commercial use is not permitted without explicit permission from the original author. The full license text is included in this repository.
