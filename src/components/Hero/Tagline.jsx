import { useEffect, useState } from "react";

const roles = [
  "Systems Thinker",
  "Backend Architect",
  "Android Developer",
  "Java Developer",
  "Problem Solver",
  "Continuous Learner"
];

export default function Tagline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="changing-role">
      {roles[index]}
    </div>
  );
}