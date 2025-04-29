import { useState } from "react";
import Button from "../../ui/Button";
import Error from "../../ui/Error";

function CtaForm({ setEmail }) {
  const [field, setField] = useState("");
  const [error, setError] = useState("");

  function handleOnClick() {
    if (!field.includes("@") || !field.includes(".")) {
      setError("Valid email required");
      return;
    }
    setEmail(field);
  }
  return (
    <form
      className="flex flex-col gap-2 "
      onSubmit={(e) => {
        e.preventDefault();
        handleOnClick();
      }}
    >
      <label
        className="flex justify-between font-bold text-[.7rem]"
        htmlFor={"email"}
      >
        <span>Email address</span>
        {error.length > 0 && <Error>{error}</Error>}
      </label>
      <input
        placeholder="email@company.com"
        className={`border-1 lg:py-4 lg:text-[1rem] text-[.9rem] w-full px-5 py-2 rounded-md focus:outline-1 focus:outline-(--blue) ${
          error.length > 0
            ? " text-(--red) bg-red-100 border-(--red)"
            : "border-(--grey)"
        }`}
        id="email"
        autoComplete="off"
        value={field}
        onChange={(e) => {
          setError("");
          setField(e.target.value);
        }}
      />
      <Button> Subscribe to monthly newsletter</Button>
    </form>
  );
}

export default CtaForm;
