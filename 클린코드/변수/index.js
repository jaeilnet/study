function getDateTime() {
  const currentDateTime = getDateTime(new Date());

  return {
    month: currentDateTime.month + "분 전",
    day: currentDateTime.day + "분 전",
    hour: currentDateTime.hour + "분 전",
  };
}
