const Button = (props) => {
    return (
        <button className={props.className}>
            {props.title} 
            {props.image && <img src={props.image} alt={props.image}/>}
        </button>
    )
}

export default Button
