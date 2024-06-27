import { MantineProvider } from "@mantine/core";
import "./App.css";
import "./cad/cad.css";
export default function Layout({ children }) {
  return (
    <div className="">
      {" "}
      <MantineProvider theme={theme}>
        {/* <App /> */}
        {children}
      </MantineProvider>
    </div>
  );
}
