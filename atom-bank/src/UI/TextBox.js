const TextBox = (props) => {
    return (
        <div className="input-section">
            <input placeholder={props.label} type="email" title={props.title} id={props.id} />
        </div>
    )
}

export default TextBox