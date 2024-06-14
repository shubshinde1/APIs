import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const Employee = () => {
  const [apiData, setApiData] = useState([]);
  const [expanded, setExpanded] = useState(null);
  const url = "https://nodeapi.shub.space/api/v1";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setApiData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleAccordion = (section) => {
    setExpanded(expanded === section ? null : section);
  };

  return (
    <div className="overflow-y-scroll sbar w-full">
      <div>
        <NavLink to="/demo">
          <div className="bg-neutral-700 py-1.5 px-2.5 w-fit h-fit rounded-md flex items-center gap-2">
            <IoMdArrowRoundBack />
            Back
          </div>
        </NavLink>
      </div>
      <div className="mt-2 grid grid-cols-12 gap-2">
        {apiData.map((employee) => (
          <div key={employee.empid} className="p-4 border rounded col-span-3 ">
            <h2 className="text-lg font-bold">{employee.ename}</h2>
            <p>Employee ID: {employee.empid}</p>
            <p>Designation: {employee.designation}</p>
            <p>Joining Date: {employee.jdate}</p>
            <p>Status: {employee.status}</p>

            <h3
              className="text-md font-bold mt-2 cursor-pointer"
              onClick={() => toggleAccordion("attendance")}
            >
              Attendance {expanded === "attendance" ? "-" : "+"}
            </h3>
            {expanded === "attendance" && (
              <div>
                {Object.values(employee.attendance).map((leave, index) => (
                  <div key={index} className="ml-4 mb-2">
                    <p>From: {leave.from}</p>
                    <p>To: {leave.to}</p>
                    <p>Reason: {leave.reason}</p>
                    <p>Number of Leaves: {leave.noofleaves}</p>
                    <p>Leave Type: {leave.leavetype}</p>
                    <p>Status: {leave.status === 0 ? "Pending" : "Approved"}</p>
                    <p>Approved By: {leave.approvedby}</p>
                  </div>
                ))}
              </div>
            )}

            <h3
              className="text-md font-bold mt-2 cursor-pointer"
              onClick={() => toggleAccordion("leavedata")}
            >
              Leave Data {expanded === "leavedata" ? "-" : "+"}
            </h3>
            {expanded === "leavedata" && (
              <div>
                {Object.entries(employee.leavedata).map(([type, data]) => (
                  <div key={type} className="ml-4 mb-2">
                    <p>{type.charAt(0).toUpperCase() + type.slice(1)}:</p>
                    <p>Total: {data.total}</p>
                    <p>Remaining: {data.remaining}</p>
                    <p>Elapsed: {data.elapsed}</p>
                  </div>
                ))}
              </div>
            )}

            <h3
              className="text-md font-bold mt-2 cursor-pointer"
              onClick={() => toggleAccordion("timesheet")}
            >
              Timesheet {expanded === "timesheet" ? "-" : "+"}
            </h3>
            {expanded === "timesheet" && (
              <div>
                {Object.entries(employee.timesheet).map(([date, tasks]) => (
                  <div key={date} className="ml-4 mb-2">
                    <h4 className="font-bold">{date}:</h4>
                    {Array.isArray(tasks) ? (
                      tasks.map((task, index) => (
                        <div key={index} className="ml-4 mb-2">
                          <p>Task: {task.task}</p>
                          <p>Task Name: {task.taskname}</p>
                          <p>Project Name: {task.projectname}</p>
                          <p>Subtask: {task.subtask}</p>
                          <p>Description: {task.description}</p>
                          <p>Duration: {task.duration}</p>
                          <p>Assigned Date: {task.assigneddate}</p>
                          <p>Remark: {task.remark}</p>
                        </div>
                      ))
                    ) : (
                      <p>No tasks available for this date.</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employee;
