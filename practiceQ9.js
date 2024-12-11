// we are given of marks of students. Filter out the marks of students that scored 90+.

let marks = [34,66,98,45,93,67,24];

let newMarks = marks.filter((val) => {
  return val < 90;
});

console.log(newMarks);