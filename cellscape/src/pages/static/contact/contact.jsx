import { TextInput, Textarea, SimpleGrid, Group, Title, Button } from '@mantine/core';
import { useForm as useMantineForm } from '@mantine/form';
import { useForm as useFormspree, ValidationError } from '@formspree/react';
import './contact.css';


export default function GetInTouchSimple() {
  // Formspree setup for form submission
  const [state, handleSubmit] = useFormspree("xdkonqdj");


  // Mantine form setup for field validation
  const form = useMantineForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2 ? 'Name must have at least 2 characters' : null,
      email: (value) => !/^\S+@\S+$/.test(value) ? 'Invalid email' : null,
      subject: (value) => value.trim().length === 0 ? 'Subject is required' : null,
      message: (value) => value.trim().length === 0 ? 'Message is required' : null,

    
    },
  });


  const onSubmit = (event) => {
    event.preventDefault();
    if (form.validate().hasErrors){
      return;
    }
    handleSubmit(event)
  }


 


  // Display success message after form submission
  if (state.succeeded) {
    return <p className='contact_p'>Thanks for your message!</p>;
  }


  return (
    <form onSubmit={onSubmit}>
      <Title
        order={2}
        size="h1"
        style={{ fontFamily: 'Jost' }}
        ta="center"
      >
        Contact Me
      </Title>


      <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
        <TextInput
          label="Name"
          placeholder="Your name"
          name="name"
          variant="filled"
          {...form.getInputProps('name')}
         
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
        />
        <TextInput
          label="Email"
          placeholder="Your email"
          name="email"
          variant="filled"
          {...form.getInputProps('email')}
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </SimpleGrid>


      <TextInput
        label="Subject"
        placeholder="Subject"
        mt="md"
        name="subject"
        variant="filled"
        {...form.getInputProps('subject')}
      />
      <ValidationError
        prefix="Subject"
        field="subject"
        errors={state.errors}
      />


      <Textarea
        mt="md"
        label="Message"
        placeholder="Your message"
        maxRows={10}
        minRows={5}
        autosize
        name="message"
        variant="filled"
        {...form.getInputProps('message')}
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />


      <Group justify="center" mt="xl">
        <Button type="submit" size="md" style={{ backgroundColor: '#EF233C' }} disabled={state.submitting}>
          Send Message
        </Button>
      </Group>
    </form>
  );
}



