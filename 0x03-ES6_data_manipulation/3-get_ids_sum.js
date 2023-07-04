import getListStudents from './0-get_list_students';

export default function getStudentIdSum(student = getListStudent()) {
  return student.reduce((current, next) => current + next.id, 0);
}
