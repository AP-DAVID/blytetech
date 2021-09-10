import React from "react";
import Input from "@material-tailwind/react/Input";

const TextInput = (props) => {
  return (
    <div className="bg-gray-700 w-52 flex-grow" style={{ marginBottom: "20px",   borderRadius: 10}}>
      <Input
        {...props}
        className="bg-gray-700 "
        style={{color : "white"}}
        color="lightBlue"
        size="regular"
        outline={true}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        error={props.error}
        success={props.success}
      />
    </div>
  );
};

export default TextInput;
