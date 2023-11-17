'use client';

import { useFormState  } from 'react-dom';

async function increment(previousState, formData) {
   return previousState + 1;
 }

const SubmitButton = () => {
	const [state, formAction] = useFormState(increment, 0);


	return (
      <button className='btn-primary'>
         {/* {pending ? <span>Submitting...</span> : <span>Submit</span>} */}
         hel
      </button>
   );
};

export default SubmitButton;
