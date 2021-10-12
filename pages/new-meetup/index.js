// our-domain.com/new-meetup

import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { Head } from 'next/head';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetup() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetusData) {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetusData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    console.log(data);

    router.push('/');
  }

  return (
    <Fragment>
      <title>Add a New Meetup</title>
      <meta
        name="description"
        content="Browse a huge list of highly active meetup places!"
      />
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetup;
