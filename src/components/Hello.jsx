const Hello = ({ name }) => {
  return (
    <div>
      <h1 className="text-3xl fond-bold underline">
        Hello {name ?? "Visitor"}
      </h1>
    </div>
  );
};

export default Hello;
