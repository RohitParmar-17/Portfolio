import { useState, useEffect } from "react";
import LeetCodeCalendar from "leetcode-calendar";
import { Container } from "react-bootstrap";

function Leetcode() {
  const [blockSize, setBlockSize] = useState(15); 
  const [blockMargin, setBlockMargin] = useState(5);
  const [fontSize, setFontSize] = useState(16); 

  useEffect(() => {
    const updateSizes = () => {
      if (window.innerWidth < 768) {
        setBlockSize(4);
        setBlockMargin(2);
        setFontSize(10);
      } else {
        setBlockSize(15);
        setBlockMargin(5);
        setFontSize(16);
      }
    };

    updateSizes();
    window.addEventListener("resize", updateSizes); 

    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  const exampleTheme = {
    light: [
      "rgb(235, 235, 235)",
      "rgba(255, 128, 17, 0.44)",
      "rgba(254, 119, 47, 0.6)",
      "rgba(255, 181, 63, 0.76)",
      "rgba(255, 216, 117, 0.92)",
    ],
    dark: [
      "rgb(235, 235, 235)",
      "rgba(255, 128, 17, 0.44)",
      "rgba(254, 119, 47, 0.6)",
      "rgba(255, 181, 63, 0.76)",
      "rgba(255, 216, 117, 0.92)",
    ],
  };

  return (
    <Container fluid className="d-flex flex-column align-items-center">
      <h1 className="project-heading text-center" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">LeetCode</strong>
      </h1>

      <div
        style={{
          width: "100%",
          maxWidth: "100%",
          overflowX: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <LeetCodeCalendar
          username="RohitParmar_17"
          blockSize={blockSize}
          blockMargin={blockMargin} 
          color="orange"
          theme={exampleTheme}
          fontSize={fontSize} 
          style={{ maxWidth: "100%", minWidth: "300px" }}
        />
      </div>
    </Container>
  );
}

export default Leetcode;
