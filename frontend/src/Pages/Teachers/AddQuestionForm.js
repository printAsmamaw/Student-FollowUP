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
    choiceFlag: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://localhost:3001/AddQuestion', formData);
      setSuccess(response.data.status);
      setFormData({
        question: '',
        choiceA: '',
        choiceB: '',
        choiceC: '',
        choiceD: '',
        correctAnswer: '',
        choiceFlag: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to insert question');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 border rounded-lg shadow-md bg-white">
      <h1 className="text-2xl font-bold mb-4 text-center">Add New Question</h1>
      <form onSubmit={handleSubmit}>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {success && <div className="text-green-500 mb-4">{success}</div>}
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
            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="choiceA">
            Choice A
          </label>
          <input
            type="text"
            id="choiceA"
            name="choiceA"
            value={formData.choiceA}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="choiceB">
            Choice B
          </label>
          <input
            type="text"
            id="choiceB"
            name="choiceB"
            value={formData.choiceB}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="choiceC">
            Choice C
          </label>
          <input
            type="text"
            id="choiceC"
            name="choiceC"
            value={formData.choiceC}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="choiceD">
            Choice D
          </label>
          <input
            type="text"
            id="choiceD"
            name="choiceD"
            value={formData.choiceD}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
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
            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="choiceFlag">
            Choice Flag
          </label>
          <input
            type="text"
            id="choiceFlag"
            name="choiceFlag"
            value={formData.choiceFlag}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Question
        </button>
      </form>
    </div>
  );
}

export default AddQuestionForm;
