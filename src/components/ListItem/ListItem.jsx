import './ListItem.css';

export default function ListItem(props) {
    return (
        <div className="list-item">
            <div className={`num-container ${props.highlightNum ? 'highlight-num' : ''}`}>
                <h1>{props.num}</h1>
            </div>
            <div className={`txt-container ${props.highlightTxt ? 'highlight-txt' : ''}`}>
                <p>{props.txt}</p>
            </div>
        </div>
    );
}