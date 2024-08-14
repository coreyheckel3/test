import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import projectData from '/data/projectData.json'; // Path to your local JSON file
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Footer2 from '/components/Footer2';
import { useEffect } from 'react';

import styles from '/components/styles.css'
import Navigation from '/components/Navigation';


export default function Projects() {
  useEffect(() => {
    document.querySelectorAll("link[rel='preload'][as='style']").forEach(link => link.rel = "stylesheet");
  }, []);
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <Navigation />
      <h1 className='header'>Projects</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'left',marginLeft: '75px' }}>
        {projectData.map((project) => (
          <Card className='cardThing' key={project.id} sx={{ width: 345 }}>
            <CardActionArea className='cardText' component={Link} href={`/projects/${project.id}`} sx={{ textDecoration: 'none' }}>
            <CardMedia
                component="img"
                height="220"
                image={project.image}
                alt={project.title}
              />
              <CardContent className='card'>
                <Typography className='cardText' gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography className='cardText' variant="body2" color="text.secondary">
                  {project.position}
                </Typography>
                <Typography className='cardText' variant="body2" color="text.secondary">
                  {project.startDate} - {project.endDate}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
      <Footer2 />

    </>
  );
}
