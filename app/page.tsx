"use client";

import { useAccount } from "wagmi";
import { ConnectKitButton } from "connectkit";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Chain } from "viem";
import AppInfo from "./components/AppInfo";

function App() {
  const theme = useTheme();
  const { isConnected, chainId, address, chain } = useAccount();

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Typography
          variant="h4"
          fontWeight="bold"
          color={theme.palette.text.primary}
        >
          Mure Pool
        </Typography>
        <ConnectKitButton />
      </Stack>
      <Stack direction="column" mt={10} alignItems="center">
        {isConnected ? (
          <>
            <Stack direction="column" alignItems="center" gap={2}>
              <Typography variant="h4">Create Your Pool</Typography>
              <AppInfo
                version="1"
                caller={address as string}
                chainId={chainId as number}
                chain={chain as Chain}
              />
            </Stack>
          </>
        ) : (
          <Stack direction="column" alignItems="center" gap={2}>
            <Typography variant="h1">Welcome to Moore Pool!</Typography>
            <Typography variant="h4">
              Connect Wallet to create your own Pool
            </Typography>
          </Stack>
        )}
      </Stack>
    </Box>
  );
}

export default App;
