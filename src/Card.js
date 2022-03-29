import * as React from "react";
import Data from './Data'
import { Stack, Typography } from "@mui/material";
import { GuiCard, GuiCardHeader, GuiCardContent } from "@gsretail.com/gui-core";

function Card() {
    return(
        <React.Fragment>
        <Stack spacing={3} direction="column">
            <GuiCard>
            <GuiCardHeader
                title={<Typography variant="subtitle1">Card Title</Typography>}
                subheader={<Typography variant="body2">Card Sub Header</Typography>}
                action={null}
            />
            <GuiCardContent>
                variant: "elevation" (default)
                <br />
                elevation: 1 (default)
                <br />
                minHeight="200px"
            </GuiCardContent>
            </GuiCard>
            <GuiCard variant="outlined" minHeight="200px">
            <GuiCardHeader
                title={<Typography variant="subtitle1">Card Title</Typography>}
                subheader={<Typography variant="body2">Card Sub Header</Typography>}
                action={null}
            />
            <GuiCardContent>
                variant: "outlined"
                <br />
                minHeight="200px"
            </GuiCardContent>
            </GuiCard>
            <GuiCard variant="outlined" square minHeight="200px">
            <GuiCardHeader
                title={<Typography variant="subtitle1">Card Title</Typography>}
                subheader={<Typography variant="body2">Card Sub Header</Typography>}
                action={null}
            />
            <GuiCardContent>
                variant="outlined"
                <br />
                square (default: false)
                <br />
                minHeight="200px"
            </GuiCardContent>
            </GuiCard>
        </Stack>
        </React.Fragment>
    );
}

export default Card;