import './ImgContainer.css';

export default function ImgContainer(props) {
    return (
        <div className="img-container">
            <img src={props.src} alt=""/>
        </div>
    );
}