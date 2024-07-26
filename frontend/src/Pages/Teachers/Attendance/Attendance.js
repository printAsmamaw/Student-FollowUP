import React, { useState, useEffect } from "react";
import { Container, Table, Form, Button } from "react-bootstrap";
import axios from 'axios';

// Helper function to get the dates for the current week
const getCurrentWeekDates = () => {
  const currentDate = new Date();
  const firstDayOfWeek = currentDate.getDate() - currentDate.getDay() + 1; // Get Monday
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return days.map((day, index) => {
    const date = new Date(currentDate.setDate(firstDayOfWeek + index));
    const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    return {
      dayName: day,
      date: formattedDate,
      dateObject: date
    };
  });
};

const daysOfWeek = getCurrentWeekDates();

const Attendance = () => {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});
  const today = new Date();
  const todayDateString = today.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

  useEffect(() => {
    // Fetch student data
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:3001/Teacher/students');
        const studentsData = response.data;
        setStudents(studentsData);

        // Initialize attendance state
        const initialAttendance = studentsData.reduce((acc, student) => {
          acc[student.studentId] = daysOfWeek.reduce((dayAcc, day) => {
            dayAcc[day.dayName] = null; // Initialize status as null
            return dayAcc;
          }, {});
          return acc;
        }, {});
        setAttendance(initialAttendance);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    // Fetch the last three days of attendance data
    const fetchAttendance = async () => {
      try {
        const response = await axios.get('http://localhost:3001/Teacher/lastAttendance');
        const records = response.data;

        // Update attendance state based on fetched data
        const updatedAttendance = { ...attendance };
        records.forEach(record => {
          const studentId = record.studentId;
          const dayName = new Date(record.date).toLocaleDateString('en-US', { weekday: 'long' });
          updatedAttendance[studentId][dayName] = record.status;
        });
        setAttendance(updatedAttendance);
      } catch (error) {
        console.error('Error fetching attendance data:', error);
      }
    };

    fetchStudents();
    fetchAttendance();
  }, []);

  const handleAttendanceChange = (studentId, day, value) => {
    const dayName = day.dayName; // Extract the day name
    setAttendance(prevAttendance => ({
      ...prevAttendance,
      [studentId]: {
        ...prevAttendance[studentId],
        [dayName]: value
      }
    }));
  };

  const handleSubmit = async () => {
    const savedBy = localStorage.getItem('userId'); // Retrieve savedBy from local storage

    const formattedAttendance = students.map(student => {
      return daysOfWeek.map(day => {
        return {
          studentId: student.studentId,
          date: day.date,
          status: attendance[student.studentId][day.dayName],
          savedBy: savedBy // Add savedBy to the data
        };
      });
    }).flat();

    try {
      const response = await axios.post('http://localhost:3001/Teacher/attendance', { attendance: formattedAttendance }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Attendance data sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending attendance data:', error);
    }
  };

  return (
    <Container>
      <h1 className="my-4">Attendance</h1>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student</th>
            {daysOfWeek.map(day =>
              <th key={day.dayName}>
                {day.dayName} ({day.date})
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {students.map(student =>
            <tr key={student.studentId}>
              <td>{student.studentId}</td>
              <td>{student.firstName}</td>
              {daysOfWeek.map(day =>
                <td key={day.dayName}>
                  <Form.Check
                    type="radio"
                    label="Present"
                    name={`${student.studentId}-${day.dayName}`}
                    id={`${student.studentId}-${day.dayName}-present`}
                    checked={attendance[student.studentId][day.dayName] === true}
                    onChange={() => day.date === todayDateString && handleAttendanceChange(student.studentId, day, true)}
                    className="me-2"
                    disabled={day.date !== todayDateString}
                  />
                  <Form.Check
                    type="radio"
                    label="Absent"
                    name={`${student.studentId}-${day.dayName}`}
                    id={`${student.studentId}-${day.dayName}-absent`}
                    checked={attendance[student.studentId][day.dayName] === false}
                    onChange={() => day.date === todayDateString && handleAttendanceChange(student.studentId, day, false)}
                    disabled={day.date !== todayDateString}
                  />
                </td>
              )}
            </tr>
          )}
        </tbody>
      </Table>
      <Button variant="primary" onClick={handleSubmit}>Submit Attendance</Button>
    </Container>
  );
};

export default Attendance;
