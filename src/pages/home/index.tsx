import React from 'react';
import { Redirect } from '@docusaurus/router';

/* supports for `@site/home` index. But, will redirect to `@site/` for the actual page */
export default function ToHomepage(): JSX.Element {
  return <Redirect to="/" />
}