import { Stack, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Result({ data }) {
  const { homeValue, loanAmount, loanTerm, interestRate } = data;

  const totalLoanMonth = loanTerm * 12;
  const interestPerMonth = interestRate / 100 / 12;

  const monthlyPament =
    (loanAmount * interestPerMonth * (1 + interestPerMonth) ** totalLoanMonth) /
    ((1 + interestPerMonth) ** totalLoanMonth - 1);

  const totalInterestGenerated = monthlyPament * totalLoanMonth - loanAmount;

  const pieChartData = {
    labels: ["Principle", "Interest"],
    datasets: [
      {
        label: "Ratio of interest and principle",
        data: [homeValue, totalInterestGenerated],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Stack gap={3}>
      <Typography variant="h5" textAlign="center">
        Monthly Payment: $ {monthlyPament.toFixed(2)}
      </Typography>
      <Stack direction="row" justifyContent="center">
        <div>
          <Pie data={pieChartData} />
        </div>
      </Stack>
    </Stack>
  );
}
