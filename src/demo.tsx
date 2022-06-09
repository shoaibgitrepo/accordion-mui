import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { items } from "./fakeData";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<boolean>(true);

  const handleChange = (panel: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(!expanded);
  };

  console.log("items", items);

  const data = [];
  for (let i = 0; i < 49; i++) {
    data.push({
      name: `Name ${i}`,
      status: "In Progress",
      desctiprion: [
        "UCC",
        "UCC",
        "UCC",
        "UCC",
        "UCC",
        "UCC",
        "UCC",
        "UCC",
        "UCC",
        "UCC",
        "UCC",
        "UCC"
      ]
    });
  }

  return (
    <div>
      {data.map(({ name, status, description }) => (
        <Accordion expanded={expanded} onChange={handleChange("panel1")}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Name 1</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              In Progress
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p style={{ margin: 0 }}>UCC Description</p>
              <p style={{ margin: 0 }}>UCC Description</p>
              <p style={{ margin: 0 }}>UCC Description</p>
              <p style={{ margin: 0 }}>UCC Description</p>
              <p style={{ margin: 0 }}>UCC Description</p>
              <p style={{ margin: 0 }}>UCC Description</p>
              <p style={{ margin: 0 }}>UCC Description</p>
              <p style={{ margin: 0 }}>UCC Description</p>
              <p style={{ margin: 0 }}>UCC Description</p>
              <p style={{ margin: 0 }}>UCC Description</p>
              <p style={{ margin: 0 }}>UCC Description</p>
              <p style={{ margin: 0 }}>UCC Description</p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
