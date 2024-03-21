import React from "react";
import { TodoItem } from "../../interface";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { changCheckbox } from "@/redux/features/todoSlice";

export default function TodoList({
  NameTodo,
  onRemove,
  item,
}: {
  NameTodo: string;
  onRemove: Function;
  item: TodoItem;
}) {
  const dispatch = useDispatch<AppDispatch>();

  const handleCheckboxChange = () => {
    const updatedItem: TodoItem = {
      ...item,
      check: !item.check,
    };
    dispatch(changCheckbox(updatedItem)); // dispatch action changCheckbox โดยส่ง updatedItem เข้าไป
  };
  return (
    <div className="flex flex-row bg-white text-black font-semibold w-full space-x-4 my-4 p-2 rounded-lg opacity-80 justify-between items-center">
      <input className="w-6 h-6 m-3 accent-pink-500" type="checkbox" name="tick" id="" checked={item.check} onChange={handleCheckboxChange} />
      <label htmlFor="tick">{NameTodo}</label>
      <button
        onClick={() => onRemove(NameTodo)}
        name="tick"
        className="float-right w-7 h-7 m-2.5 rounded-2xl bg-red-700 text-gray-200 shadow-md hover:bg-red-500 hover:scale-105"
      >
        X
      </button>
    </div>
  );
}
