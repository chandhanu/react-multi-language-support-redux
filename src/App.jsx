import React from 'react';
import {Translate, withLocalize } from 'react-localize-redux';
import enTranslations from './translations/en.json';
import frTranslations from './translations/fr.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    props.initialize({
      languages: [
        { name: 'English', code: 'en' },
        { name: 'French', code: 'fr' }
      ],
      translation: enTranslations,
      options: { renderToStaticMarkup: false }
    });
    props.addTranslationForLanguage(frTranslations, 'fr');
  }

  render() {
    return (
      <div>
        <h1><Translate id="hello" /></h1>
        <h1><Translate id="goodbye" /></h1>
        <button onClick={() => this.props.setActiveLanguage('en')}>English</button>
        <button onClick={() => this.props.setActiveLanguage('fr')}>French</button>
      </div>
    );
  }
}

export default withLocalize(App);