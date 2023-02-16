import "animate.css";

export const MainComponent = () => {
  return (
    <div className="div-container">
      <img src="images/image-about-dark.jpg" alt="" />
      <div className="main-col2 animate__animated animate__slideInUp">
        <div>
          <h2>About our furniture</h2>
          <p>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to comtemporary
            styles or anything in between. Product specialist are available to
            help you create your dream space.
          </p>
        </div>
      </div>
      <img src="images/image-about-light.jpg" alt="" />
    </div>
  );
};
