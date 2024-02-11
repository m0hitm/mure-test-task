import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { SuccessDialogProps } from "../types/types";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from "next/link";

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

export default function SuccessDialog(props: SuccessDialogProps) {
  const { successModal, handleSuccessModal, appAddress } = props;

  return (
    <Modal
      open={successModal}
      onClose={handleSuccessModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{ outline: "none" }}
    >
      <Box sx={style}>
        <Stack
          direction="column"
          justifyContent="center"
          gap={2}
          alignItems="center"
          textAlign="center"
        >
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold" }}
          >
            Congrats your Pool has been Deployed
          </Typography>
          <DoneAllIcon
            sx={{ color: "#5cb85c", height: "40px", width: "40px" }}
          />
          <Link
            href={`https://sepolia.etherscan.io/address/${appAddress}`}
            target="_blank"
          >
            <Button variant="contained" color="primary">
              See Pool
            </Button>
          </Link>
        </Stack>
      </Box>
    </Modal>
  );
}
