import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TransactionDialogProps } from "../types/types";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { TxnStepper } from "./Stepper/TransactionStepper";
import ErrorIcon from "@mui/icons-material/Error";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "350px",
  backgroundColor: "#242429",
  border: "0",
  borderRadius: "10px",
  p: 4,
};

const steps = [
  {
    label: "Getting Signature",
    description: "",
  },
  {
    label: "Deploying Pool",
    description: "",
  },
  {
    label: "Pool Deployed",
    description: "",
  },
];

export default function TransactionDialog(props: TransactionDialogProps) {
  const { modal, handleModal, activeStep, isDisabled, txError } = props;

  return (
    <Modal
      open={modal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{ outline: "none" }}
    >
      <Box sx={style}>
        <Stack direction="column" justifyContent="center" gap={2}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold" }}
            textAlign="center"
          >
            Deploy Pool
          </Typography>
          {txError ? (
            <Stack direction="column" alignItems="center" gap={2}>
              <ErrorIcon
                sx={{
                  height: "50px",
                  width: "50px",
                  marginTop: "5px",
                  color: "#fb6149",
                }}
              />
              <Typography variant="h5" color="error" textAlign="center">
                Something went wrong! Please try again later
              </Typography>
              <Button variant="contained" onClick={handleModal} fullWidth>
                Close
              </Button>
            </Stack>
          ) : (
            <>
              <TxnStepper steps={steps} activeStep={activeStep} />
              {isDisabled && (
                <CircularProgress sx={{ alignSelf: "center", mb: "4px" }} />
              )}
              <Button
                variant="contained"
                onClick={handleModal}
                disabled={isDisabled}
              >
                Done
              </Button>
            </>
          )}
        </Stack>
      </Box>
    </Modal>
  );
}
