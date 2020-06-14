import React, { Fragment, useState, useEffect } from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const InlineTextWheel = (props) => {
  let wheelText = props.wheelText;
  const [curOut, setCurOut] = useState("");

  const typeOut = (curLen, deltaLen, delay, curText) => {
  	let outDelay = 0;
  	let timeStep = 90;
  	
  	if (delay) {
  		outDelay = delay - 1;
  		let blink = delay % 6;
  		if (blink) {
  			setCurOut(wheelText[curText].slice(0, curLen) + "|")
  		} else {
  			setCurOut(wheelText[curText].slice(0, curLen))
  		}
  		
  		window.setTimeout(()=>{typeOut(curLen, deltaLen, outDelay, curText)}, timeStep);
  	} else {
  		let newLen = curLen + deltaLen;
  		let newText = curText;
	  	setCurOut(wheelText[curText].slice(0, newLen) + "|")
	  	let outDelta;
	  	if (newLen <= 0) {
	  		outDelta = 1;
	  		if (curText >= wheelText.length - 1) {
		  		newText = 0;
		  	} else {
		  		newText = curText + 1;
		  	}
		  	outDelay = 1;
	  	} else if (newLen >= wheelText[curText].length + 1) {
	  		outDelay = 13;
	  		outDelta = -1;
	  		
	  	} else {
	  		outDelta = deltaLen;
	  	}
	  	if (outDelta < 0) {
  			timeStep = 40;
  		}
	  	window.setTimeout(()=>{typeOut(newLen, outDelta, outDelay, newText)}, timeStep);
  	}
  }

  useEffect(() => {
  	typeOut(0, 1, 0, 0);
  }, [])

  return (
  	<span>
  		{curOut}
  	</span>
  );
}

const features = [
	{
    title: <Fragment>Give Your Masterpieces Structure.</Fragment>,
    imageUrl: 'img/FontaineMultiDocument.png',
    description: (
      <Fragment>
        Order, reorder, exclude, include, write, rewrite, and delete parts of your project at will. Organize and easily access your research and supplementary materials from within the app itself.
      </Fragment>
    ),
  },
  {
    title: <Fragment>Write What You Want, How You Want.</Fragment>,
    imageUrl: 'img/FontaineDistractionFreeToolbar.png',
    description: (
      <Fragment>
        Fontaine makes no assumptions about how you use it. Use as many or as few of its features as you need.
      </Fragment>
    ),
  },
  {
    title: <Fragment>A Sleek, Modern, Customizable UI.</Fragment>,
    imageUrl: 'img/FontaineSplitPopup.png',
    description: (
      <Fragment>
        Most writing applications don't put enough emphasis on their looks. We like to think we did a decent job. Disagree? Easily change the appearance of the app until you're satisfied.
      </Fragment>
    ),
  },
  {
    title: <Fragment>Free & Open Source.</Fragment>,
    imageUrl: 'img/GPLv3_Logo.svg',
    className: "feature-svg",
    description: (
      <Fragment>
        Like, <i>free</i> free. No strings attatched. Forever.
      </Fragment>
    ),
  },
];

function Feature({imageUrl, title, description, className}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
      	<Zoom>
	        <div className="text--center">
	          <img className={className ||"feature-screenshot"} src={imgUrl} alt={title} />
	        </div>
        </Zoom>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Fontaine`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title left">{siteConfig.title}</h1>
          <p className="hero__subtitle left">A modern manuscript editor for writing <InlineTextWheel 
          		wheelText={["books.", "papers.", "theses.", "screenplays.", "short stories.", "essays.", "articles."]}
          	/>
          </p>
          <p>Fontaine is currently a work-in-progress—and so is this website. We're working very hard to get them both ready for you to use!</p>
          {/*<div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={"https://github.com/EndaHallahan/Fontaine-Editor/releases"}>
              Download
            </Link>
          </div>*/}
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
