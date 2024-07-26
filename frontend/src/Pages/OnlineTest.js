import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import Lottie from 'lottie-react';
import loadingAnimation from '../Pages/Lottia/loading.json';
import { FaFlag, FaList } from 'react-icons/fa';

function Question({ question, index, onAnswerChange, answers, onFlagToggle, isFlagged }) {
  return (
    <div className="relative p-4 border rounded-lg bg-white shadow-lg">
      <button
        onClick={() => onFlagToggle(index)}
        className={`absolute top-2 right-2 p-2 border rounded ${isFlagged ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'}`}
      >
        <FaFlag size={16} />
      </button>
      <h2 className="text-xl font-bold mb-4">
        {index + 1}: {question.question}
      </h2>
      <ul className="list-none">
        {[question.choiceA, question.choiceB, question.choiceC, question.choiceD].map((choice, choiceIndex) => (
          <li key={`${question.id}-${choiceIndex}`} className="mb-2">
            <label className="flex items-center">
              <input
                type="radio"
                name={question.id}
                checked={answers[question.id] === choice}
                onChange={() => onAnswerChange(question.id, choice)}
                className="mr-2"
              />
              {choice}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

function OnlineTest() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [flags, setFlags] = useState({});
  const [time, setTime] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:3001/teacher/questions');
        setQuestions(response.data);
        setIsLoading(false); 
      } catch (error) {
        console.error('Error fetching questions:', error);
        setError('Failed to load questions');
        setIsLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers(prevAnswers => ({ ...prevAnswers, [questionId]: answer }));
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = async () => {
    const userId = localStorage.getItem('userId');
    try {
      await axios.post('http://localhost:3001/exam/submit', { userId, answers });
      alert('Exam submitted successfully');
    } catch (error) {
      console.error('Error submitting exam:', error);
      alert('Failed to submit exam');
    }
  };

  const toggleFlag = (questionIndex) => {
    setFlags(prevFlags => ({ ...prevFlags, [questionIndex]: !prevFlags[questionIndex] }));
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const toggleProgressVisibility = () => {
    setShowProgress(!showProgress);
  };

  const currentQuestion = useMemo(() => questions[currentQuestionIndex], [currentQuestionIndex, questions]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Lottie animationData={loadingAnimation} style={{ width: 150, height: 150 }} />
      </div>
    );
  }

  if (error) {
    return <div className="text-center">{error}</div>;
  }

  const numColumns = 8;

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="fixed top-0 left-0 right-0 bg-white z-10 p-4 border-b">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">
            Time Taken: {formatTime(time)}
          </div>
          <button onClick={toggleProgressVisibility} className="lg:hidden flex items-center p-2">
            <FaList size={24} />
          </button>
        </div>
      </div>
      <div className={`lg:w-1/5 p-4 border-r h-screen overflow-y-auto mt-16 ${showProgress ? 'block' : 'hidden'} lg:block`}>
        <h2 className="text-xl font-bold mb-4 text-center">Question Progress</h2>
        <table className="table-auto w-full text-left">
          <tbody>
            {Array.from({ length: Math.ceil(questions.length / numColumns) }, (_, rowIndex) => (
              <tr key={rowIndex} className="cursor-pointer">
                {Array.from({ length: numColumns }, (_, colIndex) => {
                  const questionIndex = rowIndex * numColumns + colIndex;
                  return questionIndex < questions.length ? (
                    <td
                      key={colIndex}
                      className={`w-10 px-2 py-1 text-xs border text-center ${answers[questions[questionIndex].id] ? 'bg-green-200' : 'bg-white'}`}
                      onClick={() => setCurrentQuestionIndex(questionIndex)}
                    >
                      <div className="flex items-center justify-center">
                        {questionIndex + 1}
                        {flags[questionIndex] && <FaFlag className="ml-1 text-red-500" />}
                      </div>
                    </td>
                  ) : (
                    <td
                      key={colIndex}
                      className="w-10 px-2 py-1 text-xs border"
                    ></td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-center justify-center lg:w-4/5 w-full h-screen p-4 mt-16">
        <div className="w-full p-4 border rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4 text-center">Chemistry Test</h1>
          {currentQuestion && (
            <Question
              question={currentQuestion}
              index={currentQuestionIndex}
              onAnswerChange={handleAnswerChange}
              answers={answers}
              onFlagToggle={toggleFlag}
              isFlagged={flags[currentQuestionIndex]}
            />
          )}
          <div className="flex justify-between mt-4">
            <button 
              onClick={handlePrevious} 
              disabled={currentQuestionIndex === 0}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
            >
              Previous
            </button>
            {currentQuestionIndex === questions.length - 1 ? (
              <button 
                onClick={handleSubmit}
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
              >
                Submit
              </button>
            ) : (
              <button 
                onClick={handleNext} 
                disabled={currentQuestionIndex === questions.length - 1}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineTest;