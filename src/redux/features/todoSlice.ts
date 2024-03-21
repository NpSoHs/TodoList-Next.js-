import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoItem } from "../../../interface";
import { produce } from "immer";

type TodoState = {
    todoItems: TodoItem[];
};

const initialState: TodoState = { todoItems: [] };

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TodoItem>) => {
            return produce(state, draftState => {
                if(action.payload.name.trim()!==''){
                    draftState.todoItems.push(action.payload);
                    draftState.todoItems.sort((a, b) => {
                        if (a.check === b.check) {
                            return a.name.localeCompare(b.name);
                        }
                        return a.check ? 1 : -1;
                    });
                }
            });
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            return produce(state, draftState => {
                draftState.todoItems = draftState.todoItems.filter(item => item.name !== action.payload);
            });
        },
        changCheckbox:(state, action: PayloadAction<TodoItem>) =>{
            return produce(state, draftState => {
                draftState.todoItems = draftState.todoItems.filter(item => item.name !== action.payload.name);
                draftState.todoItems.push(action.payload);
                draftState.todoItems.sort((a, b) => {
                    if (a.check === b.check) {
                        return a.name.localeCompare(b.name);
                    }
                    return a.check ? 1 : -1;
                });
            });
        }
    }
});


export const { addTodo, removeTodo, changCheckbox } = todoSlice.actions;
export default todoSlice.reducer;
