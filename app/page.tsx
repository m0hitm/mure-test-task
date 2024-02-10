"use client";

import { useAccount } from "wagmi";
import { ConnectKitButton } from "connectkit";
import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppInfo from "./components/AppInfo";
import { sepolia } from "viem/chains";

function App() {
  const theme = useTheme();
  const { isConnected, chainId, address, chain } = useAccount();

  return (
    <Box sx={{ padding: "20px" }}>
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
                caller={address || "0x"}
                chainId={chainId || 11155111}
                chain={chain || sepolia}
              />
            </Stack>
          </>
        ) : (
          <Stack direction="column" alignItems="center" gap={2}>
            <Typography variant="h1">Welcome to Mure Pool!</Typography>
            <Typography variant="h4">
              Connect wallet to create your own pool
            </Typography>
          </Stack>
        )}
      </Stack>
    </Box>
  );
}

export default App;
