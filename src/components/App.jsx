import React from "react"
import starFilled from '../images/star-filled.png'
import starEmpty from '../images/star-empty.png'
import userPic from '../images/user.png'
/**
 * Challenge: update the function component to a class component.
 * 
 * Bonus: you can use class fields and arrow function methods
 * to avoid needing to add a constructor method 😄
 * 
 * Tip: Move the `let starIcon = ...` line into the `render` method
 * before the `return`, since that is display logic
 */
// export default function App() {
export default class App extends React.Component {
    // const [contact, setContact] = React.useState({
    //     firstName: "John",
    //     lastName: "Doe",
    //     phone: "+1 (719) 555-1212",
    //     email: "itsmyrealname@example.com",
    //     isFavorite: false
    // })
    state = {
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    }

    // let starIcon = contact.isFavorite ? starFilled : starEmpty
        
    // function toggleFavorite() {
    //     setContact(prevContact => ({
    //         ...prevContact,
    //         isFavorite: !prevContact.isFavorite
    //     }))
    // }
    toggleFavorite = () => {
        this.setState(prevState => {
            return {
                isFavorite: !prevState.isFavorite
            }
        }
        )
    }
    
    // return (
    //     <main>
    //         <article className="card">
    //             <img src="./images/user.png" className="card--image" />
    //             <div className="card--info">
    //                 <img 
    //                     src={`../images/${starIcon}`} 
    //                     className="card--favorite"
    //                     onClick={toggleFavorite}
    //                 />
    //                 <h2 className="card--name">
    //                     {contact.firstName} {contact.lastName}
    //                 </h2>
    //                 <p className="card--contact">{contact.phone}</p>
    //                 <p className="card--contact">{contact.email}</p>
    //             </div>
                
    //         </article>
    //     </main>
    // )
    render() {
        let starIcon = this.state.isFavorite ? starFilled : starEmpty
        return (
            <main>
                <article className="card">
                    <img src={userPic} className="card--image" />
                    <div className="card--info">
                        <img 
                            src={starIcon}
                            className="card--favorite"
                            onClick={this.toggleFavorite}
                        />
                        <h2 className="card--name">
                            {this.state.firstName} {this.state.lastName}
                        </h2>
                        <p className="card--contact">{this.state.phone}</p>
                        <p className="card--contact">{this.state.email}</p>
                    </div>
                    
                </article>
            </main>
        )
    }

}
