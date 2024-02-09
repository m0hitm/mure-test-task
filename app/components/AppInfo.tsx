import { TextField, Button, Grid, Paper } from "@mui/material";
import { useState } from "react";
import { AppInfoProps, CreatePoolProps } from "../types/types";
import createPool from "../utils/createPool";
import axios from "axios";
import TransactionDialog from "./TransactionDialog";
import { Address } from "viem";
import * as yup from "yup";

const appInfoValidationSchema = yup.object({
  appName: yup.string().required("App Name is required"),
  version: yup.string().required("Version is required"),
  appOwner: yup
    .string()
    .required("App Owner is required")
    .length(42, "App Owner must be exactly 42 characters long"),
});

export default function AppInfo(props: AppInfoProps) {
  const { version, caller, chainId, chain } = props;
  const [modal, setModal] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [txError, setTxError] = useState<boolean>(false);
  const [errors, setErrors] = useState({
    appName: "",
    appOwner: "",
    version: "",
  });

  const [formValues, setFormValues] = useState({
    appName: "",
    appOwner: "",
    version: version,
    chainId: chainId,
    caller: caller.toLowerCase(),
  });

  const handleModal = () => {
    setTxError(false);
    setIsDisabled(true);
    setModal(!modal);
  };

  const handleChange = (field: string) => (e: any) => {
    setFormValues({
      ...formValues,
      [field]: e.target.value,
    });

    setErrors({
      ...errors,
      [field]: "",
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const isValid = await appInfoValidationSchema.isValid(formValues, {
      abortEarly: false,
    });

    if (!isValid) {
      try {
        await appInfoValidationSchema.validate(formValues, {
          abortEarly: false,
        });
      } catch (validationErrors: any) {
        const newErrors: any = {};
        validationErrors.inner.forEach((error: any) => {
          newErrors[error.path] = error.message;
        });

        setErrors(newErrors);
      }
      return;
    }

    try {
      handleModal();
      const resp = await axios.get(
        `/api?appName=${formValues.appName}&version=${
          formValues.version
        }&appOwner=${formValues.appOwner.toLowerCase()}&chainId=${
          formValues.chainId
        }&caller=${formValues.caller.toLowerCase()}`
      );

      const contractArgs = {
        chain,
        sig: resp.data.data.signature as string,
        appName: formValues.appName,
        appOwner: formValues.appOwner,
        version: formValues.version,
        deadline: Number(resp.data.data.params.deadline),
        caller: caller as Address,
      };

      setActiveStep(1);
      const proxy = await createPool(contractArgs);
      console.log(resp.data.data.signature);
      setActiveStep(2);
      setIsDisabled(false);
    } catch (err) {
      setActiveStep(0);
      setIsDisabled(false);
      setTxError(true);
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Paper elevation={3} style={{ padding: 20, borderRadius: "10px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="App Name"
              fullWidth
              variant="outlined"
              value={formValues.appName}
              onChange={handleChange("appName")}
              error={!!errors.appName}
              helperText={errors.appName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="App Owner"
              fullWidth
              variant="outlined"
              value={formValues.appOwner}
              onChange={handleChange("appOwner")}
              error={!!errors.appOwner}
              helperText={errors.appOwner}
            />
          </Grid>
          <Grid item xs={12} lg={6} md={6}>
            <TextField
              label="Version"
              fullWidth
              variant="outlined"
              value={formValues.version}
              type="number"
              onChange={handleChange("version")}
              error={!!errors.version}
              helperText={errors.version}
            />
          </Grid>
          <Grid item xs={12} lg={6} md={6}>
            <TextField
              label="Chain ID"
              fullWidth
              variant="outlined"
              value={formValues.chainId}
              disabled
              onChange={handleChange("chainId")}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Caller"
              fullWidth
              variant="outlined"
              value={formValues.caller}
              disabled
              onChange={handleChange("caller")}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ height: "50px", fontSize: "18px", fontWeight: "bold" }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <TransactionDialog
        modal={modal}
        handleModal={handleModal}
        activeStep={activeStep}
        isDisabled={isDisabled}
        txError={txError}
      />
    </form>
  );
}
