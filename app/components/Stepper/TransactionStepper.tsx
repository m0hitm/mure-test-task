import {
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import dynamic from "next/dynamic";

const TxnStepIcons = dynamic(
  () => import("./TxnStepIcon").then((e) => e.TxnStepIcons),
  {
    ssr: false,
  }
);

interface ISteps {
  label: string;
  description: string;
}

interface Props {
  activeStep: number;
  steps: ISteps[];
}

const VerticalConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      // backgroundImage: `linear-gradient( 95deg,${theme.palette.primary.light} 0%,${theme.palette.primary.light} 50%,${theme.palette.primary.light} 100%)`,
      backgroundColor: "transparent",
      borderLeft: "2px solid #C3C2D4",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      // backgroundImage: `linear-gradient( 95deg,${theme.palette.primary.light} 0%,${theme.palette.primary.light} 50%,${theme.palette.primary.light} 100%)`,
      backgroundColor: "transparent",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderLeft: "2px dotted #C3C2D4",
    marginLeft: -4,
  },
}));

export function TxnStepper({ activeStep, steps }: Props) {
  return (
    <Stepper
      activeStep={activeStep}
      orientation="vertical"
      connector={<VerticalConnector />}
      sx={{
        mt: 2.5,
        ml: "10px",
        borderColor: "background.white2",
      }}
    >
      {steps.map((step, index) => (
        <Step key={step.label}>
          <StepLabel StepIconComponent={TxnStepIcons} sx={{ p: 0 }}>
            {step?.label}
          </StepLabel>
          <StepContent
            sx={{
              borderLeft: "2px",
              borderLeftStyle: activeStep > index ? "solid" : "dotted",
              borderColor: "background.white2",
              marginLeft: "8px",
            }}
          >
            <Typography variant="body2" sx={{ color: "text.secondary", ml: 4 }}>
              {step?.description}
            </Typography>
          </StepContent>
        </Step>
      ))}
    </Stepper>
  );
}
