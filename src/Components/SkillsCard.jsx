import React from 'react'
import { Typography, ListItem } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function SkillsCard(props) {
  return (
    <Card sx={{ width: 450, height: 500, mb: 10, marginRight: 7, padding:2, borderRadius:10}}>
      <CardContent>
        <Typography variant="h3" color="#E76F51" style={{ fontFamily: 'Arial', fontWeight: 'bold'}}>{props.title}</Typography>
        {props.data.map((item, index) => (
          <div key={index}>
            <ListItem>
              <Typography variant="h6" color="#2A9D8F">{item}</Typography>
            </ListItem>
          </div>
        ))}
      </CardContent>
      </Card>
  )
}

export default SkillsCard