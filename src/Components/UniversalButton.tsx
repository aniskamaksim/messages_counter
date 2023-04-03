import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import Button from "@mui/material/Button";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>
type UniversalButtonType = DefaultButtonPropsType & {
    name: string
    callBack: () => void
    isDisabled?: boolean
    classVariant: "outlined" | "contained" | "text" | undefined

}
export const UniversalButton: React.FC<UniversalButtonType> = (
    {name, callBack, isDisabled = false, classVariant, ...props}
) => {
    const callBackHandler = () => {
        callBack();
    }
    return (
        <Button
            color={"primary"}
            onClick={callBackHandler}
            disabled={isDisabled}
            variant={classVariant}
            size={"small"}
        >{name}</Button>
    );
};