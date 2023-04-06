import React from 'react'
import { Typography, ListItem } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function SkillsCard(props) {
  return (
    <Card sx={{ width: 450, height: 500, mb: 10, marginRight: 7}}>
      <CardContent>
        <Typography variant="h4">{props.title}</Typography>
        {props.data.map((item, index) => (
          <div key={index}>
            <ListItem>
              <Typography>{item}</Typography>
            </ListItem>
          </div>
        ))}
      </CardContent>
      </Card>
  )
}

export default SkillsCard