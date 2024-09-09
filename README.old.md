### **Todo List App Practice Exercise**

#### **Objective:**
Create a basic todo list application using React, focusing on fundamental React concepts like components, props, and state.

#### **Instructions:**

1. **Project Setup:**
   - Create a new React project using `create-react-app` or another preferred method.
   - Set up a basic file structure with the following components:
     - `App`
     - `TodoList`
     - `TodoItem`

2. **Define Components:**
   - **`App` Component:**
     - This will be the root component of your app.
     - It should manage the state of the todo list (an array of todo objects).
     - It should render the `TodoList` component and provide it with the list of todos and functions to handle adding, completing, and deleting todos.

   - **`TodoList` Component:**
     - This component will receive the list of todos and functions from the `App` component.
     - It should render a list of `TodoItem` components.

   - **`TodoItem` Component:**
     - This component will represent an individual todo item.
     - It should display the todo text and provide options to mark it as completed or delete it.

3. **Implement Functionalities:**
   - **Add Todo:**
     - Implement a way to add a new todo item. This might involve an input field and a button in the `App` component.
     - Ensure that when the button is clicked, the new todo is added to the list and displayed.

   - **Mark as Completed:**
     - Add functionality to mark a todo as completed. This can be achieved using a checkbox or a button.
     - Update the visual representation of completed todos (e.g., through strikethrough text or a different color).

   - **Delete Todo:**
     - Implement a way to delete a todo item. Each `TodoItem` should have a delete button that removes the todo from the list.

4. **Styling:**
   - Apply basic styling to your todo list app to make it user-friendly and visually appealing.
   - Ensure completed todos are visually distinct from incomplete ones.

5. **Testing:**
   - Test the application to ensure all functionalities work as expected:
     - Adding todos
     - Marking todos as completed
     - Deleting todos

#### **Deliverables:**

- A working React application with the functionalities described above.
- A clean and organized codebase with components properly separated.
- Basic styling applied to make the app look presentable.

#### **BONUS:**
- Deploy your Todo-app to netlify and share a link.

<Happy coding />
