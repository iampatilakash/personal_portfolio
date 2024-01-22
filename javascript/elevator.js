function moveLift(targetSectionId, direction) {
    const section = document.getElementById(targetSectionId);
    const lift = document.getElementById('elevator');
    const bodyContent = document.getElementById('bodyContent');
  
    const currentSectionId = getCurrentSectionId();
    const targetSectionTop = section.offsetTop ;


  
    if (currentSectionId !== targetSectionId) {
      // Lift is not in the target section, move the lift and the entire body to that section with constant speed
      const currentPosition = lift.offsetTop;
      const distance = Math.abs(targetSectionTop - currentPosition);
  
      const liftSpeed = 500; // Adjust the lift speed as needed (e.g., pixels per second)
      const bodySpeed = 300; // Adjust the body speed as needed (e.g., pixels per second)
      
  
      const liftDuration = distance / liftSpeed * 2000; // Convert speed to milliseconds
      const bodyDuration = distance / bodySpeed * 1000; // Convert speed to milliseconds
  
      lift.style.transition = `top ${liftDuration}ms linear`;
      lift.style.top = targetSectionTop + 440 +  'px';
  
      bodyContent.style.transition = `top ${bodyDuration}ms linear`;
      bodyContent.style.top = `-${targetSectionTop * (bodySpeed / liftSpeed)}px`; // Move the body at a slower speed
  
      setTimeout(() => {
        lift.style.transition = ''; // Remove lift transition after animation
        bodyContent.style.transition = ''; // Remove body transition after animation
      }, Math.max(liftDuration, bodyDuration));
    } else {
      // Lift is already in the target section, respond to the button press
      const currentPosition = lift.offsetTop;
      const newPosition = currentPosition + direction * 830;

      const liftSpeed = 500;
      const bodySpeed = 300;
      
      const duration = 2000; // Adjust the duration as needed (e.g., milliseconds)
  
      lift.style.transition = `top ${duration}ms linear`;
      lift.style.top = newPosition + 'px';
  
      bodyContent.style.transition = `top ${duration}ms linear`;
      console.log(bodySpeed);
      bodyContent.style.top = `-${newPosition * (bodySpeed / liftSpeed)}px`; // Move the body at a slower speed
  
      setTimeout(() => {
        lift.style.transition = ''; // Remove lift transition after animation
        bodyContent.style.transition = ''; // Remove body transition after animation
      }, duration);
    }
  }
  
  
      function getCurrentSectionId() {
        const lift = document.getElementById('elevator');
        const sections = document.querySelectorAll('.floor');
  
        for (const section of sections) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.clientHeight;
          
          if (lift.offsetTop >= sectionTop && lift.offsetTop <= sectionBottom) {
            return section.id;
          }
        }
  
        return null;
      }