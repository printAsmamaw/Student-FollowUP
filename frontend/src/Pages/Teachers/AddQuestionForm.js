import React, { useState } from 'react';
import axios from 'axios';

function AddQuestionForm() {
  const [formData, setFormData] = useState({
    question: '',
    choiceA: '',
    choiceB: '',
    choiceC: '',
    choiceD: '',
    correctAnswer: '',
    choiceFlag: '',
    classType: '',
    timeTaken: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isBasicInfoEntered, setIsBasicInfoEntered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleBasicInfoSubmit = (e) => {
    e.preventDefault();
    if (formData.classType && formData.timeTaken) {
      setIsBasicInfoEntered(true);
    } else {
      setError('Task Type and Time Taken are required');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://localhost:3001/teacher/AddQuestion', formData);
      setSuccess(response.data.status);
      setFormData({
        question: '',
        choiceA: '',
        choiceB: '',
        choiceC: '',
        choiceD: '',
        correctAnswer: '',
      });
      setIsBasicInfoEntered(false); // Reset to initial state after successful submission
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to insert question');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 border rounded-lg shadow-md mt-8 bg-white">
      <h1 className="text-2xl font-bold mb-4 text-center">Add New Question</h1>

      {!isBasicInfoEntered ? (
        <form onSubmit={handleBasicInfoSubmit} className="flex flex-col">
          <div className="flex mb-4">
            <div className="w-full pr-2">
              <label className="block text-sm font-medium text-gray-700" htmlFor="classType">
                Test Type
              </label>
              <input
                type="text"
                id="classType"
                name="classType"
                value={formData.classType}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm h-12 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="w-1/4 pl-2">
              <label className="block text-sm font-medium text-gray-700" htmlFor="timeTaken">
                Time Taken (in minutes)
              </label>
              <input
                type="number"
                id="timeTaken"
                name="timeTaken"
                value={formData.timeTaken}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm h-12 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className=" bg-indigo-800 w-1/5 content-end text-white px-4 py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Continue
          </button>
          {error && <p className="mt-4 text-red-600">{error}</p>}
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="question">
              Question
            </label>
            <input
              type="text"
              id="question"
              name="question"
              value={formData.question}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm h-12 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="flex mb-4">
            <div className="w-full pr-2">
              <label className="block text-sm font-medium text-gray-700" htmlFor="choiceA">
                Choice A
              </label>
              <input
                type="text"
                id="choiceA"
                name="choiceA"
                value={formData.choiceA}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm h-12 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="w-full pl-2">
              <label className="block text-sm font-medium text-gray-700" htmlFor="choiceB">
                Choice B
              </label>
              <input
                type="text"
                id="choiceB"
                name="choiceB"
                value={formData.choiceB}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm h-12 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>
          <div className="flex mb-4">
            <div className="w-full pr-2">
              <label className="block text-sm font-medium text-gray-700" htmlFor="choiceC">
                Choice C
              </label>
              <input
                type="text"
                id="choiceC"
                name="choiceC"
                value={formData.choiceC}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm h-12 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="w-full pl-2">
              <label className="block text-sm font-medium text-gray-700" htmlFor="choiceD">
                Choice D
              </label>
              <input
                type="text"
                id="choiceD"
                name="choiceD"
                value={formData.choiceD}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm h-12 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="correctAnswer">
              Correct Answer
            </label>
            <input
              type="text"
              id="correctAnswer"
              name="correctAnswer"
              value={formData.correctAnswer}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm h-12 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Question
          </button>
          {error && <p className="mt-4 text-red-600">{error}</p>}
          {success && <p className="mt-4 text-green-600">{success}</p>}
        </form>
      )}
    </div>
  );
}

export default AddQuestionForm;
