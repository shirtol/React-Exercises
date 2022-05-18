import React from "react";
import SelectTagOption from "./SelectTagOption";

export default class SelectTag extends React.Component {
    render() {
        return (
            <div className="select-tag-container">
                <label>Age</label>
                <select
                    value={this.props.selectTagValue}
                    onChange={this.props.whenSelectTagChange}
                >
                    <SelectTagOption textValue="0-15"></SelectTagOption>
                    <SelectTagOption textValue="16-30"></SelectTagOption>
                    <SelectTagOption textValue="31-45"></SelectTagOption>
                    <SelectTagOption textValue="46-60"></SelectTagOption>
                    <SelectTagOption textValue="61-75"></SelectTagOption>
                    <SelectTagOption textValue="76-90"></SelectTagOption>
                    <SelectTagOption textValue="91+"></SelectTagOption>
                </select>
            </div>
        );
    }
}
