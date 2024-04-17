import React from "react";
import { capitalize } from "../../utils/functions";

const DisabledInput = ({ name, type, data, setData, errors, classes = "",placeholder = "" }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{capitalize(name)}</label>
            <input
                onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(
                      /[^0-9+()]/g,
                      ""
                    );
                }}
                min={0}
                type={type}
                className={`form-control ${classes}`}
                placeholder={placeholder}
                id={name}
                disabled
                aria-describedby={name}
                value={data===null ? '' : data}
                onChange={(e) => setData(parseInt(e.target.value))}
                style={{cursor:"not-allowed",backgroundColor:"#F4F4F4"}}
            />

            {errors[name] && (
                <label className="text-danger" style={{marginLeft:5 , marginRight:5}}>{errors[name]} </label>
            )}
        </div>
    );
};

export default DisabledInput;
