import { Box } from '@mui/material';

export default function Boxicons({icon}){
    return(
        <>
        <Box
            sx={{
                display: 'flex',
                borderRadius: '50%', // Set the border radius to 50% for a circular shape
                width: '2.5em',
                height: '2.5em',
                backgroundColor: '#00C2B5', // Replace with your desired background color
                alignItems: 'center',
                justifyContent: 'center'
            }}
            >
            {icon}
        </Box>
        </>
    );
};