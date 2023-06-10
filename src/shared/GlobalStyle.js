import { createGlobalStyle } from 'styled-components';
// import 'modern-normalize/modern-normalize.css';

export const GlobalStyle = createGlobalStyle`

	*{
		box-sizing: border-box;
	}

	html{
		font-size: 14px;
	}
	
  body {
		margin: 0;
		font-family: 'Poppins', sans-serif;
	}

	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		margin: -1px;
		padding: 0;
		overflow: hidden;
		border: 0;
		clip: rect(0 0 0 0);
	}

	.app {
		width: 100vw;
		min-height: 100vh;
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
			monospace;
	}

	h1, h2, h3, h4, h5, h6, p {
		margin-top: 0;
		margin-bottom: 0;
	}

	ul, ol {
		margin-top: 0;
		margin-bottom: 0;
		padding-left: 0;
	}

	img {
		display: block;
		overflow: hidden;
	} 

	li {
		list-style: none;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	button {
		cursor: pointer;
	}

`;
