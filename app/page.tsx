import AddTodo from "@/components/shared/AddTodo";
import { prisma } from "@/utils/prisma";
import { log } from "console";

export default async function Home() {
  const todos = await prisma.todo.findMany();

  return (
    <div>
      <section className="bg-gray-100 p-6 rounded-lg shadow-md mt-5">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Welcome to My Todo App
        </h1>
        <p className="text-gray-600 text-lg text-center">
          Stay organized and manage your tasks efficiently with this simple and
          intuitive Todo app. Add, edit, and track your daily tasks to ensure
          you're always on top of your goals.
        </p>
      </section>
      <section className="bg-gray-100 p-6 rounded-lg shadow-md mt-5">
        <AddTodo />
        <div>
          <ul className="mt-5">
            {todos.map((todo, index) => (
              <li
                key={index}
                className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200"
              >
                <div className="flex gap-10">
                  <p>{index}</p>
                  <span className="text-gray-700">{todo.title}</span>
                </div>
                <button className="text-green-500 hover:text-green-600">
                  ✔️
                </button>
                <button className="text-green-500 hover:text-green-600">
                ❌
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
