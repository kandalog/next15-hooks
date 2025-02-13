"use client";

import { useActionState } from "react";
import { Message, postUser } from "./data";

export const UserForm = () => {
  const [state, submitAction, isPending] = useActionState(
    async (_: Message | null, formData: FormData) => {
      const name = formData.get("name") as string;
      const result = await postUser(name);
      return result;
    },
    null
  );
  return (
    <>
      <form action={submitAction} className="flex gap-4">
        <input
          name="name"
          defaultValue={state?.name}
          className="p-2 bg-slate-200"
        />
        <button type="submit" className="p-2 bg-slate-300">
          Submit
        </button>

        {isPending ? <p>Submitting ...</p> : null}
        {state?.message ? <p>{state?.message}</p> : null}
        <p>{JSON.stringify(state)}</p>
      </form>
    </>
  );
};
