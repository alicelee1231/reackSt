function MyButton(props){
    const[isClicked, setIsClicked] = React.useState(false);

    return React.creatElement(
        'button',
        {onClick:() => setIsClicked(true)},
        isClicked ? 'Clicked' : 'Click here!'
    )
}

const domContainer = document.querySelector('#root');
ReackDom.render(react.creatElement(MyButton), domContainer);