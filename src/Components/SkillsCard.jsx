import React from 'react'
import { Typography, ListItem } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function SkillsCard(props) {
  return (
    <Card sx={{ width: 450, height: 500, mb: 10, marginRight: 7, backgroundColor: "#264653"}}>
      <CardContent>
        <Typography variant="h3" color="#2A9D8F">{props.title}</Typography>
        {props.data.map((item, index) => (
          <div key={index}>
            <ListItem>
              <Typography variant="h5" color="#2A9D8F">{item}</Typography>
            </ListItem>
          </div>
        ))}
      </CardContent>
      </Card>
  )
}

export default SkillsCard