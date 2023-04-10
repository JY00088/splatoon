import { useEffect, useRef } from 'react';

const Welcome = () => {
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // do something when element is in view
          entry.target.classList.add('visible');
        } else {
          // do something when element is out of view
          entry.target.classList.remove('visible');
        }
      });
    });

    const observedElements = document.querySelectorAll('.observed-element');
    observedElements.forEach((element) => {
      observer.current.observe(element);
    });

    return () => {
      observer.current.disconnect();
    };
  }, []);

  return (
    <div>
      <div className="observed-element">Observed Element 1</div>
      <div className="observed-element">Observed Element 2</div>
      <div className="observed-element">Observed Element 3</div>
    </div>
  );
};

export default Welcome;
