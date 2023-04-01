import { Box, Typography } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";

const ContactMe = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (event) => {
    event.preventDefault()
  }

  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <Box>
      <Typography>Contact</Typography>
      <Typography>Interested in working together? Let's connect via email or LinkedIn</Typography>
    {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography>Name</Typography>
      <input {...register("name"), { required: true}} />
      
      <Typography>Email</Typography>
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("email", { required: true })} />

      <Typography>Subject</Typography>
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("subject", { required: true })} />

      <Typography>Message</Typography>
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("message", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
    </Box>
  );
}

export default ContactMe;
