import Typewriter from "typewriter-effect";

const Admin = () => {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          padding: "10px",
          fontSize: "50px",
          marginTop: "70px",
        }}
      >
        Welcome to
        <Typewriter
          options={{
            strings: ["Burgershot", "ADMIN Panel"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </>
  );
};

export default Admin;
