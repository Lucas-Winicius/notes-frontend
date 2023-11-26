enum Greeting {
  MORNING = "Good morning",
  AFTERNOON = "Good afternoon",
  EVENING = "Good evening",
}

function timeGreetings(): string {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return Greeting.MORNING;
  } else if (hour >= 12 && hour < 18) {
    return Greeting.AFTERNOON;
  } else {
    return Greeting.EVENING;
  }
}

export default timeGreetings;
