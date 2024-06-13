export default function NavBarButton({ buttonValue, onClick }){
    return (
        <button className="btn" onClick={onClick}>
            {buttonValue}
        </button>
    )
};