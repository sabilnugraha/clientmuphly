import React, { useState } from 'react';
import FormPage from './testingpage';

function Form() {
  const [page, setPage] = useState(1);

  return (
    <div>
      <FormPage page={page} setPage={setPage} />
    </div>
  );
}

export default Form;
