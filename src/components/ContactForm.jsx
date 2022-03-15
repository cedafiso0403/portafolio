import '../styles/contactform.css';


function ContactForm() {
    return (
        <div>
            <form>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name"></input>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email"></input><br></br>
                <label htmlFor="message" className='messagelabel'>Message: </label>
                <textarea id="message" name="message" rows="12" cols="72"></textarea><br></br>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;