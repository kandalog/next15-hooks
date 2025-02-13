export interface Message {
  id: string;
  name: string;
  message: string;
}

export interface User {
  id: string;
  name: string;
}

export const postUser = async (name: string): Promise<Message> => {
  const res = await fetch("http://localhost:4000/api/users", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  return res.json();
};

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch("http://localhost:4000/api/users");
  return await res.json();
};
