

function Card(props) {
    const {title, backgroundColor, children} = props;

    return (
        <div
            style={{
                margin : 8,
                padding : 8,
                bordervRadius : 8,
                boxShadow: "0px 0px 4px grey",
                backgroundColor : backgroundColor || "white",
            }}
        >
            {/* title이 children임 */}
            {title && <h1>{title}</h1>}
            {children}
        </div>
    )
}

export default Card;