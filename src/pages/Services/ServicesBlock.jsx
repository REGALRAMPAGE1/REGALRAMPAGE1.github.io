import Grid from '@mui/material/Grid';
import FlipCard from '../../utilities/flipCard';

export default function ServicesBlock(){
    const containerStyle = {
        backgroundColor: 'white'
    };
    
    const iconStyle = {
        color: '#00C2B5', // Change this to the desired color for the icons and text
        display: 'block',
        textAlign: 'center'
    };
    
    return(
        <>
            <div className="serviceIconsContainer" style={containerStyle}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                    <FlipCard frontHeader={"Branding"} backDescription={"Develop iconic brand identities that resonate with your audience, featuring awe-inspiring logos, spine-tingling letterheads and business cards, and hair-raising stationery."} backPrice={1000} imageUrl={"/servicesIcons/Branding 2.png"}/>
                    </Grid>
                    <Grid item xs={3}>
                    <FlipCard frontHeader={"Print & Digital Design"} backDescription={"Craft attention-grabbing brochures, posters, and flyers that send shivers down your customers' spines and leave a lasting impression"} backPrice={1000} imageUrl={"/servicesIcons/Print Design.png"}/>
                    </Grid>
                    <Grid item xs={3}>
                    <FlipCard frontHeader={"Social Media"} backDescription={"Cast spells on social media platforms with graphics that spark conversations and ignite your brand's online presence."} backPrice={1000} imageUrl={"/servicesIcons/Social Media.png"}/>
                    </Grid>
                    <Grid item xs={3}>
                    <FlipCard frontHeader={"Video Editing"} backDescription={"Bring your stories to life with mesmerizing video editing, creating captivating visuals that leave a lasting impact on your audience."} backPrice={1000} imageUrl={"/servicesIcons/Video editing.png"}/>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                    <FlipCard frontHeader={"Marketing & Sales"} backDescription={"Unleash the power of strategic marketing campaigns that will haunt the memories of your customers, driving brand awareness and engagement."} backPrice={1000} imageUrl={"/servicesIcons/Marketing.png"}/>
                    </Grid>
                    <Grid item xs={3}>
                    <FlipCard frontHeader={"Booklet Design"} backDescription={"Create beautifully haunting booklets and brochures that narrate your brand's tale and enchant your readers."} backPrice={1000} imageUrl={"/servicesIcons/Booklet.png"}/>
                    </Grid>
                    <Grid item xs={3}>
                    <FlipCard frontHeader={"Website Development"} backDescription={"Weave engaging narratives through web design that draws visitors into your world, keeping them captivated from page to page."} backPrice={1000} imageUrl={"/servicesIcons/web.png"}/>
                    </Grid>
                    <Grid item xs={3}>
                    <FlipCard frontHeader={"Print & Digital Design"} backDescription={"Craft attention-grabbing brochures, posters, and flyers that send shivers down your customers' spines and leave a lasting impression"} backPrice={1000} imageUrl={"/servicesIcons/Print Design.png"}/>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}