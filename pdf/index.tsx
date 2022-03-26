import { PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import { render } from 'react-dom';
import App from './App';

render(<PDFViewer><App /></PDFViewer>, document.getElementById('root'));
