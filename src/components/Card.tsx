"use client";
import React, { useState } from "react";
import TodoList from "./TodoList";
import { useDispatch } from "react-redux";
import { addTodo, removeTodo } from "@/redux/features/todoSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import Image from "next/image";

export default function Card() {
  const [name, setName] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const todoItems = useAppSelector(
    (state) => state.reduxPersistReducer.todoSlice.todoItems
  );

  const handleAddTodo = () => {
    const newItem = {
      check: false,
      name: name,
    };
    dispatch(addTodo(newItem));
    setName("");
  };

  return (
    <div className="bg-white/70 w-96 min-h-64 h-auto p-7 text-white flex flex-col rounded-lg relative">
        <Image className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 -top-8 object-contain w-36 h-auto" src={'/img/pig2.png'} alt="pig" width={0} height={0} sizes="100vh"/>
      <div className="flex flex-row space-x-1">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="text-center text-black w-full h-12 rounded-[30px] pr-4"
          type="text"
          name="todoText"
          placeholder="New TODO Items"
          id=""
        />
        <button
          onClick={handleAddTodo}
          className="bg-white font-bold  text-pink-400 px-3 rounded-full hover:border-pink-600 hover:border-[2px]"
        >
          add
        </button>
      </div>
      <div>
        {todoItems &&
          Array.from(todoItems).map((item) => (
            <TodoList
              onRemove={(name: string) => {
                dispatch(removeTodo(name));
              }}
              key={item.name}
              NameTodo={item.name}
              item={item}
            ></TodoList>
          ))}
      </div>
      
    </div>
  );
}
