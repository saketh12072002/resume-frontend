import ListItem from '../ListItem/ListItem';
import './ListContainer.css';

export default function ListContainer(props) {
    return (
        <div className="list-container">
            <ListItem num="01" txt="Select your resume from the category" highlightNum={props.highlightNum[0]} highlightTxt={props.highlightTxt[0]} />
            <ListItem num="02" txt="Update your info on the dashboard" highlightNum={props.highlightNum[1]} highlightTxt={props.highlightTxt[1]} />
            <ListItem num="03" txt="Download the resume just in a click" highlightNum={props.highlightNum[2]} highlightTxt={props.highlightTxt[2]} />
        </div>
    );
}