import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Card, CardMedia, CardContent, Typography, CardHeader } from '@mui/material';
import Link from 'next/link';
import Navigation from '/components/Navigation';
import '/components/styles.css'
import Footer2 from '/components/Footer2';

// Example of importing JSON directly
// Import your JSON file if it's not being served as static content
import projectData from '/data/projectData.json'; 

const Project = () => {
  const [projects, setProject] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    console.log('project useEffect fired with project:', id);
    // Check if projectData is available and not undefined
    if (projectData) {
      const foundProject = projectData.find(p => p.id === id);
      if (foundProject) {
        setProject(foundProject);
        setLoading(false);
        console.log(foundProject);
      }
    }
  }, [id]);

  if (loading) {
    return <div><h2>Loading...</h2></div>;
  } else if (!projects) {
    return <div><h2>Project not found.</h2></div>;
  } else {
    return (
      <>
      <Navigation />
      
      <Card
        variant='outlined'
        sx={{
          maxWidth: 550,
          height: 'auto',
          marginLeft: 'auto',
          marginRight: 'auto',
          borderRadius: 5,
          border: '1px solid #1e8678',
          boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
        }}
      >
        <CardHeader
          title={projects.title}
          subheader={`${projects.startDate} - ${projects.endDate}`}
          sx={{
            borderBottom: '1px solid #1e8678',
            fontWeight: 'bold'
          }}
        />
        <CardMedia
        className='cardThing'
          component='img'
          image={
            projects.image
          }
        />

        <CardContent className='cardThing'>
          <Typography
            variant='body2'
            color='textSecondary'
            component='span'
            sx={{
              borderBottom: '1px solid #1e8678',
              fontWeight: 'bold'
            }}
          >
            <div className='cardTextPage'>
            <dl>
              <p>
                <dt className='title'>Position:</dt>
                <dd>{projects.position}</dd>
              </p>
              <p>
                <dt className='title'>Technologies:</dt>
                <dd>{projects.technologies}</dd>
              </p>
              <p>
                <dt className='title'>Description:</dt>
                <dd>{projects.description}</dd>
              </p>
            </dl>
            </div>
          </Typography>
        </CardContent>
      </Card>
      <Footer2 />

      </>
    );
  }
};

export default Project;
