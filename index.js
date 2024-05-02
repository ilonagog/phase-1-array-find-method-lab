// code your solution here
function superbowlWin(record) {
  let numbers = record.find((r) => r.result === "W");
  if (numbers) {
    return numbers.year;
  } else {
    return undefined;
  }
}
