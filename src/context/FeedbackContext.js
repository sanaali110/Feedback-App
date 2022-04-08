import {createContext,useState} from 'react'
import { v4 as uuidv4} from 'uuid'


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{


    const [feedback,setFeedback] =useState([
       {
           id:1,
           text:'Feedback Item 1',
           rating:10
       },
       {
        id:2,
        text:'Feedback Item 2',
        rating:7
    },
    {
        id:3,
        text:'Feedback Item 3',
        rating:5
    }

    ])
    const [feedbackEdit,setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    //add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])

            console.log(newFeedback)
           
    }
    //delete Feedback
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id ))
        }
        
    }
    const updateFeedback = (id, updItem) => {
        console.log(id,updItem);
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updItem } :item))
    }



    //set item to be updated
    const editFeedback = (item) =>{
        setFeedbackEdit({
            item,
            edit: true
        })
    }
return(
    
    <FeedbackContext.Provider 
    value={{
    feedback,
    feedbackEdit,
    deleteFeedback,
    addFeedback,
    editFeedback,
    updateFeedback,
        }}
        >
    {children}
    </FeedbackContext.Provider>
)
}
export default FeedbackContext

