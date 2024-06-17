import { TodoItem } from "@/components/TodoItem";
import { prisma } from "@/db";
import Image from "next/image";
import Link from "next/link";

//function list = (todo [])
async function toggleTodo(id:string, complete:boolean){
  "use server"
  console.log(id,complete);
  await prisma.todo.update({
    where:
    {id},
    data: {complete}
  })
}
export default async function Home() {
  const todos = await prisma.todo.findMany();
  //await prisma.todo.create({ data: {
  //   title:"test",
  //   complete:false
  // }})
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
        <Link className="border border-slate-400 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        href ="/new">
          New
        </Link>
      </header>
      <ul className="p1-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo}></TodoItem>
        ))}
      </ul>
      

  
  
  
  </>
  )
}
  