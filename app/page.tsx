"use client";

import { useAccount } from "wagmi";
import { ConnectKitButton } from "connectkit";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppInfo from "./components/AppInfo";
import { sepolia } from "viem/chains";
import { useState } from "react";
import MyPools from "./components/MyPools";

function App() {
  const [active, setActive] = useState<"create" | "pools">("create");
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
            <Stack direction="row" alignSelf="flex-start" sx={{ mb: 5 }}>
              <Button
                variant="outlined"
                sx={{
                  width: "150px",
                  backgroundColor:
                    active === "create" ? "#508AF5" : "transparent",
                  "&:hover": {
                    backgroundColor: "#508AF5",
                  },
                  color: "text.primary",
                }}
                onClick={() => setActive("create")}
              >
                Create Pool
              </Button>
              <Button
                variant="outlined"
                sx={{
                  width: "150px",
                  backgroundColor:
                    active === "pools" ? "#508AF5" : "transparent",
                  "&:hover": {
                    backgroundColor: "#508AF5",
                  },
                  color: "text.primary",
                }}
                onClick={() => setActive("pools")}
              >
                My Pools
              </Button>
            </Stack>
            <Stack
              direction="column"
              alignItems="center"
              gap={2}
              sx={{ width: "100%" }}
            >
              <Typography variant="h4">
                {active === "create" ? "Create Your Pool" : "My Pools"}
              </Typography>
              {active === "create" ? (
                <AppInfo
                  version="1"
                  caller={address || "0x"}
                  chainId={chainId || 11155111}
                  chain={chain || sepolia}
                />
              ) : (
                <MyPools />
              )}
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
