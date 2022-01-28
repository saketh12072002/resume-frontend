import './SectionHeader.css';

function SectionHeader() {
    return (
        <h1 className="section_header">
            Effortlessly make <img src={require("../../images/Stripe.png")} alt=""/>a job-worthy resume
        </h1>
    );
}

export default SectionHeader;