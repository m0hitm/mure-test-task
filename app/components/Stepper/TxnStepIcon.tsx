import { StepIconProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import GridViewIcon from "@mui/icons-material/GridView";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const TxnStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.background.default,
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  }),
}));

export function TxnStepIcons(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <VpnKeyIcon />,
    2: <GridViewIcon />,
    3: <CheckCircleIcon />,
  };

  return (
    <TxnStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </TxnStepIconRoot>
  );
}
