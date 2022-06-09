import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import items from "./fakeData";
import { Button } from "@mui/material";

const App: React.FC = () => {
  const [expanded, setExpanded] = React.useState<string[]>([]);
  const expandedAll: boolean = items.length === expanded.length;

  const handleChange = (panel: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    const expandedInState: string[] = JSON.parse(JSON.stringify(expanded));
    if (isExpanded) expandedInState.push(panel);
    else {
      const index: number = expandedInState.findIndex(
        (collapsed) => collapsed === panel
      );
      if (index > -1) {
        expandedInState.splice(index, 1);
      }
    }

    setExpanded(expandedInState);
  };

  return (
    <div style={{ margin: 100, marginTop: 20, maxWidth: "50%" }}>
      <Button
        style={{ margin: 20, marginLeft: 0 }}
        size="small"
        variant="contained"
        onClick={() =>
          setExpanded(expandedAll ? [] : items.map(({ name }) => name))
        }
      >
        {expandedAll ? "Collapse All" : "Expand All"}
      </Button>
      {items.map(({ name, details }) => (
        <Accordion
          style={{ marginBottom: 5, lineHeight: 10 }}
          expanded={expanded.includes(name)}
          onChange={handleChange(name)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>{name}</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              In Progress
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <table width="100%">
                {details.map(({ productName, jurisdictionName }) => (
                  <tr style={{ border: "solid 1px black" }}>
                    <td>{productName}</td>
                    <td>{jurisdictionName}</td>
                    <td>-</td>
                  </tr>
                ))}
              </table>
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default App;
