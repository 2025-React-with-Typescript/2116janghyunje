import type { FormEvent, ChangeEvent } from "react";
import { useCallback, useState } from "react";
import { Title } from "../components";
type FormType = {
  name: string;
  email: string;
};
export default function ObjectState() {
  const [form, setForm] = useState<FormType>({ name: "", email: "" });
  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      alert(JSON.stringify(form, null, 2));
    },
    [form]
  );
  const onChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm((state) => ({ ...state, name: e.target.value }));
  }, []);
  const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm((state) => ({ ...state, email: e.target.value }));
  }, []);
  return (
    <section className="mt-4">
      <Title>ObjectState</Title>
      <div className="flex justify-center mt-4">
        <form onSubmit={onSubmit}>
          <div className="flow-control">
            <label className="label" htmlFor="name">
              <span className="label">name</span>
            </label>
            <input
              className="input input-primary"
              value={form.name}
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
              value={form.email}
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
