import './CreateTodoButton.css'

function CreateTodoButton({setOpenModal}) {
    return(
      <footer onClick={
        () => {
          setOpenModal(state => !state);
        }
      }>
       <div > 
         <span></span >
         <p>Add</p>
       </div > 

      </footer>
    
    );
  
  
  }

  export {CreateTodoButton};