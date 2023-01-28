import './Greeting.css';

const Greeting = ({firstName}) => {

  const timeGreeting = {
    MORNING: "Good Morning",
    AFTERNOON: "Good Afternoon",
    EVENING: "Good Evening",
  }

  let greeting
  const time = new Date().getHours()
  if (time < 12) {
    greeting = timeGreeting.MORNING
  }else if (time < 17) {
    greeting = timeGreeting.AFTERNOON
  } else {
    greeting = timeGreeting.EVENING
  }

  return (
    <div>
        <h2>{greeting}, {firstName}</h2>
    </div>
  );
}

export default Greeting;
