import React from "react"
import {ButtonLike} from "../../styles/generalStyles";
import Icon from "@mdi/react";
import {mdiCheck} from "@mdi/js";
import {useReactBricksTheme} from "../../themeProvider/ReactBricksThemeProvider";

interface ButtonConfig{
    size?: string;
    color?: string;
    onClick?: () => void
}

const CheckButton = ({size, color, onClick}: ButtonConfig) => {
    const {bricksConfig} = useReactBricksTheme()

    return <ButtonLike onClick={onClick}>
        <Icon
            path={mdiCheck}
            size={size || bricksConfig.GeneralSizes.Button.Medium}
            color={color || bricksConfig.GeneralColors.Success}
        />
    </ButtonLike>
}

export default CheckButton