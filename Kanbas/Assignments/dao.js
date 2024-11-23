import Database from "../Database/index.js";

export function findAllAssignments() {
    return Database.assignments;
}

export function findAssignmentsForCourse(cid) {
    const {assignments} = Database;
    const assignmentsForCourse = assignments.filter((assignment) => assignment.course === cid);
    return assignmentsForCourse;
}

export function createAssignment(assignment) {
    const newAssignment = {...assignment, _id: Date.now().toString()};
    Database.assignments = [...Database.assignments, newAssignment];
    return newAssignment;
}

export function deleteAssignment(assignmentId) {
    const {assignments, enrollments} = Database;
    Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
    Database.enrollments = enrollments.filter(
        (enrollment) => enrollment.assignment !== assignmentId
    );
}

export function updateAssignment(assignmentId, assignmentUpdates) {
    const { assignments } = Database;
    const assignment = assignments.find((assignment) => assignment._id === assignmentId);
    Object.assign(assignment, assignmentUpdates);
    return assignment;
}