
import React, { Suspense } from 'react'
import AsyncTodo from './AsyncTodo'
import Locationlist from './LocationList'
import TodoList from './TodoList'

function NavList() {
  return (
    <div className="mt-5 items-center justify-center border-solid ">
        <Locationlist />
        <Suspense fallback="Loading icon">

          <TodoList />
        </Suspense>

        {/* <AsyncTodo /> */}
    </div>
  )
}

export default NavList
