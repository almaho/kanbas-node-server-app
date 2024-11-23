import Database from "../Database/index.js";
import enrollments from "../Database/enrollments.js";

export function findEnrollmentsForUser(user) {
    return Database.enrollments.filter( (enrollment) => enrollment.user === user._id);
}

export function enrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    enrollments.push({ _id: Date.now(), user: userId, course: courseId });
}

export function unenrollUserFromCourse(userId, cid) {
    Database.enrollments = Database.enrollments.filter(
        (enrollment) => (enrollment.user !== userId || enrollment.course !== cid)
    );
}
