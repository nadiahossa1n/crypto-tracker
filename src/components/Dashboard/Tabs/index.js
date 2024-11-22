import React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material";

export default function TabsComponent({ coins }) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  const style = {
    color: "var(--white)",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize",
  };

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="1" sx={style} />
          <Tab label="List" value="2" sx={style} />
        </TabList>
        <TabPanel value="1">
          <div>
            {coins.map((item, i) => {
              return (
                <p key={i}>
                  {i + 1}.{item.name}
                </p>
              );
            })}
          </div>
          <div>{coins.name}</div>
        </TabPanel>
        <TabPanel value="2">
          <div>
            {coins.map((item, i) => {
              return (
                <p key={i}>
                  {i + 1}.{item.id}
                </p>
              );
            })}
          </div>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
