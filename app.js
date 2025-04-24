particlesJS("particles-js", {
    particles: {
      number: {
        value: 150,
        density: { enable: true, value_area: 800 },
      },
      color: { value: "#ffea00" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffea00",
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        out_mode: "out",
      },
    },
  });