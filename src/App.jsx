import { useState } from "react";
import { Container, Grid } from "@mui/material";
import Navbar from "../src/components/Navbar";
import Result from "../src/components/Result";
import SliderSelect from "../src/components/SliderSelect";
import Tenure from "../src/components/Tenure";

function App() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
  });
  return (
    <>
      <Navbar />
      <Container maxWidth="xl" sx={{ marginTop: "40px" }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData} />
            <Tenure data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
