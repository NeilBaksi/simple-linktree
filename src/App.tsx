import React, { useState, useEffect } from "react";
import './App.css';
import { CssBaseline, CircularProgress } from '@material-ui/core';
import { createTheme,responsiveFontSizes, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { LinkTree } from './components/Linktree'
import { Title } from './components/Title'
import { Subtitle } from './components/Subtitle'
import { ImageAvatar } from './components/Avatar'
import ProfilePhoto from './photos/avatar.jpeg'
import { app, db, getCollection, setDocument } from './base';
//@ts-ignore
import * as Animations from 'react-reveal';

const theme = createTheme({
  typography: {
    fontFamily: 'Raleway, Arial',
  },
});

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

type ObjectType = {
  facebook: string;
  instagram: string;
  youtube: string;
  store: string;
  classes: string;
  website: string;
};

function App() {
  const classes = useStyles();

  const [links, setLinks] = useState<ObjectType>({facebook: "", instagram: "", youtube:"", store:"", classes:"", website: ""});
  const [linkTexts, setLinkTexts] = useState<ObjectType>({facebook: "", instagram: "", youtube:"", store:"", classes:"", website: ""});
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCollection(db, 'links').then((list)=>{
      //@ts-ignore
      setLinks(list[0])
      //@ts-ignore
      setLinkTexts(list[1])
      setLoading(false)
    })
    setDocument(db, 'instagram', 'https://www.facebook.com/makeupbyshimona')
    
  }, [])

  const handleChangeTextfield = (name:string) => (event:any) => {
    setLinkTexts({[name] : event?.target.value , ...linkTexts})
  }

  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline />
      <div className="App">
        {loading? <CircularProgress color='secondary' /> :
          <div id="App-content" className={classes.root}>
            <Animations.Fade top>
            <>
              <ImageAvatar alt="SR" src={ProfilePhoto}/>
              <Title title="@makeupbyshimona"/>
              <Subtitle subtitle="Discover all my offerings here!"/>
            </>
            </Animations.Fade>
            <LinkTree links={links} linkTexts={linkTexts} handleChangeTextfield={handleChangeTextfield}/>
          </div>
        }
      </div>
    </ThemeProvider>
  );
}

export default App;
