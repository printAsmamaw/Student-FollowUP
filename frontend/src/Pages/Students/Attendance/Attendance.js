// src/Attendance.js

import React, { useState } from "react";
import { Container, Table, Form } from "react-bootstrap";

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const students = [
  "Ababa Bekela ",
];

const Attendance = () => {
  const [attendance, setAttendance] = useState(
    students.reduce((acc, student) => {
      acc[student] = {
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false
      };
      return acc;
    }, {})
  );

  const handleAttendanceChange = (student, day, value) => {
    setAttendance(prevAttendance => ({
      ...prevAttendance,
      [student]: {
        ...prevAttendance[student],
        [day]: value
      }
    }));
  };

  return (
    <Container>
      <h1 className="my-4">Attendance</h1>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Student</th>
            {daysOfWeek.map(day =>
              <th key={day}>
                {day}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {students.map(student =>
            <tr key={student}>
              <td>
                {student}
              </td>
              {daysOfWeek.map(day =>
                <td key={day}>
                  <Form.Check
                    type="radio"
                    label=""
                    name={`${student}-${day}`}
                    id={`${student}-${day}-present`}
                    checked={attendance[student][day] === true}
                    onChange={() => handleAttendanceChange(student, day, true)}
                    className="me-2"
                  />

                </td>
              )}
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default Attendance;

