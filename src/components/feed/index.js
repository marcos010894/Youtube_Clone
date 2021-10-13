import {Box, Grid,  Toolbar, Typography} from '@material-ui/core';
import { useStyle } from "../useMakeStyle";
import RecommendationAppBar from '../recommendationAppbar';


export default function Feed(){
  const classavatar = useStyle();
  const videos = [
    {
      id: 1,
      title:
        'CRINADO A INTERFAÇE do yoytube | REACT, MATERIAL UI, CSS, StyledComponents',
      channel: 'MARCOS MACHADO',
      views: '11 mi de visualizações',
      date: 'há 1 MES',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb1.png',
    },
    {
      id: 2,
      title:
        'CRINADO A INTERFAÇE do yoytube | REACT, MATERIAL UI, CSS, StyledComponents',
      channel: 'MARCOS MACHADO',
      views: '11 mi de visualizações',
      date: 'há 1 MES',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb1.png',
    },
    {
      id: 3,
      title:
        'CRINADO A INTERFAÇE do yoytube | REACT, MATERIAL UI, CSS, StyledComponents',
      channel: 'MARCOS MACHADO',
      views: '11 mi de visualizações',
      date: 'há 1 MES',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb1.png',
    },
    {
      id: 4,
      title:
        'CRINADO A INTERFAÇE do yoytube | REACT, MATERIAL UI, CSS, StyledComponents',
      channel: 'MARCOS MACHADO',
      views: '11 mi de visualizações',
      date: 'há 1 MES',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb1.png',
    },
    {
      id: 5,
      title:
        'CRINADO A INTERFAÇE do yoytube | REACT, MATERIAL UI, CSS, StyledComponents',
      channel: 'MARCOS MACHADO',
      views: '11 mi de visualizações',
      date: 'há 1 MES',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb1.png',
    },
    {
      id: 6,
      title:
        'CRINADO A INTERFAÇE do yoytube | REACT, MATERIAL UI, CSS, StyledComponents',
      channel: 'MARCOS MACHADO',
      views: '11 mi de visualizações',
      date: 'há 1 MES',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb1.png',
    },
    {
      id: 7,
      title:
        'CRINADO A INTERFAÇE do yoytube | REACT, MATERIAL UI, CSS, StyledComponents',
      channel: 'MARCOS MACHADO',
      views: '11 mi de visualizações',
      date: 'há 1 MES',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb1.png',
    },
    {
      id: 8,
      title:
        'CRINADO A INTERFAÇE do yoytube | REACT, MATERIAL UI, CSS, StyledComponents',
      channel: 'MARCOS MACHADO',
      views: '11 mi de visualizações',
      date: 'há 1 MES',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb1.png',
    },
    {
      id: 9,
      title:
        'CRINADO A INTERFAÇE do yoytube | REACT, MATERIAL UI, CSS, StyledComponents',
      channel: 'MARCOS MACHADO',
      views: '11 mi de visualizações',
      date: 'há 1 MES',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb1.png',
    },
    {
      id: 10,
      title:
        'CRINADO A INTERFAÇE do yoytube | REACT, MATERIAL UI, CSS, StyledComponents',
      channel: 'MARCOS MACHADO',
      views: '11 mi de visualizações',
      date: 'há 1 MES',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb1.png',
    },
    {
      id: 11,
      title:
        'CRINADO A INTERFAÇE do yoytube | REACT, MATERIAL UI, CSS, StyledComponents',
      channel: 'MARCOS MACHADO',
      views: '11 mi de visualizações',
      date: 'há 1 MES',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb1.png',
    },
    {
      id: 12,
      title:
        'CRINADO A INTERFAÇE do yoytube | REACT, MATERIAL UI, CSS, StyledComponents',
      channel: 'MARCOS MACHADO',
      views: '11 mi de visualizações',
      date: 'há 1 MES',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb1.png',
    },    
  ];
  
    return(
        <Box>
          <RecommendationAppBar/>
          <Toolbar />
          <Box paddingTop={5} paddingLeft={22}paddingRight={22} >
            <Grid container spacing={4}>
              {
                videos.map((item, index) =>(
                  <Grid item lg={3} md={4} sm={6} xs={12}>                                       <Box>
                   
                    <img style={ {width: "100%"} } 
                    alt={item.title}
                    src={item.thumb}/>
                    
                      <Box style={{display:"flex"}}>
                      <img 
                        className={classavatar.avatar}
                        style={{ }}
                        src={item.avatar}
                        alt={item.title}
                        />
                      <Box>
                        <Typography 
                            style={{ fontWeight: 600 }}
                            gutterBottom
                            variant='body1'
                            color='textPrimary'
                        >
                        {item.title}
                        </Typography>

                        <Typography 
                          display='block'
                          variant='body2'
                          color='textSecondary'
                        >
                        {item.channel}
                        </Typography>

                        <Typography variant='body2' color='textSecondary'>
                        {`${item.views} • ${item.date}`}
                      </Typography>

                      </Box>
                    </Box>
                   </Box>
                  </Grid>
                ))

              }
            </Grid>
          </Box>
        </Box>
    )
}