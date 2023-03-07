// This is a simple example Widget to get you started with Übersicht.
// For the full documentation please visit:
// https://github.com/felixhageloh/uebersicht

// You can modify this widget as you see fit, or simply delete this file to
// remove it.

// this is the shell command that gets executed every time this widget refreshes
// export const command = "whoami";

// the refresh frequency in milliseconds
export const refreshFrequency = 1000;

// the CSS style for this widget, written using Emotion
// https://emotion.sh/
export const className = `
  top: 5%;
  left: 5%;
  right: 5%;
  bottom: 5%;
  iframe {
    width: 100%;
    height: 100%;
  }
`

// render gets called after the shell command has executed. The command's output
// is passed in as a string.
export const render = ({ output }) => {
  return (
    <iframe src="https://lgf2111.github.io/ubersicht/goals/index.html" frameBorder="1"></iframe>
  );
}

