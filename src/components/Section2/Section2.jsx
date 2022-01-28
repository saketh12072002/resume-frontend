import React from "react";
import ImgContainer from "../ImgContainer/ImgContainer";
import ListContainer from "../ListContainer/ListContainer";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./Section2.css";
export default function Section2() {
    return (
        <div className="Section2">
            <SectionHeader />
            <div className="container">
                <div className="row">
                    <ImgContainer src={require("../../images/Rectangle4.png")} alt="" />
                    <ListContainer highlightNum={[true, false, false]} highlightTxt={[true, false, false]} />
                </div>
                <div className="row">
                    <ImgContainer src={require("../../images/Rectangle4.png")} alt="" />
                    <ListContainer highlightNum={[false, true, false]} highlightTxt={[false, true, false]} />
                </div>
                <div className="row">
                    <ImgContainer src={require("../../images/Rectangle4.png")} alt="" />
                    <ListContainer highlightNum={[false, false, true]} highlightTxt={[false, false, true]} />
                </div>
            </div>
        </div>
    );
}