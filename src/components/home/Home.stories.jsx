import Home from "./Home";

export default {
  title: "UI/Home",
  component: Home,
};

export const Default = (args) => {
  console.log(args, "args");
  return <div>Hello world </div>;
};
