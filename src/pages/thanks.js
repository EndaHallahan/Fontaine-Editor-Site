import React, { Fragment, useState, useEffect } from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Thanks() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Fontaine`}
      description="Thank you">
      <main>
        <div className="center">
          <h1>Thank you for your donation!</h1>
          <p>We appreciate your support. The tracker is updated manually, so don't worry if it hasn't changed yet.</p>
        </div>
      </main>
    </Layout>
  );
}

export default Thanks;
