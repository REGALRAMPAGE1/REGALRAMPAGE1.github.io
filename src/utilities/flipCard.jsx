import { Box } from '@mui/material';
import './flipCard.css';
import Button from '@mui/material/Button';
import Gradient from 'rgt';

export default function FlipCard({ frontHeader, backDescription, backPrice, imageUrl }) {
  return (
    <>
      <div className="card">
        <div className="cardContent">
          <div className="cardFront">
            <Box
              sx={{
                display: 'flex',
                borderRadius: '50%',
                width: '15em',
                height: '15em',
                background: 'linear-gradient(to right, #00C2B5, #003E72 90%)',
                alignItems: 'center',
                justifyContent: 'center',
                transform: 'translateX(0.5em)',
                transformStyle: 'preserve-3d',
                position: 'relative',
                boxShadow: '7px 7px 7px rgba(0, 0, 0, 0.3)',

                '@media (max-width: 1200px)': {
                  display: 'flex',
                  borderRadius: '50%',
                  width: '8em',
                  height: '8em',
                  background: 'linear-gradient(to right, #00C2B5, #003E72 90%)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: 'translateX(0.5em)',
                  transformStyle: 'preserve-3d',
                  position: 'relative',
                  boxShadow: '7px 7px 7px rgba(0, 0, 0, 0.3)',
                }
              }}
            >
              <img src={imageUrl} alt="Card Front" style={{ 
                  width: '60%', 
                  height: '60%', 
                  transform: 'translateZ(4em)',
                  
                  '@media (max-width: 1200px)':{
                    width: '60%', 
                    height: '60%', 
                    transform: 'translateZ(1em)'
                  }
                }} />
            </Box>
            <h3 className="cardTitle">{frontHeader}</h3>
          </div>

          <div className="cardBack">
            <p className="cardBody">{backDescription}</p>
            <p className="cardPrice">
              <Gradient dir="top-to-bottom" from="#00C2B5" to="#003E72">
                <b>R {backPrice}</b>
              </Gradient>
            </p>
            <Button
              type="submit"
              className="cardFlipSubmit"
              variant="contained"
              style={{
                borderRadius: '20px',
                fontFamily: 'Boogaloo',
                boxShadow: '7px 7px 7px rgba(0, 0, 0, 0.3)',
                backgroundColor: '#003E72',
                fontSize: '1em'
              }}
            >
              <span className="submitButtonText">FIND OUT MORE</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
