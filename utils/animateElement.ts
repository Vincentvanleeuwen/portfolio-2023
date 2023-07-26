const animateElement = (selectors: NodeListOf<Element>) => {
  let elementsToAnimateCount = 0;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;
        target.classList.add("animate-in");
        observer.unobserve(target); // Stop observing the current target
        elementsToAnimateCount--;
        if (elementsToAnimateCount === 0) {
          observer.disconnect();
        }
      }
    });
  });

  selectors.forEach((element) => {
    observer.observe(element);
    elementsToAnimateCount++;
  });
};

export default animateElement;
