export default function Button({ onBtnClick, btnText }) {
    return (
        <button className="btn" onClick={onBtnClick}>
            {btnText}
        </button>
    );
}
