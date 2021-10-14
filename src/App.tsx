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
import ProfilePhoto2 from './photos/avatar2.jpeg'
import ProfilePhoto3 from './photos/avatar3.jpeg'
import ProfilePhoto4 from './photos/avatar4.jpeg'
import { db, getCollection, setDocument } from './base';
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
    background: 'rgba(255,255,255,0.85)',
    padding: 15,
    borderRadius: 10
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
  const dps = [ProfilePhoto, ProfilePhoto2, ProfilePhoto3, ProfilePhoto4]

  const [count, setCount] = useState(0)
   
   useEffect(() => {
    const timer = setTimeout(() => setCount((count+1)%4), 5*1e3)
    return () => clearTimeout(timer)
   })
   

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
      <div className="App" style={{background: `url('${process.env.PUBLIC_URL}/background.jpeg')`, backgroundSize: 'cover'}}>
        {loading? <CircularProgress color='secondary' /> :
          <div id="App-content" className={classes.root}>
            <Animations.Fade top>
            <>
              <ImageAvatar alt="SR" src={dps[count]}/>
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
