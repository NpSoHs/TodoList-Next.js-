import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import todoSlice  from "./features/todoSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
    key:"rootPersistjaa",
    storage,
    
}

const rootReducer = combineReducers({todoSlice})
const reduxPersistReducer = persistReducer(persistConfig,rootReducer);

export const store = configureStore({
    reducer:{
        reduxPersistReducer
    }
    
    
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector