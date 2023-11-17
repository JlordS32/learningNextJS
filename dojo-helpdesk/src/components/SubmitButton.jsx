'use client';

import { useFormState  } from 'react-dom';

const SubmitButton = () => {
	const [state, formAction] = useFormState(increment, 0);


	return (
      <button disabled={pending} className='btn-primary'>
         {pending ? <span>Submitting...</span> : <span>Submit</span>}
      </button>
   );
};

export default SubmitButton;
