const Dynamic = () => {
  const myName = "Shahab Uddin Ghori";
  const age = 24;
  const profession = "developer";

  const add = (a, b) => {
    let mul = a * b;
    return mul;
  };
  return (
    <p>
      Hi am {myName} im {age} old. My Profession is {profession} <br />
      this mul is call by function {add(3, 4)}
    </p>
  );
};
export default Dynamic;
