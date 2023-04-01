import { Box, Typography } from "@mui/material";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const form = useRef();

  const sendEmail = (event) => {
    // event.preventDefault()
    console.log("event", event);

    emailjs
      .sendForm(
        "service_1bntywt",
        "template_oagiruy",
        form.current,
        "OthNt0rxupRmQEyDm"
      )
      .then(
        () => {
          reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // console.log(watch("example")); // watch input value by passing the name of it
  return (
    <Grid2 container={true} justifyContent={"center"} id="Contact" pt={50} pb={50}>
      <Box>
        <Typography>Contact</Typography>
        <Typography>
          Interested in working together? Let's connect via email or LinkedIn
        </Typography>
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form ref={form} onSubmit={handleSubmit(sendEmail)}>
          <Typography variant="label">Name</Typography>
          <input {...register("from_name")} />

          <Typography>Email</Typography>
          {/* include validation with required or other standard HTML validation rules */}
          <input {...register("from_email")} />

          <Typography>Message</Typography>
          {/* include validation with required or other standard HTML validation rules */}
          <input {...register("message")} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </Box>
    </Grid2>
  );
};

export default ContactMe;
