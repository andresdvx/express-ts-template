export interface RandomUser {
  name: string;
  email: string;
}

export const getRandomUser = async (): Promise<RandomUser> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) throw new Error("error has ocurred");
  const data = await response.json();
  const randomIndex: number = Math.floor(Math.random() * 11);
  const { name, email }: RandomUser = await data[randomIndex];
  return { name, email };
};
