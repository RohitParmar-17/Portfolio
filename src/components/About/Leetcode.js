import LeetCodeCalendar from 'leetcode-calendar';
import { Row } from "react-bootstrap";

function Leetcode(){
    const exampleTheme = {
        light: [
          'rgb(235, 235, 235)',
          'rgba(255, 128, 17, 0.44)',
          'rgba(254, 119, 47, 0.6)',
          'rgba(255, 181, 63, 0.76)',
          'rgba(255, 216, 117, 0.92)',
        ],
        dark: [
          'rgb(235, 235, 235)',
          'rgba(255, 128, 17, 0.44)',
          'rgba(254, 119, 47, 0.6)',
          'rgba(255, 181, 63, 0.76)',
          'rgba(255, 216, 117, 0.92)',
        ],
      }
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
            Days I <strong className="purple">LeetCode</strong>
          </h1>
            <LeetCodeCalendar
              username='RohitParmar_17'
              blockSize={15}
              blockMargin={5} 
              color="orange"
              theme={exampleTheme}
              fontSize={16} 
              style={{ maxWidth: '1100px' }} 
            />
        </Row>
      );
}

export default Leetcode;
