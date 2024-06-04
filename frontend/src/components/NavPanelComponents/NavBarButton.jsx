export default function NavBarButton({ buttonValue, onClick }){
    return (
        <button className="btn" style={{fontSize: "20px"}} onClick={onClick}>
            {buttonValue}
        </button>
    )
};