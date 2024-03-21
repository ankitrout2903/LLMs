import React, { useState, ChangeEvent, FormEvent } from 'react';
import toast from 'react-hot-toast';
import './App.css';

export default function App(): JSX.Element {
  const [result, setResult] = useState<string | undefined>();
  const [question, setQuestion] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [validQuestion, setValidQuestion] = useState<boolean>(false);
  const [validFile, setValidFile] = useState<boolean>(false);

  const handleQuestionChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const questionValue: string = event.target.value;
    setQuestion(questionValue);
    setValidQuestion(questionValue.trim() !== '');
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const selectedFile: File | null = event.target.files
      ? event.target.files[0]
      : null;
    if (selectedFile && selectedFile.name.endsWith('.csv')) {
      setFile(selectedFile);
      setValidFile(true);
      toast.success('File added successfully!');
    } else {
      setFile(null);
      setValidFile(false);
      toast.error('Please upload a .csv file.');
    }
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    if (!validQuestion) {
      toast.error('Please enter a question.');
      return;
    }

    if (!validFile) {
      toast.error('Please upload a .csv file.');
      return;
    }

    const formData = new FormData();
    if (file) {
      formData.append('file', file);
    }
    formData.append('question', question.trim());

    try {
      const response = await fetch('http://127.0.0.1:8000/analyze', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setResult(data.result);
      toast.success('Prediction successful!');
    } catch (error) {
      console.error('Error', error);
      toast.error('Error occurred. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Question Answer Generator</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="question">Question:</label>
            <input
              className="form-control"
              id="question"
              type="text"
              value={question}
              onChange={handleQuestionChange}
              placeholder="Ask your question here"
            />
          </div>

          <div className="form-group">
            <label htmlFor="file">Upload CSV file:</label>
            <input
              type="file"
              id="file"
              name="file"
              accept=".pdf, .csv, .docx"
              onChange={handleFileChange}
              className="form-control"
            />
          </div>

          <button
            className="btn btn-primary"
            type="submit"
            disabled={!validFile || !validQuestion}
            style={{
              cursor: validQuestion && validFile ? 'pointer' : 'not-allowed',
            }}
          >
            Submit
          </button>
        </form>

        {result && (
          <div className="result">
            <h2>Result:</h2>
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}

