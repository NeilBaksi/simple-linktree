import React, { useState, useEffect } from "react";
import { Facebook, Instagram, Twitter, WhatsApp, GitHub, YouTube, LinkedIn, Code, Storefront, MenuBook, Brush, Today } from '@material-ui/icons';
import { SvgIconProps, TextField } from '@material-ui/core';
import { Buttons } from './Button'
import Colors from './Colors'
//@ts-ignore
import * as Animations from 'react-reveal';

type ObjectType = {
    facebook: string;
    instagram: string;
    youtube: string;
    store: string;
    classes: string;
    website: string;
};
   
interface LinkTreeProps {
    links: ObjectType;
    linkTexts: ObjectType;
    handleChangeTextfield(name:string) : void;
}

export const LinkTree: React.FC<LinkTreeProps> = (props) => {
    const { links, linkTexts, handleChangeTextfield } = props;

    let [t,setT] = useState(links)

    useEffect(() => {
        setT(linkTexts)
    }, [linkTexts])

    let facebook: React.ReactElement<SvgIconProps> = <Facebook />; 
    let instagram: React.ReactElement<SvgIconProps> = <Instagram />; 
    let twitter: React.ReactElement<SvgIconProps> = <Twitter />; 
    let whatsapp: React.ReactElement<SvgIconProps> = <WhatsApp />; 
    let github: React.ReactElement<SvgIconProps> = <GitHub />; 
    let youtube: React.ReactElement<SvgIconProps> = <YouTube />; 
    let linkedin: React.ReactElement<SvgIconProps> = <LinkedIn />;
    let code: React.ReactElement<SvgIconProps> = <Code />;
    let website: React.ReactElement<SvgIconProps> = <Today />;
    let store: React.ReactElement<SvgIconProps> = <Storefront />;
    // let classes: React.ReactElement<SvgIconProps> = <MenuBook />;
    let classes: React.ReactElement<SvgIconProps> = <Brush />;

    // const handleChangeTextfield = (name:string) => (event:any) => {
    //     setT({[name] : event?.target.value , ...t})
    // }

    
    return (
        <div>
            <Animations.Fade right>
                <Buttons link={links.website} icon={code} name={linkTexts.website} specificColor={Colors.websiteColor} />
                {/* <TextField id="standard-basic" label="Standard" value={linkTexts.website} onChange={handleChangeTextfield('website')} /> */}
            </Animations.Fade>
            <Animations.Fade left>
                <Buttons link={links.store} icon={store} name={linkTexts.store} specificColor={Colors.storeColor} />
            </Animations.Fade>
            <Animations.Fade right>
                <Buttons link={links.classes} icon={classes} name={linkTexts.classes} specificColor={Colors.instagramColor} />
            </Animations.Fade>
            <Animations.Fade left>
                <Buttons link={links.youtube} icon={youtube} name={linkTexts.youtube} specificColor={Colors.youtubeColor} />
            </Animations.Fade>
            <Animations.Fade left>
                <Buttons link ={links.facebook} icon={facebook} name={linkTexts.facebook} specificColor={Colors.facebookColor}/>
            </Animations.Fade>
            <Animations.Fade right>
                <Buttons link={links.instagram} icon={instagram} name={linkTexts.instagram} specificColor={Colors.instagramColor} />
            </Animations.Fade>
            {/* <Buttons link='https://www.linkedin.com/in/shimona-rastogi-7700a3114/' icon={linkedin} name='LinkedIn' specificColor={Colors.linkedinColor} /> */}
            {/* <Buttons link='#' icon={twitter} name='Twitter' specificColor={Colors.twitterColor} /> */}
            {/* <Buttons link='#' icon={github} name='Github' specificColor={Colors.githubColor} /> */}
            {/* <Buttons link='#' icon={whatsapp} name='Whatsapp' specificColor={Colors.whatsappColor} /> */}
        </div>
    );
}

