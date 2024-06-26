# Question-Answer-Generation-App-using-Mistral-7B
Question Answer Generation App using Mistral 7B, Langchain, and FastAPI.

https://www.loom.com/share/f9a5a625d79b4f7381a54126e0b740e2?sid=98f1a0dc-f92e-4d8b-9d09-5ece38302ce7
## Project Name

### Description
This project is a Question-Answer Pair Generator with Zephyr-7B, which is a tool for generating questions and answers based on study materials. It utilizes the LangChain library for natural language processing tasks.

### Note to be considered
This application is developed in fast prototyping and so the frontend is first written in HTML CSS and JS then migrated to React and TSX also the backend prompt is tested on openai and then migrated to the LLM and using of LLM on free cloud platform is not easy because it gives a lot of resource limitation and doest't perform aslo there is use of streamlit for now which makes it hard to deploy it in any cloud platform .

### Installation Instructions

#### Frontend
1. Navigate to the `frontend` directory in your terminal.
2. Run `npm install` to install the necessary dependencies.
3. Run `npm start` to start the development server.
4. Go to `http://localhost:8000/` to see you app running.

#### Backend
1. Navigate to the `backend` directory in your terminal.
2. Ensure you have Python installed on your system.
3. Run `pip install -r requirements.txt` to install the required Python dependencies.
4. Download the AI model from [here](https://huggingface.co/TheBloke/Mistral-7B-Instruct-v0.1-GGUF/blob/main/mistral-7b-instruct-v0.1.Q4_K_S.gguf) and place it in the `backend` directory.
5. Run `python app.py` to start the backend server.

6. In case you want to test only the prompt through Open AI API run `python test_openai_app.py` start backend server of openai version of the app.
7. backend server run at `http://localhost:8000`.


### Usage
1. After starting both the frontend and backend servers, visit `http://localhost:3000` in your web browser.
2. Upload a PDF file containing study material using the provided file upload input.
3. Click on the "Upload" button to analyze the uploaded file.
4. Once the analysis is complete, you can view and download the generated question-answer pairs.


 ### Tech Stack
- Python
- FastAPI
- Mistral-7B AI Model
- React
- TypeScript
- Langchain
- FAISS(similar search)
- streamlit
- ChromaDB(vector db)
- Docker

### Credits
This project utilizes the LangChain library for natural language processing tasks.

