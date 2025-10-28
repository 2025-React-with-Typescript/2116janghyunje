import type { FormEvent, ChangeEvent } from "react";
import { useCallback, useState } from "react";
import { Title } from "../components";
export default function BasicForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      alert(JSON.stringify(Object.fromEntries(formData), null, 2));
    },
    [name, email]
  );
  const onChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName((prev) => e.target.value);
  }, []);
  const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail((prev) => e.target.value);
  }, []);
  return (
    <section className="mt-4">
      <Title>BasicForm</Title>
      <div className="flex justify-center mt-4">
        <form onSubmit={onSubmit}>
          <div className="flow-control">
            <label className="label" htmlFor="name">
              <span className="label">name</span>
            </label>
            <input
              className="input input-primary"
              value={name}
              onChange={onChangeName}
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="flow-control">
            <label className="label" htmlFor="email">
              <span className="label">email</span>
            </label>
            <input
              className="input input-primary"
              value={email}
              onChange={onChangeEmail}
              id="email"
              type="text"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex justify-center mt-4">
            <input
              type="submit"
              value="SUBMIT"
              className="w-1/2 btn btn-primary btn-sm"
            />
            <input
              type="button"
              defaultValue="CANCEL"
              className="w-1/2 ml-4 btn btn-sm"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
