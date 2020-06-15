import React, { Fragment, useState, useEffect } from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const MoneyRaisedDisplay = (props) => {
  return (
    <div id="money-raised-display">
      <div>This year, we've raised</div>
      ${props.raised} <span>of the</span> ${props.cost}*
      <div className="small">*Rough Estimate</div>
      <div>needed to cover Fontaine's annual development costs.</div>
    </div>
  );
}


function Support() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Fontaine`}
      description="Support Fontaine">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Fontaine may be free, but it's not free to develop.</h1>
        </div>
      </header>
      <main>
        <div className="center">
          <MoneyRaisedDisplay raised={0} cost={300}/>
          <p>Help us keep Fontaine going by donating back some of the money you saved!</p>
          <div id="donations-wrapper">
            <div className="donate-container">
              <h3>One-time donation with PayPal</h3>
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="PGDBJDL3JUBD8" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
              </form>
            </div>
            <div className="donate-container">
              <h3>Monthly donation with Patreon</h3>
              <a className="button patreon" href="https://www.patreon.com/bePatron?u=37253390" data-patreon-widget-type="become-patron-button">Become a Patron!</a><script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Support;
