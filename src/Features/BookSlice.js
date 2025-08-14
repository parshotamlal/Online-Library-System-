import { createSlice, nanoid } from "@reduxjs/toolkit";
import booksData from "../assets/Booksdata.js";
import { categorydata } from "../assets/categorydata.js"

const initialState = {
    list: booksData,
    category: categorydata,
    newBook: [],
    searchquery: ""
}

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        addBook(state, action) {
            const item = action.payload
            const { title, category } = action.payload;
            const isbookexisted = state.list.some((book) => {
                return (
                    book.title.toLowerCase() === title.toLowerCase() &&
                    book.category.toLowerCase() === category.toLowerCase()
                )
            })
            if (isbookexisted) {
                alert("Book with same title and category already exists.")
                return
            }

            state.list.push(item)
            state.newBook.push(item)
            alert("Book Added successfully")

            if (!state.category.includes(category)) {
                state.category.push(category)
            }


        },
        clearNewBook(state, action) {
            state.newBook = []
        },
        addSearch(state, action) {
            state.searchquery = action.payload
        },
        clearSearch(state) {
            state.searchquery = ""
        }
    }


})

export const { addBook, clearNewBook, addSearch, clearSearch } = bookSlice.actions
export default bookSlice.reducer