import { createSlice ,nanoid} from "@reduxjs/toolkit";

const initialState = {
   todos: [{
        id:1,text:"hello"
    }]
}


// name property of reducers is very important to identify them 

// reducers contains proerties and function as key value pair 

// function has access to two things 1. state and 2. action

// state provides info about current state of the store( it means how many entries are made)

// action contains values required to perform an action for ex it may have id in cae we want to remove todo


export const todoSlice = createSlice(
    {
        name:'todo',
        initialState,
        reducers:{
            addTodo: (state,action)=>{

                const todo= {
                    id: nanoid(),
                    text:action.payload,

                }
                state.todos.push(todo)

            },
             removeTodo: (state,action)=>{

                state.todos=state.todos.filter((todo)=>todo.id!==action.payload.id)

            }


        }
    }
)

// export functions in reducer 

export const  {addTodo,removeTodo} = todoSlice.actions

// since it updation of store is only done through the reducer defined not by anyone else we need to export reducers 

export default todoSlice.reducer