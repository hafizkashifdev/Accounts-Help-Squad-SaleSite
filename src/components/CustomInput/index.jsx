import {
  Box,
  Checkbox,
  ListSubheader,
  MenuItem,
  Select,
  TextField,
  TextareaAutosize,
} from "@mui/material";
// import { TextField } from "formik-material-ui";

import React, { useEffect } from "react";
import { ReactComponent as Down } from "../../assests/svg/chev-bottom.svg";

import "./styles.scss";

const CustomInput = ({
  label,
  required = true,
  type = "Text",
  options = [],
  inputClass,
  placeholder,
  parentClass,
  labelClass,
  inputType = "text",
  disable = false,
  ...props
}) => {
  useEffect(() => {}, [options?.length]);

  return (
    <Box className={`custom-input-1 ${parentClass}`}>
      <label
        style={{ paddingLeft: required ? "0" : " " }}
        className={`input_label input_label2  ${labelClass ? labelClass : ""}`}
      >
        {required && (
          <span
            className="asterisk"
            style={{ color: "red", marginTop: "-3px" }}
          >
            *
          </span>
        )}

        {label}
      </label>
      {type.toLowerCase() === "text" ? (
        <>
          <TextField
            // id="standard-basic"
            className={`usersform_textfield ${inputClass ? inputClass : ""}`}
            // label="Standard"
            type={inputType}
            disabled={disable}
            placeholder={placeholder || " Standard"}
            {...props}
          />
        </>
      ) : type.toLowerCase() === "select" ? (
        <>
          {" "}
          <Select
            className={`usersform_textfield ${inputClass ? inputClass : ""}`}
            defaultValue={props?.defaultValue || options[0]?.title || "Select"}
            value={props?.value || options[0]?.title}
            renderValue={(value) =>
              value !== "" ? (
                value
              ) : (
                <span style={{ color: "#c4c4cc" }}>{placeholder}</span>
              )
            }
            variant="standard"
            multiple={props?.isMulti ? true : false}
            disabled={disable}
            IconComponent={Down}
            {...props}
          >
            {options?.length === 0 ? (
              <MenuItem value="create a array and add them">
                create a array and add them
              </MenuItem>
            ) : props?.isMulti && props.grouped ? (
              options?.map((e, i) => (
                <div>
                  <ListSubheader>{e?.header}</ListSubheader>
                  {e?.data?.map((el, i) => (
                    <MenuItem
                      key={`${el?.value}${el?.id}`}
                      value={el.value}
                      onClick={() => props?.MenuItemOnchange(el)}
                    >
                      <Checkbox
                        checked={
                          props.personName.find(
                            (s) =>
                              s.title === el?.value && s.header === el?.header
                          )
                            ? true
                            : false
                        }
                        onChange={() => props?.MenuItemOnchange(el)}
                        sx={{
                          color: "black",
                          "&.Mui-checked": {
                            color: "black",
                          },
                        }}
                      />
                      <span> {el?.title}</span>
                    </MenuItem>
                  ))}
                </div>
              ))
            ) : props?.isMulti && !props?.grouped ? (
              options?.map((e, i) => (
                <MenuItem key={`${e?.value}${e?.id}`} value={e?.value}>
                  <Checkbox
                    checked={props?.personName.indexOf(e?.value) > -1}
                    sx={{
                      color: "black",
                      "&.Mui-checked": {
                        color: "black",
                      },
                    }}
                  />
                  <span> {e?.title}</span>
                </MenuItem>
              ))
            ) : (
              options?.map((e, i) => (
                <MenuItem key={`${e?.value}${e?.id}`} value={e?.value}>
                  {e?.title}
                </MenuItem>
              ))
            )}
          </Select>
        </>
      ) : (
        <>
          <TextareaAutosize
            // id="standard-basic"
            className={`usersform_textfield textArea-common ${
              inputClass ? inputClass : ""
            }`}
            // label="Standard"
            disabled={disable}
            placeholder={placeholder || " Standard"}
            {...props}
          />
        </>
      )}
    </Box>
  );
};

export default CustomInput;
