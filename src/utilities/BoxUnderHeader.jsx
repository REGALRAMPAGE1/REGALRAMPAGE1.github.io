import Box from '@mui/material/Box';

export default function BoxUnderHeader({width})
{
    return(
        <Box
            sx={{
                height: 2,
                width: {width},
                backgroundColor: '#00C2B5'
            }}
        />
    );
}
